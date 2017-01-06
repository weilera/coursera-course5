(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function () {
    var message
    var dishesCount = countItems($scope.dishes);
    $scope.dishesCount = dishesCount;
    $scope.color = "green";

    if (dishesCount > 3) { 
        message =  "Too much!";
    } else if  (dishesCount == 0) { 
        message =  "Please enter data first"; 
        $scope.color = "red";
    } else  { 
        message = "Enjoy!" ;
    }
       $scope.message = message

};

  function countItems(string) {
    var arrayOfStrings = string.split(',');
    var itemCount = arrayOfStrings.filter(Boolean).length;
    return itemCount;
  };
};


})();