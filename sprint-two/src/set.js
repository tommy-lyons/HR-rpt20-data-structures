var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  if (index !== -1) {
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

Since in all three cases, the function uses indexOf() - what's happening
under the hood is that it's using a for loop to iterate over the list and touch
all of the elements. The time complexity of all three methods is O(n); aka LINEAR.
If we had a reference to the location of the item we wanted to locate, it would have constant
time complexity, or O(1); but since we don't know where in the list the items are, we potentially have
to touch all of the elements to find it.

 */
