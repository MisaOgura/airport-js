describe('Aircraft', function(){

  var aircraft;

  beforeEach(function(){
    aircraft = new Aircraft();
  });

  describe('isLanded' function(){
    it('should return true as a default', function(){
      expect(aircraft.isLanded).toEqual(true);
    });
  });
});
