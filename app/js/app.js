(function() {
  'use strict';
  var app = angular.module('nationalPokedex', []);

  app.controller('DisplayPokemon', function() {
    this.products = testpokemons;
  });

  var testpokemons = [
    { name: "Bulbasaur", number: 1, image: "Coming Soon!"},
    { name: "Ivysaur", number: 2, image: "Coming Soon!"},
    { name: "Venusaur", number: 3, image: "Coming Soon!"},
  ];
}());
