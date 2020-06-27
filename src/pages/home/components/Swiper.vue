<!--
 * @Description: Swiper Component
 * @Author: Looper
 * @Date: 2020-04-07 15:37:40
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-27 22:54:50
 * @FilePath: /Travel/src/pages/home/components/Swiper.vue
--> 
<template>
  <div class="wrapper">
    <swiper v-if="showSwiper" :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" alt="尧哥的去哪网门票" />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  setup(props) {
    const swiperOption = {
      pagination: ".swiper-pagination",
      loop: true
    };

    const showSwiper = computed(() => {
      return props.list.length;
    });

    return { swiperOption, showSwiper };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #ffffff !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.66%;
  background: #eeeeee;

  .swiper-img {
    width: 100%;
  }
}
</style>
