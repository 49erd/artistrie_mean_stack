'use strict'

var Artistrie = angular.module('Artistrie', ['ngRoute', 'ngResource']);

Artistrie.factory('Pieces', ['$resource', function ($resource) {
      return $resource('/pieces/:id', null, {
      	'update': { method: 'PUT' }
      });
    }]);