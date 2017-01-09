(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
var tbc = this;
tbc.items = ShoppingListCheckOffService.getBuyItems();
// console.log("ToBuyController");
tbc.buyItem = function (itemIndex) {
  ShoppingListCheckOffService.buyItem(itemIndex);
}

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var abc = this;
abc.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
var service = this;

// var buyItems = [];
var buyItems = [
  {
    name: "Pizza slices",
    quantity: "12"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate bars",
    quantity: "5"
  },
  {
    name: "Ice creams",
    quantity: "4"
  }
];


var boughtItems = [];

service.getBuyItems = function () {
  // console.log("getBuyItems called");
  return buyItems;
};

service.getBoughtItems = function () {
  // console.log("getBoughtItems called");
  return boughtItems;
};

service.buyItem = function (itemIndex) {
    console.log("buyItem called : index " + itemIndex);
    var item = buyItems[itemIndex]
    boughtItems.push(item);
    buyItems.splice(itemIndex, 1);
};

};


})();