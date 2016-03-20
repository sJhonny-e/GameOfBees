(function(){
	'use strict';
	var mainComponent = {
		controller: mainController,
		bindings: {

		},
		templateUrl: 'main/main.html'
	};

	// TODO: move conroller to its own file
	function mainController(beesFactory) {
		this.numWorkers = 5;
		this.numDrones = 8;

		this.queen = null;
		this.workers = [];
		this.drones = [];
		this.gameOver = false;

		this.newGame = newGame;
		this.playARound = playARound;

		var vm = this;
		var allLivingBees = [];

		activate();

		function activate() {
			newGame();
		}

		function newGame() {
			vm.gameOver = false;

			vm.queen = beesFactory.createQueen();

			vm.workers = [];
			for (var i = 0; i < vm.numWorkers; i++) {
				vm.workers.push(beesFactory.createWorker());
			};

			vm.drones = [];
			for (var i = 0; i < vm.numDrones; i++) {
				vm.drones.push(beesFactory.createDrone());
			};

			allLivingBees = [vm.queen].concat(vm.workers).concat(vm.drones);
		}

		function playARound() {
			var rand = Math.floor(Math.random() * allLivingBees.length);	// TODO: move this randomness to a service that we can easily mock
			var beeToHit = allLivingBees[rand];
			beeToHit.takeHit();
			
			if (beeToHit.state !== 'dead') {
				return;
			}
			
			allLivingBees.splice(rand, 1);
			// check if game over
			// TODO: this logic should be in the model. something like 'if beeToHit.killsAllOthers ...'
			if (beeToHit.type === 'queen') {
				angular.forEach(allLivingBees, function(bee) {
					bee.die();
				});
				vm.gameOver = true;
			}

		}

	}

	mainController.$inject = ['beesFactory'];

	angular.module('gameOfBees')
		.component('main', mainComponent)
		.config(['$routeProvider', function($routeProvider) {
		  $routeProvider.when('/main',{
		  	template: '<main></main>'
		  });
		}]);
})();
