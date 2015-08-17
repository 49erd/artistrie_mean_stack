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
        css: 'stylesheets/list.css'
      })
    
      .when('/list/:id', {
        templateUrl: '/partials/art-detail.html',
        controller: 'PieceDetailCtrl',
        css: 'stylesheets/detail.css'
      })

      .when('/contact', {
      	templateUrl: '/partials/contact.html',
      	controller: 'ContactCtrl',
        css: 'stylesheets/contact.css'
      })

      .when('/about', {
        templateUrl: '/partials/about.html',
        controller: 'AboutCtrl',
        css: 'stylesheets/about.css'
      })

      .otherwise({
      	redirectTo: '/'
      });

  });