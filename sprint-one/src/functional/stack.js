var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.nextKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    this.storage[this.nextKey] = value;
    this.nextKey++;
  };

  someInstance.pop = function() {
    var item = this.storage[this.nextKey - 1];
    delete this.storage[this.nextKey - 1];
    if (this.nextKey >= 1) {
      this.nextKey--;
    }
    return item;
  };

  someInstance.size = function() {
    return this.nextKey;
  };

  return someInstance;
};

