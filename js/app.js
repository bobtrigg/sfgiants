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
	otherwise({
		redirectTo: '/grid'
	});
}]);
