var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var myInstance = Object.create(stackMethods);
  myInstance.storage = {};
  myInstance.nextKey = 0;

  // _.extend(myInstance, stackMethods);

  return myInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.nextKey] = value;
    this.nextKey++;
  },
  pop: function() {
    var removed = this.storage[this.nextKey - 1];
    delete this.storage[this.nextKey - 1];
    if (this.nextKey >= 1) {
      this.nextKey--;
    }
    return removed;
  },
  size: function() {
    return this.nextKey;
  }
};