var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var myInstance = {storage: {}, nextKey: 0, firstKey: 0};

  _.extend(myInstance, queueMethods);

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

//when all items are deleted, the below should happen:

//add ten items, stored at storage[0] - storage[9]
//nextKey = 10, firstkey = 0
//delete 10 items; nextKey = 10, firstkey = 10
//if run delete again, when there are no more items in the list - dont increment firstKey.
// -or- better yet, this is what I ended up doing in this version - if run decrement and there isn't a value stored at firstKey, then don't do anything...
