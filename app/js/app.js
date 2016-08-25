(function() {
  'use strict';
  var app = angular.module('nationalPokedex', []);

  app.controller('DisplayPokemon', function(){
    this.product = testpokemon;
  });

  var testpokemon = {
    name: "Bulbasaur",
    number: 1,
    image: "Coming Soon!",
  };
}());
