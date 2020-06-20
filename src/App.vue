<!--
 * @Description: App.vue
 * @Author: Looper
 * @Date: 2020-06-20 20:20:43
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-20 21:21:50
 * @FilePath: /Travel/src/App.vue
--> 
<template>
  <div id="app">
    <!-- 当前路由地址对应的内容 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
