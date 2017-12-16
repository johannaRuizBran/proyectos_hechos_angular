/*
var app=angular.module("MyfirsApp",[]);
app.controller("FirstController", function($scope){...}

al mimificar el archivo, si se realiza a como está arriba, 
$scope deja de llamarse así y por lo tanto el programa se puede caer.
Esto es un problema que puede ser solucionado siguiendo la estructura:

app.controller("FirstController", ["$scope", function($scope){...}]);

*/


//ngResource= para poder crear un objeto RESfull apis
//el $scope es lo que enlaza la informacion de la aplicacion al html
angular.module("MyfirsApp",[])
.controller("FirstController",["$scope", function($scope){
	$scope.nombre= "johanna";
	$scope.nuevoComentario= {
			
		};
	$scope.comentarios= [
		{
			comentario: "hola",
			username: "j1"
		},
		{
			comentario: "adios",
			username: "j222"
		},
	];

	$scope.agregarComentario= function(){
		$scope.comentarios.push($scope.nuevoComentario)
		$scope.nuevoComentario={};
	}
}]);