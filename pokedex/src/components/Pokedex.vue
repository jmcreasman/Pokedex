<template>
<div class="app">
    <header-nav title="Pokédex"></header-nav>
    <div class="content-container">
        <p class="info-text">Silph Co in collaboration with Professor Samuel Oak proudly present the Pokédex; a handheld electronic encyclopedia device capable of recording and retaining information of any Pokémon encountered. Soon to be an invaluable tool to all Trainers in the Pokémon world!</p>
        <section>
            <div class="pokedex-header">
                <div class="pokedex-number">#001</div>
                <div class="pokedex-name">Bulbasaur</div>
                <div class="pokedex-type">Grass/Poison</div>
            </div>
            <div class="pokedex-body">
                <div class="column-1">
                    <div class="pokedex-category">Seed Pokémon</div>
                    <div class="pokedex-total-base-stats">Total Base Stats: 318</div>
                    <div class="pokedex-height">Height: 2'04"</div>
                    <div class="pokedex-weight">Weight 15.2 lbs.</div>
                </div>
                <div class="column-2">
                    <img src="../assets/001Bulbasaur.png">
                </div>
            </div>
        </section>
    </div>
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
    .app {
        height: 100vh;
    }

    .content-container {
        height: -70px;
        overflow-y: scroll;
    }

    .content-container::-webkit-scrollbar { 
        display: none; 
    }

    .info-text {
        padding: 23px 27px 19px 25px;
        font-family: Roboto-Regular;
        font-size: 18px;
        color: #717171;
        line-height: 23px;
        text-align: center;
    }

    .pokedex-header {
        width: 100vw;
        height: 6.25vh;
        background-color: #9B9B9B;
        display: table;
    }
    .pokedex-number {
        font-size: 22px;
        color: #FFFFFF;
        display: table-cell;
        padding-left: 20px;
        vertical-align: middle;
        text-align: left;
    }
    .pokedex-name {
        font-size: 22px;
        color: #FFFFFF;
        display: table-cell;
        vertical-align: middle;
        text-align: left;
    }
    .pokedex-type {
        font-size: 22px;
        color: #FFFFFF;
        padding-right: 25px;
        display: table-cell;
        vertical-align: middle;
        text-align: right;
    }

    .pokedex-body {
        width: 100vw;
        height: 20.55vh;
    }
    .column-1 {
        width: 60vw;
        float: left;
    }
    .column-2 {
        margin-left: 60vw;
    }
    .pokedex-category {
        font-size: 16px;
        color: #717171;
        padding-top: 20px;
        padding-left: 15px;
        margin-bottom: 0px;
    }
    .pokedex-total-base-stats {
        font-size: 16px;
        color: #9B9B9B;
        margin-top: 7px;
        padding-left: 15px;
    }
    .pokedex-height {
        font-size: 16px;
        color: #9B9B9B;
        margin-top: 0px;
        padding-left: 15px;
    }
    .pokedex-weight {
        font-size: 16px;
        color: #9B9B9B;
        margin-top: 0px;
        padding-left: 15px;
        margin-bottom: 30px;
    }
    img {
        height: 128px;
        width: 128px;
    }
</style>