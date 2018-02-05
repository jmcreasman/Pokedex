<template>
<div>
    Hello World!
</div>
</template>

<script>

    import router from '../router';
    import Vue from 'vue';
    import HeaderNav from '../components/HeaderNav.vue';

    export default {
    name: 'Pokedex',

    data () {
        return {
        }
    },

    components: {
      HeaderNav,
  }
}
</script>

<style scoped>
</style>