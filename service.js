angular.module('basicsApp').service('muhService', function($http, $q){
	this.pokeShit = function(pokeNum){
		var defer1 = $q.defer();
		var defer2 = $q.defer();
		var defer3 = $q.defer();
	 $http({
			method: 'GET',
			url: 'http://pokeapi.co/api/v1/pokemon/'+pokeNum+'/'
		}).then(function(response){
					// console.log(response);
				 var pokeDex = {
						 name:  response.data.name,
						attack: response.data.attack,
						weight: response.data.weight,
						type: (function(){
							var types = [];
							for(var i = 0; i < response.data.types.length; i++){

								if (response.data.types[i]){
									types.push(response.data.types[i].name )
									}
								
								}

							return types.toString();
							})(),//close type, immedietly invoke

						height: response.data.height,
						move1: response.data.moves[0].name,
						move2: response.data.moves[1].name,
						move3: response.data.moves[2].name,
						move4: response.data.moves[3].name,

					 };//close object pokedex
					  return defer1.resolve(pokeDex)
					 console.log(pokeDex, "service pokedex")
					 // return pokeDex;
					
				})//close promise .then
		return defer1.promise;



}// close this.pokeshit
})
