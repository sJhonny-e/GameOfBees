(function (){
	'use strict';
	
	// TODO: move to its own class / file
	function Bee(hitpoints, damageReceived, type) {
		this.hitpoints = hitpoints;
		this.damageReceived = damageReceived;
		this.type = type;

		this.state = 'alive';
		this.onHit = null;
	}

	Bee.prototype.takeHit = function(){
		this._takeHit();
	}

	Bee.prototype.die = function(){
		this._takeHit(this.hitpoints);
	}

	Bee.prototype._takeHit = function(damage) {
		damage = damage || this.damageReceived;
		if (this.state !== 'alive') {
			return; 	// no use beating a dead bee
		}

		this.hitpoints -= damage;
		if (this.hitpoints <= 0) {
			this.state = 'dead';
		}
		
		this.onHit && this.onHit();
	}


	function beesFactory() {
		this.createQueen = function() {
			return new Bee(100, 8, 'queen');
		};

		this.createWorker = function() {
			return new Bee(75, 10, 'worker');
		};

		this.createDrone = function() {
			return new Bee(50, 12, 'drone');
		};
	}

	angular.module('gameOfBees')
		.service('beesFactory', beesFactory);
})();