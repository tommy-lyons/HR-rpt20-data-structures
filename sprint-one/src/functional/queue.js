var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstKey = 0;
  var nextKey = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[nextKey] = value;
    nextKey++;
  };

  someInstance.dequeue = function() {
    var item = storage[firstKey];
    delete storage[firstKey];
    if (firstKey < nextKey) {
      firstKey++;
    }
    return item;
  };

  someInstance.size = function() {
    return nextKey - firstKey;
  };

  return someInstance;
};




