var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.nextKey = 0;
  this.firstKey = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.nextKey] = value;
  this.nextKey++;
};

Queue.prototype.dequeue = function () {
  var removed = this.storage[this.firstKey];
  if (removed) {
    delete this.storage[this.firstKey];
    this.firstKey++;
    return removed;
  }
  return 'no values left';
};

Queue.prototype.size = function() {
  return this.nextKey - this.firstKey;
};



