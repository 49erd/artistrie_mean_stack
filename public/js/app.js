'use strict';

var Artistrie = angular.module('Artistrie');

Artistrie.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/art-list.html',
        controller: 'PieceCtrl',
      })
    
      .when('/:id', {
        templateUrl: '/partials/art-detail.html',
        controller: 'PieceDetailCtrl'
      })

      .when('/contact', {
      	templateUrl: '/partials/contact.html',
      	controller: 'ContactCtrl'
      })

      .otherwise({
      	redirectTo: '/'
      });

  });