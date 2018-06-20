<template>
  <div class="container">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index">
          <img class="gallery-img" :src="item" alt="尧哥的去哪网门票">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return [
          'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg',
          'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg'
        ]
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-ingdex 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .gallery-img
        width 100%
      .swiper-pagination
        color #ffffff
        bottom -1rem
</style>
