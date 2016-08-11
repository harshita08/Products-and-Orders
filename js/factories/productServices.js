(function(){

	angular
		.module("productsApp")
		.factory("productServices", productServices);

		function productServices(){
			var prodObj = [
				{
					name: "hat",
					quantity: 50,
					price: 12.99
				}
			];
			var factory = {
				addProd: addProd,
				deleteProduct: deleteProduct,
				getProducts: getProducts,
				update: update
			};
			return factory;

			function addProd(newProduct, callback){
				newProduct.quantity = 50;
				prodObj.push(newProduct);
				callback(prodObj);
			}
			function deleteProduct(index, callback){
				prodObj.splice(index,1);
				callback(prodObj);
			}
			function getProducts(callback){
				callback(prodObj);
			}
			function update(data, callback){
				if (Number.isInteger(data.quantity)){
				if(prodObj[data.id].quantity -data.quantity > 0){
					prodObj[data.id].quantity -= data.quantity;
				} else {
					prodObj[data.id].quantity = 0;
				}
			}
				callback(prodObj);
			}

		}

})();
