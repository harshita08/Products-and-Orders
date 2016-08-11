(function(){

	angular
		.module("productsApp")
		.controller("orderCtrl", orderController);

		orderController.$inject = ['productServices'];

		function orderController(productServices){
			var vm = this;
			vm.allProducts = [];
			vm.update = update;

			productServices.getProducts(setProducts);

			function update(index){
				var data = {id:index, quantity:1};
				productServices.update(data, setProducts);
			}

			function setProducts(data){
				vm.allProducts = data;
			}

		}


})();