(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);


MyinfoController.$inject = ['info'];
function MyinfoController(info) {
  var myinfo = this;
  myinfo.info = info



  


  };

})();
