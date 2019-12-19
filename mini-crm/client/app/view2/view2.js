var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $scope.name = "Bob";
    
    $scope.names = ["bob", "sarah"];
    
    $scope.handle = '';
    
    $scope.pushToNames = function(){
        $scope.names.push($scope.handle)
        console.log($scope.names)
        console.log($scope.beers)
        
    }
    
    $scope.beers = []
    
   $http({
  method: 'GET',
  url: 'https://api.punkapi.com/v2/beers'
}).then(function successCallback(response) {
    $scope.beers = response.data
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    
}]);


.controller('View2Ctrl', [function($scope) {
  $scope.candidates=["Bob", "trish"]

}]);