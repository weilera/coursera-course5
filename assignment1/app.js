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
if (dishesCount > 3) { 
    message =  "Too much!";
} else  { 
    message = "Enjoy!" ;
}

if ($scope.dishes == "") 
  { message =  "Please enter data first"; } 

   $scope.message = message

};

  function countItems(string) {
    var arrayOfStrings = string.split(',');
    var itemCount = arrayOfStrings.length;
    return itemCount;
  };
};


})();