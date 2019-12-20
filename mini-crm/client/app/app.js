var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $scope.name = ''
    $scope.job = ''
    
    $scope.names = ["bob", "sarah"];
    
    $scope.handle = '';
    
    $scope.pushToNames = function(){
        $scope.names.push($scope.handle)
    }
    
    $scope.candidates = []

    $scope.addRule = function(){
      
        $http.post('http://localhost:3000/api/candidates', {name: $scope.name, job:$scope.job})
        .then(function successCallback(response){
          
          $http({
            method: 'GET',
            url: 'http://localhost:3000/api/candidates'
          }).then(function successCallback(response) {
              $scope.candidates = response.data
              
            }, function errorCallback(response) {
              console.error(error)
            });
            $scope.name = ''
          $scope.job = ''
        })

    }
    
   $http({
  method: 'GET',
  url: 'http://localhost:3000/api/candidates'
}).then(function successCallback(response) {
    $scope.candidates = response.data
  }, function errorCallback(response) {
    console.error(error)
  });

   
    
}]);
