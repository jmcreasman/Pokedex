<template>
  <div class="app">
    <header>HEADER PLACEHOLDER</header>
    <div class="main">
      <h1>
        Welcome back,<br> Trainer Red
      </h1>
      <div class="top-section message">
        <div class="widthOfContent">
          <img class="icon" src="">
          <div class="column">
            <h2>06.14.17 - Message</h2>
            There is a payment due soon.
          </div>
        </div>
        <img class="open-arrow" src="">
      </div>
      <div class="top-section my-policy">
        <div class="widthOfContent">
          <img class="icon" src="">
          <div class="column">
            <h2>My Policy</h2>
            1234567-XXXX
          </div>
        </div>
        <img class="open-arrow" src="">
      </div>

      <section>
        <button class="column left">
          <img src="">
          <span>Make A Payment</span>
        </button>
        <button class="column right">
          <img src="">
          <span>Payment History</span>
        </button>
      </section>
      <section>
        <button class="column left">
          <img src="">
          <span>Accident Help</span>
        </button>
        <button class="column right">
          <img src="">
          <span>Claim History</span>
        </button>
      </section>
    </div>
    <footer class="footer">FOOTER PLACEHOLDER</footer>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app {
    /* background: linear-gradient(-41deg, #2A354C 1%, #293951 41%, #09B9EE 100%); */
    height: 100vh;
  }
</style>
