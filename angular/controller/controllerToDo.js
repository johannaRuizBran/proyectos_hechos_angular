angular.module("MyFirstApp",[])
.controller("toDoController", ["$scope",function($scope) {	
	if (localStorage.todoLista!= null ) {
		$scope.todo= JSON.parse(localStorage.todoLista);
	}
	else{
		$scope.todo= [];	
	}	

	$scope.addAct= function()	{
		$scope.todo.push($scope.newAct);
		$scope.newAct= {};		

		var todoLista = JSON.stringify($scope.todo);      
    	localStorage.setItem("todoLista",todoLista); 
	}
}])
