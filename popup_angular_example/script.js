angular.module('app', []).controller('appController', function($scope) {
    $scope.display = 'none'

    $scope.fechar = function(){
     	$scope.display = 'none';
   	};

   	$scope.abrir = function(){
    	$scope.display = 'block';
   	};

});