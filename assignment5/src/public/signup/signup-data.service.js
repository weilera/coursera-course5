(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);


SignupService.$inject = [];
function SignupService() {
  var service = this;
  service.info = { "updated" : false}
//   service.getCategories = function () {
//     return $http.get(ApiPath + '/categories.json').then(function (response) {
//       return response.data;
//     });
//   };


//   service.getMenuItems = function (category) {
//     var config = {};
//     if (category) {
//       config.params = {'category': category};
//     }

//     return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
//       return response.data;
//     });
//   };

//   service.getMenuItem = function (menuItem) {
//     return $http.get(ApiPath + '/menu_items/' + menuItem + '.json').then(function (response) {
//       return response.data;
//     });
//   };

// }
}
})();

