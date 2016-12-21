var giantsControllers = angular.module('giantsControllers', []);

giantsControllers.controller('GridController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').then(function(data) {
	$scope.players = data;
  });
}]);