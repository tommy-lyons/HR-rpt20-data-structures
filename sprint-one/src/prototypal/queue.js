var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var myInstance = Object.create(queueMethods);
  myInstance.storage = {};
  myInstance.nextKey = 0;
  myInstance.firstKey = 0;

  return myInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.nextKey] = value;
    this.nextKey++;
  },
  dequeue: function () {
    var removed = this.storage[this.firstKey];
    if (removed) {
      delete this.storage[this.firstKey];
      this.firstKey++;
      return removed;
    }
    return 'no values left';
  },
  size: function() {
    return this.nextKey - this.firstKey;
  }
};