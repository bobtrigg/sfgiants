var myApp = angular.module('myApp', [
	'ngRoute',
	'giantsControllers'
]);


myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/grid', {
		templateUrl: 'partials/grid.html',
		controller: 'GridController'
	}).
	when('/carousel', {
		templateUrl: 'partials/carousel.html',
		controller: 'CarouselController'
	}).
	when('/player/:playerId', {
		templateUrl: 'partials/batter.html',
		controller: 'PlayerController'
	}).
	when('/pitcher/:playerId', {
		templateUrl: 'partials/pitcher.html',
		controller: 'PlayerController'
	}).
	otherwise({
		redirectTo: '/grid'
	});
}]);

myApp.filter('removeSpace', function() {
  return function(input) {
    return input.replace(/ /, '');
  }
});
myApp.filter('percentage', function() {
  return function(input) {
    return Number(input).toFixed(3).replace(/0+/,'');
  }
});
myApp.filter('era', function() {
  return function(input) {
    return Number(input).toFixed(2);
  }
});
