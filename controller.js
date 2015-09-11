angular.module('basicsApp').controller('mainCtrl', ['$scope', 'muhService', function($scope, muhService){
	$scope.pokeMon = function(pokeNum){
		 return muhService.pokeShit(pokeNum).then(
			function(response){
			$scope.myPokemon = response;
		})
	}
	 ;
	
}])