(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);


SignupController.$inject = [];
function SignupController() {
  var sign = this;

  sign.submit = function () {
    sign.completed = true;
    console.log("Form submitted");
    console.log("Checking Dish : " + sign.favdish);
  };
}

})();
