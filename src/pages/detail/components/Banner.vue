<!--
 * @Description: Banner
 * @Author: Looper
 * @Date: 2020-06-20 20:20:43
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-25 10:32:50
 * @FilePath: /Travel/src/pages/detail/components/Banner.vue
--> 
<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" class="banner-img" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ bannerImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery v-show="showGallery" :imgs="bannerImgs" @close="handleGalleryClose" />
    </fade-animation>
  </div>
</template>
<script>
import CommonGallery from "@/common/gallery/Gallery";
import FadeAnimation from "@/common/fade/FadeAnimation";
export default {
  name: "DetailBanner",
  components: {
    CommonGallery,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data() {
    return {
      showGallery: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true;
    },
    handleGalleryClose() {
      this.showGallery = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #ffffff;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      padding: 0 0.4rem;
      margin-top: 0.14rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
