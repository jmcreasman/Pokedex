<template>
<div class="app">
    <header-nav title="Pokédex"></header-nav>
    <div class="content-container">
        <p class="info-text">Some kind of intro text or something will go here. Copy needed.</p>
        <section>
            <div class="pokedexHeader">
                <div class="pokedexNumber">#001</div>
                <div class="pokedexName">Bulbasaur</div>
                <div class="pokedexType">Grass/Poison</div>
            </div>
            <div class="pokedexBody">
                <div class="column-1">
                    <div class="pokedexCategory">Seed Pokémon</div>
                    <div class="pokedexHeight">Height: 2'04"</div>
                    <div class="pokedexWeight">Weight 15.2 lbs.</div>
                </div>
                <div class="column-2">
                    <img src="../assets/001Bulbasaur.png">
                </div>
            </div>
        </section>
        <section>
            <div class="pokedexHeader">
                <div class="pokedexNumber">#001</div>
                <div class="pokedexName">Bulbasaur</div>
                <div class="pokedexType">Grass/Poison</div>
            </div>
            <div class="pokedexBody">
                <div class="column-1">
                    <div class="pokedexCategory">Seed Pokémon</div>
                    <div class="pokedexHeight">Height: 2'04"</div>
                    <div class="pokedexWeight">Weight 15.2 lbs.</div>
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

    .pokedexHeader {
        width: 100vw;
        height: 6.25vh;
        background-color: #9B9B9B;
        display: table;
    }
    .pokedexNumber {
        font-size: 22px;
        color: #FFFFFF;
        display: table-cell;
        padding-left: 20px;
        vertical-align: middle;
        text-align: left;
    }
    .pokedexName {
        font-size: 22px;
        color: #FFFFFF;
        display: table-cell;
        vertical-align: middle;
        text-align: left;
    }
    .pokedexType {
        font-size: 22px;
        color: #FFFFFF;
        padding-right: 25px;
        display: table-cell;
        vertical-align: middle;
        text-align: right;
    }

    .pokedexBody {
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
    .pokedexCategory {
        font-size: 16px;
        color: #717171;
        padding-top: 20px;
        margin-bottom: 0px;
    }
    .pokedexHeight {
        font-size: 16px;
        color: #9B9B9B;
        margin-top: 7px;
        margin-bottom: 14px;
    }
    .pokedexWeight {
        font-size: 16px;
        color: #9B9B9B;
        margin-top: 0px;
        margin-bottom: 30px;
    }
    .pokedexImage {
    }
    img {
        height: 128px;
        width: 128px;
    }
</style>