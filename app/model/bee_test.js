describe('Bee', function() {
	describe('ctor', function() {
		it('should set the hitpoints property');
		it('should set the damageReceived property');
		it('should set the type property');
		it('should initally be alive');

	});

	describe('#takeHit', function() {
		it('should subtract the damageReceived from total hitpoints');
		it('should be dead if hitpoints <= 0');
		it('should invoke the onHit callback, if exists');
		it('should do nothing if already dead');
	});

	describe('#die', function() {
		it('should set the hitpoints to 0 immediately');
		it('should be dead');
		it('should invoke the onHit callback, if exists');
	})
})