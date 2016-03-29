describe('Aircraft', function(){

 var aircraft;

 beforeEach(function(){
   aircraft = new Aircraft();
 });

 describe('isLanded', function(){
   it('should return true as a default', function(){
     expect(aircraft.isLanded).toEqual(true);
   });
 });

 describe('#takeOff', function(){
   it('should change isLanded status to false', function(){
     aircraft.takeOff();
     expect(aircraft.isLanded).toEqual(false);
   });
   it('should raise an error if aircraft is already taken off', function(){
     aircraft.takeOff();
     expect(function(){
       aircraft.takeOff();
     }).toThrowError('Aircraft has already taken off');
   });
 });

 describe('#land', function(){
   it('should change isLanded status to true', function(){
     aircraft.takeOff();
     aircraft.land();
     expect(aircraft.isLanded).toEqual(true);
   });
   it('should raise an error if aircraft is already landed', function(){
     expect(function(){
       aircraft.land();
     }).toThrowError('Aircraft is already landed');
   });
 });
});
