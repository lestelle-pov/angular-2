// Create application
var myApp = angular.module('appMad', []);

// Bind controller madCtrl
myApp.controller('madCtrl', function($scope) {
    $scope.name = 'Fetty';
    $scope.age = '1738';
    $scope.location = 'Sizzler';
    $scope.food = 'Trap'
});

	// Set initial values for name, age, location, and food

