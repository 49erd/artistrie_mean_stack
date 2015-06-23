'use strict';

var Artistrie = angular.module('Artistrie');

Artistrie.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeCtrl',
        css: '/stylesheets/home.css'
      })

      .when('/list', {
        templateUrl: '/partials/art-list.html',
        controller: 'PieceCtrl',
      })
    
      .when('/list/:id', {
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