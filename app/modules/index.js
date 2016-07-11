angular.module('msmusic', ['ngRoute'])

.controller('ContactController', ['$http', '$scope','$window', function($http, $scope, $window) {
  $scope.send = function(form) {
    console.log($http, form);
    $http({
      method: 'POST',
      url: 'email.php',
      headers: {
          'Content-Type': 'application/json', /*or whatever type is relevant */
          'Accept': 'application/json' /* ditto */
      },
      data: form
    }).success(function (data, status) {
      if (data.success)
        $window.alert("Obrigado! Sua mensagem foi enviada.");
    }).error(function (data, status) {
        $window.alert("Desculpe, algo ocorreu errado!");
    });
  };
}])
 
.config(function($routeProvider) { 
  $routeProvider
  	.when('/home', {
    	templateUrl: '../partials/home.html',
    })
    .when('/sobre', {
    	templateUrl: '../partials/about.html',
    })
    .when('/contato', {
      templateUrl: '../partials/contact.html',
      controller: 'ContactController'
    })

    .otherwise({
      redirectTo:'/home'
    });
});
