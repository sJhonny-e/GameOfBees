(function(){
	'use strict';
	var beeComponent = {
		controller: beeController,
		bindings: {
			beeModel: "<"
		},
		templateUrl: 'components/bee/bee.html'
	};

	// TODO: move to its own file
	function beeController($timeout) {
		this.hit = false;
		var vm = this;

		activate();

		function activate() {
			vm.imageUrl = getImageUrl();
			vm.beeModel.onHit = function beeHit(){
				vm.hit = true;
				$timeout(function removeHitIndication(){
					vm.hit = false;
				}, 300);
				
				if (vm.beeModel.state === 'dead') {
					vm.imageUrl = 'http://fc06.deviantart.net/fs70/i/2012/139/2/7/the_tombstone_meme_by_v_oblivion-d50bjhx.png';
				}
			};
		}

		function getImageUrl() {
			switch (vm.beeModel.type) {
				case 'queen':
					return 'http://www.bestanimations.com/Animals/Insects/Bees/bee-wasp-animated-gif-9.gif';
				case 'worker':
					return 'http://www.bestanimations.com/Animals/Insects/Bees/bee-animated-gif-61.gif';
				case 'drone':
					return 'http://www.bestanimations.com/Animals/Insects/Bees/bee-animated-gif-24.gif';
			}
		}
	}

	beeController.$inject = ['$timeout'];

	angular.module('gameOfBees')
		.component('bee', beeComponent);
})();