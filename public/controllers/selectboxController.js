angular.module("selectboxCtrl",[]).controller('selectboxCtrl', ['$scope','$http',function ($scope,$http) { 
$scope.titlelist = [{
"name": "PM"
},
{"name":"PAT"

},
 {
"name": "PA"
}];
$scope.checkselection = function () {
if ($scope.userSelect != "" && $scope.userSelect != undefined)
$scope.msg = 'Selected Value: '+$scope.userSelect;
else
$scope.msg = 'Please Select Dropdown Value';
}
$scope.competencylist = [{
"name": "CI Web"
}, {
"name": "CI RIA"
}];
$scope.checkselection = function () {
if ($scope.competencySelect != "" && $scope.competencySelect != undefined)
$scope.msg = 'Selected Value: '+$scope.competencySelect;
else
$scope.msg = 'Please Select Dropdown Value';
}
$scope.addContact = function() {
    console.log($scope.contact);
       $http.post("/employeedetails",$scope.contact)
            .then(function(response) {
               console.log(response.data);
               refresh();
               
            })
          }
            
          var refresh=function(){

            $http.get("/employeedetails")
      .then(function(response) {
          $scope.employeedetails = response.data;

          console.log($scope.employeedetails);
        } 
        )
  }
  refresh();




$scope.edit = function(id) {
  console.log(id);
  $http.get('/employeedetails/'+ id).then(function(response) {
    $scope.contact = response.data;
         console.log($scope.contact);
  });
};  

 $scope.update = function (id) {
      console.log($scope.contact._id);
      $http.put('/employeedetails/' + $scope.contact._id, $scope.contact).then(function (response) {
        refresh();
      });
    };
}]);