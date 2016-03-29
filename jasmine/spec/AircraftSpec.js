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

 describe('changeStatus', function(){
   it('should change isLanded of aircraft from true to false', function(){
     var status = aircraft.isLanded;
     aircraft.changeStatus();
     expect(aircraft.isLanded).toEqual(!status);
   });
 });
});
