'use strict'

var Artistrie = angular.module('Artistrie', ['ngRoute', 'ngResource', 'door3.css']);

Artistrie.factory('Pieces', ['$resource', function ($resource) {
      return $resource('/pieces/:id', null, {
      	'update': { method: 'PUT' }
      });
    }]);