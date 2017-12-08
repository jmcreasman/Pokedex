<template>
  <div id="app">
    <div class="primary-view" >
      <router-view class="primary-view-content"></router-view>
    </div>
  </div>
</template>

<script>

import router from './router';

export default {
  name: 'app'
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    /* text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
  }
  body {
      margin: 0;
      width: 100%;
      height: 100%;
  }

  .primary-view, .primary-view-content, .html {
    width: 100%;
    height: 100%;
  }
</style>
