var giantsControllers = angular.module('giantsControllers', []);

giantsControllers.controller('GridController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').then(function(data) {
	$scope.players = data;
  });
}]);

giantsControllers.controller('PlayerController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('http://sandbox.dev:8080/sfgiants/php/DataFeeder.php?id=' + $routeParams.playerId).then(function(data) {
  	$scope.data = data;
   	$scope.stats = getStats(data);
   	$scope.name = data.data.player.full_name;
   	$scope.bats = data.data.player.throw_hand;
   	$scope.throws = data.data.player.bat_hand;
   	$scope.jersey_number = data.data.player.jersey_number;
   	var a = 'a';	
  }, function(error) {
  	console.log("Error: " + error.message);
  });
}]);    

function getStats(data) {

	var seasonStats = data.data.player.seasons[0].teams;

	for (var i=0; i<seasonStats.length; i++) {
		if (seasonStats[i].name === "Giants") {
			return seasonStats[i].statistics;
		}
	}

	return null;
}