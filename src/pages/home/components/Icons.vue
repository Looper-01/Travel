<!--
 * @Description: Icons.vue
 * @Author: Looper
 * @Date: 2020-04-07 15:37:40
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-27 22:48:09
 * @FilePath: /Travel/src/pages/home/components/Icons.vue
--> 
<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div v-for="item of page" :key="item.id" class="icon">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  setup(props) {
    const swiperOption = {
      autoPlay: false
    };

    // 计算属性
    const pages = computed(() => {
      const pages = [];
      props.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    });

    // 导出数据
    return { swiperOption, pages };
  },
  computed: {}
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
}

.icons {
  margin-top: 0.1rem;

  .icon {
    overflow: hidden;
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkTextColor;
      text-align: center;
      ellipsis();
    }
  }
}
</style>
