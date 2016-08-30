(function() {
  'use strict';
  angular.module('nationalPokedex')
    .controller('DisplayPokemon', function() {
      this.products = testpokemons;
    });

  var testpokemons = [{
    name: "Bulbasaur",
    number: 1,
    image: "images/pokemon/bulbasaur.png"
  }, {
    name: "Bulbasaur",
    number: 1,
    image: "images/pokemon/bulbasaur.png"
  }, {
    name: "Bulbasaur",
    number: 1,
    image: "images/pokemon/bulbasaur.png"
  }, ];
}());
