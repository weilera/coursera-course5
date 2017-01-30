(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);


SignupController.$inject = ['MenuService','SignupService'];
function SignupController(MenuService, SignupService) {
  var sign = this;
  // start with found to suppress error
  sign.itemFound = true

  sign.submit = function () {
    sign.completed = true;
    // console.log("Form submitted");
    // console.log(sign.firstname)
    // console.log(sign.lastname)
    // console.log(sign.email)
    // console.log(sign.phone)
    // console.log(sign.favdish)

    // console.log("Checking Dish : " + sign.favdish);



    sign.res = MenuService.getMenuItem(sign.favdish)

    sign.res.then(function (response) {
      // console.log('res : ')
      // console.log(response);
      sign.itemFound = true
      // console.log('Saving FormData');
      SignupService.info.firstname = sign.firstname
      SignupService.info.lastname = sign.lastname
      SignupService.info.email = sign.email
      SignupService.info.phone = sign.phone
      SignupService.info.favdish = sign.favdish
      SignupService.info.dish = response
      // console.log('response.data : ' + response);
      SignupService.info.updated = true
      // console.log('Info from SignupService:');
       // console.log(SignupService.info);
    })
    .catch(function (error) {
      console.log(error);
      sign.itemFound = false
       console.log('itemFound : ' + sign.itemFound);
    })
  };


  };

})();
