'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: function candidateController(){
      this.candidates = [
        {name: "Alex"},
        {name: "Bob"},
        {name: "Tony"}
      ]
    }
  
  
  //     ['$http', '$scope', function candidateController($http){
  //     var self = this
  //     $http.get('http://localhost:3000/api/candidates')
  //     .then(function(response){
  //       self.candidates = response.data
  //       console.log(self.candidates)
  //     })
  //   }
  // ]
  });
}])

.controller('View2Ctrl', [function() {

}]);