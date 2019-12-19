var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $scope.name = "Bob";
    
    $scope.names = ["bob", "sarah"];
    
    $scope.handle = '';
    
    $scope.pushToNames = function(){
        $scope.names.push($scope.handle)
        console.log($scope.names)
        console.log($scope.candidates)
       
        
    }
    
    $scope.candidates = []
    
   $http({
  method: 'GET',
  url: 'http://localhost:3000/api/candidates'
}).then(function successCallback(response) {
    $scope.candidates = response.data
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    
}]);
