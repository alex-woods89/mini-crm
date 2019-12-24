var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', '$http', function($scope, $log, $http) {
    
    $scope.name = ''
    $scope.job = ''
    
    $scope.names = ["bob", "sarah"];
    $scope.selectedCandidate = {}
    
    $scope.handle = '';
    
    $scope.pushToNames = function(){
        $scope.names.push($scope.handle)
        $scope.handle = ''
    }
    
    $scope.candidates = []

    $scope.addCandidate = function(){
      
        $http.post('http://localhost:3000/api/candidates', {name: $scope.name, job:$scope.job})
        .then(get(),
        $scope.name = '',
            $scope.job = '')

    }         
    
   $http({
  method: 'GET',
  url: 'http://localhost:3000/api/candidates'
}).then(function successCallback(response) {
    $scope.candidates = response.data
  }, function errorCallback(response) {
    console.error(error)
  });

  var get = function(){ $http({
    method: 'GET',
    url: 'http://localhost:3000/api/candidates'
  }).then(function successCallback(response) {
      $scope.candidates = response.data
    }, function errorCallback() {
      console.error(error)
    });
  }

  $scope.delete = function(){
    $http.delete(`http://localhost:3000/api/candidates/${$scope.selectedCandidate._id}`)
    .then(get())

  }

   
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$http', function($scope, $log, $http) {
    
    $scope.companies = []

    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/companies'
      }).then(function successCallback(response) {
          $scope.companies = response.data
        }, function errorCallback(response) {
          console.error(error)
        });


    
}]);
