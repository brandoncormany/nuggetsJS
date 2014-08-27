function sampleCtrl($scope) {
  $scope.name = "";
  $scope.firstName = "";
  $scope.lastName = "";

  $scope.people = [
    {first: "George", last: "Clooney"},
    {first: "Lebron", last: "James"},
    {first: "Marie", last: "Curie"},
    {first: "Mike", last: "Trout"},
  ];

  $scope.changeName = function(){
    $scope.name = "Dave";
  };

  $scope.addName = function(){
    $scope.people.push(
      {first: $scope.firstName, last: $scope.lastName}
    );
    $scope.firstName = "";
    $scope.lastName = "";
  };
  $scope.popName = function(){
    $scope.people.pop();
  }
};