function Airport(){
  this.capacity = 20;
  this.storage = [];
}

Airport.prototype.allowLanding = function(plane) {
  if (this.storage.length === this.capacity){
    throw new Error('airport is over capacity');
  }
  this.storage.push(plane)
}
