(function(){

	var gem = {
		name : "IPhone",
		company : "Apple Inc",
		Price : 35000,
	}

	var app = angular.module('store', []);
	app.controller('StoreController', ['$scope', function($scope){
		this.product = gem;
	}])




})();
