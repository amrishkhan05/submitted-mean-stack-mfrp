angular.module("resourceRequestController",[]).controller('resourceRequestController',function ($scope, $http) {
    $scope.addContact = function () {
      console.log($scope.contact);
      $http.post("/requestDetail", $scope.contact).then(function (response) {
        console.log(response.data);
        refresh();
      })
    }
    var refresh = function () {
      $http.get("/requestDetail").then(function (response) {
        $scope.requestDetail = response.data;
        console.log($scope.requestDetail);
      })
    }
    refresh();
    $scope.update = function (id) {
      console.log($scope.contact._id);
      $http.put('/requestDetail/' + $scope.contact._id, $scope.contact).then(function (response) {
        refresh();
      });
    };
    $scope.edit = function (id) {
      console.log(id);
      $http.get('/requestDetail/' + id).then(function (response) {
        $scope.contact = response.data;
        console.log($scope.contact);
      });
    };
  }
);