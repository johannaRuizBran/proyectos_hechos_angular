angular.module("MyFirsApp",[])
.filter("removeHtml", function(){
	return function(texto){
		return String(text).replace(/<[])
	}
})