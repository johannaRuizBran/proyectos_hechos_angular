

angular.module("MyfirsApp",[])
.controller("apiController",["$scope","$http",function($scope,$http){
	$scope.postLista=[];
	$scope.newPost= {};
		
	
	///////////////			GET     //////////////////////////////
	var getRegistros= function(){
		$http({
	    method: 'get', 
	    url: 'https://jsonplaceholder.typicode.com/posts'
		}).then(function (response) {
		    console.log(response, 'res');
		    data = response.data;
		    //$scope.postLista= data;
		},function (error){
		    console.log(error, 'can not get data.');
		});
	}
	getRegistros();

	///////////////        POST      ///////////////////////////////////

	$scope.addPost= function(){
		var tittle= $scope.newPost.tittle;
		var body= $scope.newPost.body;
		$scope.newPost= {};
		
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
			  title: tittle,
			  body: body,
			  userId: 1
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		})		
		.then(function(data) {
			$scope.postLista.push({tittle,body});
			console.log($scope.postLista);												
		})		
		.catch(function(error) {
			console.log('Fetch Error :-S', error);
		});		
	}


}]);