function Aircraft() {
 this.isLanded = true;
}

 Aircraft.prototype.changeStatus = function() {
   this.isLanded = false;
 };
