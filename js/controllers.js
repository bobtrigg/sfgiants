var giantsControllers = angular.module('giantsControllers', []);

giantsControllers.controller('GridController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
	$scope.players = data;
  });
}]);