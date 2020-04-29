<template>
  <div class="wrapper">
    <swiper v-if="showSwiper" :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" alt="尧哥的去哪网门票">
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"/>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #ffffff !important
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.66%
    background #eeeeee
    .swiper-img
      width 100%
</style>
