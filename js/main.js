var myApp = angular.module('myApp', []);

myApp.controller('sampleCtrl', function($scope) {
  $scope.name = '';

  $scope.changeName = function(){
    $scope.name = "Dave";
  };
});

myApp.controller('helloCtrl', function($scope){
  $scope.names = ['Dave', 'Mike', 'Brandon'];
  $scope.newName = "";
  $scope.addName = function(){
    $scope.names.push($scope.newName);
    $scope.newName = "";
  };
});
//this is a separate controller that should only been shown when part of the same DIV in the HTML
myApp.controller('byeCtrl', function($scope){
  $scope.names = ['Denise', 'Sergio', 'Vince'];
  $scope.newName = "";
  $scope.addName = function(){
    $scope.names.push($scope.newName);
    $scope.newName = "";
  };
});