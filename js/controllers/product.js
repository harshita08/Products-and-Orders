(function(){

	angular
		.module("productsApp")
		.controller("productCtrl", ProdController);

		ProdController.$inject = ['productServices'];

		function ProdController(productServices){
			var vm = this;
			vm.productServices = productServices;
			vm.addProduct = addProduct;
			vm.newProduct = {};
			vm.allProducts = [];
			vm.deleteProd = deleteProd;

			function setProducts(data){
				vm.newProduct = {};
				vm.allProducts = data;
			}

			//vm.prodObj = productServices.getProducts();

			function addProduct(){
				productServices.addProd(vm.newProduct, setProducts);
			}
			function deleteProd(index){
				productServices.deleteProduct(index, setProducts);
			}
		}

})();