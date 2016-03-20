'use strict';

describe('main.component', function() {
  describe('controller', function(){
  	describe('#activate', function() {
  		it('should have 1 queen');	// check that beeFactory.createQueen was invoked exactly once
  		it('should have 5 workers');	// check that beeFactory.createWorker was invoked exactly 5 times
  		it('should have 8 drones');	// check that beeFactory.createDrone was invoked exactly 8 times
  	});

  	describe('#playARound', function() {
  		it('should hit exactly one bee');	// check that exactly 1 bee model had the 'takeHit' method invoked on it
  		it('should end the game if the queen died');	// check that 'gameOver' is true if theres only 1 bee, its the queen, and it died
  		it('should kill all other bees if the queen died');	// check that 'die' is called for all remaining bees if the queen died
  	});

  });
});