describe('Airport', function(){

  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  describe('#capacity', function(){
    it('should have a default capacity of 20', function(){
      expect(airport.capacity).toEqual(20);
    });
  });
});
