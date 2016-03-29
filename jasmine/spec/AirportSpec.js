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

  describe('#storage', function(){
    it('should start with empty storage', function(){
      expect(airport.storage).toEqual([]);
    });
  });

  describe('#allow landing', function(){
    it('should allow aircraft to land', function(){
      storageStatus = airport.storage.length
      airport.allowLanding();
      expect(airport.storage.length).toEqual(storageStatus+1)
    });
    it('should raise an error when airport is over capacity', function(){
      for (i=1; i <= 20; i++){
        airport.allowLanding();
      };
      expect(function(){
        airport.allowLanding();
      }).toThrowError('airport is over capacity');
    });
  });
});
