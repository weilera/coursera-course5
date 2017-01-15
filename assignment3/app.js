(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems' , FoundItemsDirective)

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: "E",
    scope: {
      items: '<foundItems',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchMenu = function (searchTerm = '') {
    console.log("NarrowItDownController.searchMenu searchTerm : " + searchTerm)
    if (searchTerm == '') { 
      menu.errorMessage = "Nothing found"
      menu.found = ""
       return menu.found
     } 

    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      menu.found = response;
      console.log("then menu.found : ")
      console.log(response);
    })
  };

  menu.onRemove = function (itemIndex) {
    console.log("'this' is: ", this);
    console.log("onRemove " + itemIndex )
    menu.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service = this;


  service.getMatchedMenuItems = function (searchTerm) {
    console.log("service searchTerm : " + searchTerm)
    return $http({
      method: "GET",
      url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
    })
    .then(function (response) {
       // console.log(response.data)
      var foundItems = []
      for(var i =0 ; i<response.data.menu_items.length; i++){
        if(response.data.menu_items[i].description.indexOf(searchTerm)!=-1){
          foundItems.push(response.data.menu_items[i]);
        }
      }
      return foundItems;
    })
    .catch(function(error){
      console.log("errorMessage:", error);
      return [];
    });
  };
}



})();
