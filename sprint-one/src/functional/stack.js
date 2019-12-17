var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[nextKey] = value;
    nextKey++;
  };

  someInstance.pop = function() {
    var item = storage[nextKey - 1];
    delete storage[nextKey - 1];
    if (nextKey >= 1) {
      nextKey--;
    }
    return item;
  };

  someInstance.size = function() {
    return nextKey;
  };

  return someInstance;
};

