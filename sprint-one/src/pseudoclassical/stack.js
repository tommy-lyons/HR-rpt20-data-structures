var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.nextKey = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.nextKey] = value;
  this.nextKey++;
};

Stack.prototype.pop = function() {
  var removed = this.storage[this.nextKey - 1];
  delete this.storage[this.nextKey - 1];
  if (this.nextKey >= 1) {
    this.nextKey--;
  }
  return removed;
};

Stack.prototype.size = function() {
  return this.nextKey;
};