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

    .when('/third', {
        templateUrl:'pages/third.html',
        controller: 'thirdController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', '$http', function($scope, $log, $http) {
    

    $scope.selectedCandidate = {}
    $scope.candidates = []
    $scope.name = ''
    $scope.job = ''
    $scope.phone = ''
    $scope.email = ''
    $scope.salary = ''

    $scope.addCandidate = function(){
      
        $http.post('http://localhost:3000/api/candidates', {name: $scope.name, job:$scope.job, phone:$scope.phone, email:$scope.email, salary:$scope.salary})
        .then(get(),
        $scope.name = '',
            $scope.job = '',
            $scope.phone = '',
            $scope.email = '',
            $scope.salary = '')

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
    $scope.selectedCompany = {}

    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/companies'
      }).then(function successCallback(response) {
          $scope.companies = response.data
        }, function errorCallback() {
          console.error(error)
        });


    
}]);

myApp.controller('thirdController', ['$scope', function($scope){
    $scope.name = ''
    $scope.job = ''
    
    $scope.names = ["bob", "sarah"];
    
    
    $scope.handle = '';
    
    $scope.pushToNames = function(){
        $scope.names.push($scope.handle)
        $scope.handle = ''
    }

}])
