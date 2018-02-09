<template>
  <div class="app">
    <header-nav class="header-bar" dashboard="true"></header-nav>
    <div class="main">
      <h1>
        Welcome back<br> Trainer Red
      </h1>
      <div class="top-section my-policy">
        <div class="widthOfContent">
          <img class="icon" src="../assets/my_policy.svg">
          <div class="column">
            <h2>Trainer ID Number</h2>
            1234567-XXXX
          </div>
        </div>
      </div>

      <section>
        <button v-on:click="navigateTo('/pokedex')" class="column left">
          <img src="../assets/make_payment.svg">
          <span>Pokedex</span>
        </button>
        <button class="column right">
          <img src="../assets/payment_history.svg">
          <span>Maps</span>
        </button>
      </section>
      <section>
        <button class="column left">
          <img src="../assets/accident_help.svg">
          <span>Items</span>
        </button>
        <button class="column right">
          <img src="../assets/claim_history.svg">
          <span>Notable Trainers</span>
        </button>
      </section>

    </div>
    <trainer-info class="footer-bar"></trainer-info>
  </div>
</template>

<script>

import Vue from 'vue';
import router from '../router';
import HeaderNav from '../components/HeaderNav.vue';
import TrainerInfo from '../components/TrainerInfo.vue';
import Pokedex from '../components/Pokedex.vue';

export default {
  name: 'Dashboard',

  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    navigateTo(path) {
      router.push(path);
    },
  },
  components: {
      HeaderNav,
      TrainerInfo,
      Pokedex,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  * {
    margin: 0;
    padding: 0;
  }

  .app {
    background: linear-gradient(-41deg, #2A354C 1%, #293951 41%, #09B9EE 100%);
    height: 100vh;
  }

  .main {
    top: -60px;
    color: white;
    height: 75%;
    padding: 0px 18px;
    order: 1;
    flex: 1;
    z-index: 1;
    width: 100%;
    position: relative;
    /* transition: .4s cubic-bezier(0.215, 0.61, 0.355, 1); */
  }

  .main-content {
    position: absolute;
    overflow-y: scroll;
    overflow-x: visible;
  }

  .header-bar {
    width: 100%;
    /* animation: fadein 0.4s;
    -webkit-animation: fadein 0.4s; */
  }

  .footer-bar {
    position: absolute;
    bottom: 0;
  }

  .invisible-scrollbar::-webkit-scrollbar {
    display: none;
  }

  html::-webkit-scrollbar, body::-webkit-scrollbar {
    display: none;
  }

  button {
    width: 165px;
    height: 100px;
    color: white;
    background: none;
    /* opacity: 0; */
    position: relative;
    /* animation: bottom-slide-in 0.3s forwards;
    animation-delay: 2s;
    -webkit-animation: bottom-slide-in  0.3s forwards;
    -webkit-animation-delay: 2s; */
  }

  button.column {
    font-size: 14px;
    letter-spacing: 0.4px;
    flex-direction: column;
    width: auto;
    border: none;
  }

  button.column.left {
    margin-right: 5px;
  }

  button.column.right {
    margin-left: 5px;
  }

  .column {
    font-size: 14px;
    letter-spacing: 0.4px;
    flex-direction: column;
    width: auto;
    border: none;
  }

  div, section, button {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  h1 {
    font-size: 27px;
    font-weight: 100;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 30px;
    width: 100%;
    display: flex;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
    /* animation: fadein 0.5s forwards;
    -webkit-animation: fadein 0.5s forwards; */
  }

  h2 {
    font-size: 21px;
    font-weight: 100;
    color: #FFFFFF;
    letter-spacing: 0;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  img {
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 10px;
  }

  .icon {
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 0px;
  }

  .open-arrow {
    margin-bottom: 0px;
  }

  section.column {
    width: 50%;
    justify-content: center;
  }

  section .column {
    border: 1px solid #148FBB;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.18);
    border-radius: 11px;
    width: 48%;
    box-sizing: border-box;
    align-items: center;
  }

  .top-section {
    justify-content: space-between;
    background: rgba(0,0,0,0.40);
    border: 1px solid #148FBB;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.18);
    border-radius: 11px;
    height: 80px;
    align-items: center;
    position: relative;
    /* opacity: 0; */
  }

  .message {
    animation: left-slide-in 0.3s forwards;
    animation-delay: 0.5s;
    -webkit-animation: left-slide-in  0.3s forwards;
    -webkit-animation-delay: 0.5s;
  }

  .my-policy {
    animation: left-slide-in 0.3s forwards;
    animation-delay: 0.7;
    -webkit-animation: left-slide-in  0.3s forwards;
    -webkit-animation-delay: 0.7s;
  }

  .widthOfContent {
    width: auto;
    align-items: center;
  }

/* For when working footer is complete */
  /* #trainer-info {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: red;

    display: none;
    height: 1vh;
    flex-direction: column;
    overflow: hidden;
  } */
</style>
