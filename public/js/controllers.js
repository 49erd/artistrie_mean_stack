'use strict'

var Artistrie = angular.module('Artistrie');

Artistrie.controller('PieceCtrl', ['$scope', 'Pieces', function ($scope, Pieces) {
      $scope.editing = [];
      $scope.pieces = Pieces.query();

      $scope.save = function(){
        if(!$scope.pieceTitle || $scope.pieceTitle.length < 1) return;
        var piece = new Pieces({ title: $scope.pieceTitle, img_url: $scope.pieceImage, description: $scope.pieceDescription });

        piece.$save(function(){
          $scope.pieces.push(piece);
          $scope.pieceTitle = ''; // clear textbox
          $scope.pieceDescription = '';
          $scope.pieceImage = '';
        });
      }

      $scope.update = function(index){
        var piece = $scope.pieces[index];
        Pieces.update({id: piece._id}, piece);
        $scope.editing[index] = false;
      }

      $scope.edit = function(index){
        $scope.editing[index] = angular.copy($scope.pieces[index]);
      }

      $scope.cancel = function(index){
        $scope.pieces[index] = angular.copy($scope.editing[index]);
        $scope.editing[index] = false;
      }

      $scope.remove = function(index){
           var piece = $scope.pieces[index];
           Pieces.remove({id: piece._id}, function(){
            	$scope.pieces.splice(index, 1);
            });
          }
    }])
  
   .controller('PieceDetailCtrl', ['$scope', '$routeParams', 'Pieces', '$location', function ($scope, $routeParams, Pieces, $location) {
      $scope.piece = Pieces.get({id: $routeParams.id });

      $scope.update = function(){
        Pieces.update({id: $scope.piece._id}, $scope.piece, function(){
          $location.url('/');
        });
      }

      $scope.remove = function(){
        Pieces.remove({id: $scope.piece._id}, function(){
          $location.url('/');
        });
      }
    }])

   	.controller('ContactCtrl', ['$scope', function ($scope) {

   	}]);