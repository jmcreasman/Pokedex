<template>
  <div>
    <div class="header-top invisible-scrollbar" :class="{dashboard: dashboard}" ref="scrollDiv">
      <a class="back-arrow" v-if="!dashboard"><img src="../assets/back_arrow.svg"/></a>
      <h4 v-if="title">{{title}}</h4>
      <div class="header">
        <div id="nav-icon" @click=" collapsed = !collapsed, navIconClicked = true" v-bind:class="{'nav-icon-transition' : !collapsed }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="nav-flyout" v-bind:class="{'nav-flyout-off-screen' : collapsed }">
      <div class="nav-flyout-circle" v-bind:class="{'nav-flyout-grow' : !collapsed }"></div>
      <div>
        <div class="nav-flyout-links-primary">
          <a class="nav-flyout-menu-item-1" v-bind:class="{'fade-in' : !collapsed, 'fade-out' : collapsed && navIconClicked }">Message Center</a>
          <a class="nav-flyout-menu-item-2" v-bind:class="{'fade-in' : !collapsed, 'fade-out' : collapsed && navIconClicked }">My Policy</a>
          <a class="nav-flyout-menu-item-3" v-bind:class="{'fade-in' : !collapsed, 'fade-out' : collapsed && navIconClicked }">Make A Payment</a>
          <a class="nav-flyout-menu-item-4" v-bind:class="{'fade-in' : !collapsed, 'fade-out' : collapsed && navIconClicked }">Payment History</a>
          <a class="nav-flyout-menu-item-5" v-bind:class="{'fade-in' : !collapsed, 'fade-out' : collapsed && navIconClicked }">File A Claim</a>
          <a class="nav-flyout-menu-item-6" v-bind:class="{'fade-in' : !collapsed, 'fade-out' : collapsed && navIconClicked }">Claims</a>
        </div>
        <div class="nav-flyout-menu-break" v-bind:class="{'fade-in' : !collapsed, 'fade-out' : collapsed && navIconClicked }"></div>
        <div class="nav-flyout-links-secondary">
          <a class="nav-flyout-menu-item-7" v-bind:class="{'fade-in' : !collapsed, 'fade-out' : collapsed && navIconClicked }">FAQ</a>
          <a class="nav-flyout-menu-item-8" v-bind:class="{'fade-in' : !collapsed, 'fade-out' : collapsed && navIconClicked }">Settings</a>
          <a class="nav-flyout-menu-item-9" v-bind:class="{'fade-in' : !collapsed, 'fade-out' : collapsed && navIconClicked }">Legal</a>
          <a class="nav-flyout-menu-item-10" v-bind:class="{'fade-in' : !collapsed, 'fade-out' : collapsed && navIconClicked }">Sign Out</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import router from '../router';
  import Vue from 'vue';

  export default {
  name: 'HeaderNav',

  props: {
    title: {
      type: String
    },
    dashboard: {
      type: Boolean
    },
  },

  data () {
    return {
      collapsed: true,
      navIconClicked: false,
    }
  }
}
</script>

<style scoped>
  .header-top {
    width: 100%;
    height: 70px;
    display: flex;
    background-image: url("../assets/background_gradient.jpg");
    position: relative;
  }

  .dashboard {
    background-image: none;
  }

  .back-arrow {
    margin-top: 25px;
    margin-left: 28px;
  }

  .header {
    margin-top: 25px;
    margin-bottom: 5px;
    margin-right: 20px;
    position: absolute;
    top: 0;
    right: 0;
  }

  h4 {
    font-family: Roboto-Medium;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.3px;
    padding-top: 5px;
    margin-right: 50px;
    width: 100%;
  }

  .invisible-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .nav-flyout {
    z-index: 2;
    top: 7vh;
    position: fixed;
    width: 100%;
  }

  .nav-flyout-links-primary {
    font-size: 27px;
    line-height: 47px;
  }

  .nav-flyout-links-secondary {
    font-size: 20px;
    line-height: 34px;
  }

  .nav-flyout a {
    color: #FFFFFF;
    display: block;
    font-family: 'Roboto-Light';
    font-weight: 100;
    letter-spacing: 0;
    text-decoration: none;
    opacity: 0;
    position: relative;
    text-align: center;
  }

  .nav-flyout-menu-break {
    border-top: 1px solid #10A2C2;
    margin: 25px 0px;
    opacity: 0;
    position: relative;
  }

  @keyframes top-slide-in {
    from { top: -60px; opacity: 0; }
    to   { top: 0px; opacity: 1; }
  }

  @-webkit-keyframes top-slide-in {
    from { top: -60px; opacity: 0; }
    to   { top: 0px; opacity: 1; }
  }

  @keyframes top-slide-out {
    from { top: 0px; opacity: 1; }
    to   { top: -60px; opacity: 0; }
  }

  @-webkit-keyframes top-slide-out {
    from { top: 0px; opacity: 1; }
    to   { top: -60px; opacity: 0; }
  }

  @keyframes nav-fly-off-screen {
    from { top: 0px; opacity: 1; }
    to   { top: -600px; opacity: 0; }
  }

  @-webkit-keyframes nav-fly-off-screen {
    from { top: 0px; opacity: 1; }
    to   { top: -600px; opacity: 0; }
  }

  /* Nav flyout animation */
  .nav-flyout-circle {
    z-index: -1;
    width: 1100px;
    height: 1100px;
    border-radius: 55%;
    position: fixed;
    background-color: #148FBB;
    transform: scale(.25);
    transition: transform .55s ease-out;
    -webkit-transition: transform .55s ease-out; /* Safari */
    top: -760px;
    left: 80px;
  }

  .nav-flyout-menu-item-1, .nav-flyout-menu-item-2, .nav-flyout-menu-item-3, .nav-flyout-menu-item-4,
  .nav-flyout-menu-item-5, .nav-flyout-menu-item-6, .nav-flyout-menu-item-7, .nav-flyout-menu-item-8,
  .nav-flyout-menu-item-9, .nav-flyout-menu-item-10, .nav-flyout-menu-break {
    pointer-events: none;
  }

  .fade-in {
    pointer-events: auto;
    animation: top-slide-in .3s normal forwards;
    -webkit-animation: top-slide-in .3s normal forwards;
  }

  .fade-out {
    pointer-events: none;
    animation: top-slide-out .2s forwards;
    -webkit-animation: top-slide-out .2s forwards;
  }

  .nav-flyout-menu-item-1.fade-in {
      animation-delay: .20s;
  }
  .nav-flyout-menu-item-2.fade-in {
      animation-delay: .25s;
  }
  .nav-flyout-menu-item-3.fade-in {
      animation-delay: .30s;
  }
  .nav-flyout-menu-item-4.fade-in {
      animation-delay: .35s;
  }
  .nav-flyout-menu-item-5.fade-in {
      animation-delay: .40s;
  }
  .nav-flyout-menu-item-6.fade-in {
      animation-delay: .45s;
  }
  .nav-flyout-menu-item-7.fade-in {
      animation-delay: .50s;
  }
  .nav-flyout-menu-item-8.fade-in {
      animation-delay: .55s;
  }
  .nav-flyout-menu-item-9.fade-in {
      animation-delay: .60s;
  }
  .nav-flyout-menu-item-10.fade-in {
      animation-delay: .65s;
  }
  .nav-flyout-menu-break.fade-in {
      animation-delay: .45s;
  }

  .nav-flyout-off-screen {
    animation: nav-fly-off-screen .3s normal forwards;
    -webkit-animation: nav-fly-off-screen .3s normal forwards;
    animation-delay: .3s;
  }

  .nav-flyout-grow {
    transform: scale(1) translate(-90vw, 65vh);
  }

  /* Menu hamburger icon animation */
  #nav-icon {
    z-index: 3;
    width: 30px;
    height: 45px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
  }

  #nav-icon span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  #nav-icon span:nth-child(1) {
    top: 0px;
  }

  #nav-icon span:nth-child(2) {
    top: 9px;
  }

  #nav-icon span:nth-child(3) {
    top: 18px;
  }

  #nav-icon.nav-icon-transition span:nth-child(1) {
    -webkit-transform: rotate(135deg) translate(6.4px, -6.4px);
    -moz-transform: rotate(135deg) translate(6.4px, -6.4px);
    -o-transform: rotate(135deg) translate(6.4px, -6.4px);
    transform: rotate(135deg) translate(6.4px, -6.4px);
  }

  #nav-icon.nav-icon-transition span:nth-child(2) {
    opacity: 0;
  }

  #nav-icon.nav-icon-transition span:nth-child(3) {
    -webkit-transform: rotate(-135deg) translate(6.4px, 6.4px);
    -moz-transform: rotate(-135deg) translate(6.4px, 6.4px);
    -o-transform: rotate(-135deg) translate(6.4px, 6.4px);
    transform: rotate(-135deg) translate(6.4px, 6.4px);
  }
</style>
