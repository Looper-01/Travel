<!--
 * @Description: Home
 * @Author: Looper
 * @Date: 2020-06-20 20:20:43
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-26 15:35:19
 * @FilePath: /Travel/src/pages/home/Home.vue
--> 
<template>
  <div>
    <home-header />
    <home-swiper :list="data.swiperList" />
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
import { reactive, computed, onMounted, onActivated } from "vue";
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
    // 原data函数，需要reactive函数封装才可以响应式
    const data = reactive({
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    });

    // vuex
    const store = useStore();

    // computed属性
    const city = computed(() => {
      return store.state.city;
    });

    // methods start
    function getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const result = res.data;
        data.swiperList = result.swiperList;
        data.iconList = result.iconList;
        data.recommendList = result.recommendList;
        data.weekendList = result.weekendList;
      }
    }

    function getHomeInfo() {
      axios.get("/api/index.json?city=" + city).then(getHomeInfoSucc);
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
    return { data, city };
  }
};
</script>
<style>
</style>
