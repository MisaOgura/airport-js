function Aircraft() {
 this.isLanded = true;
}

 Aircraft.prototype.takeOff = function() {
   if (this.isLanded === false){
     throw new Error('Aircraft has already taken off');
   }
   this.isLanded = false;
 };

 Aircraft.prototype.land = function() {
   if (this.isLanded === true){
     throw new Error('Aircraft is already landed');
   }
   this.isLanded = true;
 };
