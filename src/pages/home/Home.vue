<!--
 * @Description: Home
 * @Author: Looper
 * @Date: 2020-06-20 20:20:43
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-27 22:36:29
 * @FilePath: /Travel/src/pages/home/Home.vue
--> 
<template>
  <div>
    <home-header />
    <home-swiper :list="swiperList" />
    <home-icons :list="data.iconList" />
    <home-recommend :list="data.recommendList" />
    <home-weekend :list="data.weekendList" />
  </div>
</template>
<script>
// Composition API
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
import { useStore } from "vuex";
import { reactive, computed, onMounted, onActivated, ref } from "vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup() {
    // 方法1：原data函数，需要reactive函数封装才可以响应式
    const data = reactive({
      lastCity: "",
      iconList: [],
      recommendList: [],
      weekendList: []
    });

    // 方法2：使用ref来包装数据，实现响应式，底层原理是通过proxy来实现劫持
    const swiperList = ref([]);

    // vuex
    const store = useStore();

    // computed属性
    const city = store.state.city;

    // methods start
    async function getHomeInfo() {
      let res = await axios.get("/api/index.json?city=" + city);
      res = res.data;
      if (res.ret && res.data) {
        const result = res.data;
        swiperList.value = result.swiperList;
        data.iconList = result.iconList;
        data.recommendList = result.recommendList;
        data.weekendList = result.weekendList;
      }
    }
    // methods end

    // 原来是生命周期的mounted
    onMounted(() => {
      data.lastCity = city;
      getHomeInfo();
    });

    // 原生命周期的activated
    onActivated(() => {
      if (data.lastCity !== city) {
        data.lastCity = city;
        getHomeInfo();
      }
    });
    // 输出
    return { data, city, swiperList };
  }
};
</script>
<style>
</style>
