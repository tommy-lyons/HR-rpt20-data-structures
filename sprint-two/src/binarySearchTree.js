
var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTreeMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

var BinarySearchTreeMethods = {

  cleanValue: function(value) {
    var cleaned = value.split(',').join('');
    // initialize storage for joined string
    return parseInt(cleaned);
  },

  insert: function(value) {
    if (typeof (value) !== 'number') {
      value = this.cleanValue(value);
    }

    // if the value being inserted is smaller then the existing nodes value
    if (value < this.value) {
      // add the value as a left child
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) { // otherwise if it's larger than the parent value
      // add it as a right child
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },

  contains: function(target) {
    if (typeof(target) !== 'number') {
      target = this.cleanValue(target);
    }

    // base case
    if (this.value === target) {
      return true;
    }
    // if there's a left side, and the target is smaller than the value, then ignore the right side and
    // run contains recursively down the left branch.
    if (this.left && target < this.value) {
      return this.left.contains(target);
    }
    // if the target is larger than the value, then ignore the left side and run contains recursively
    // down the right side
    if (this.right && target > this.value) {
      return this.right.contains(target);
    }
    // if target isn't found, return false
    return false;

  },

  depthFirstLog: function(cb) {
    cb(this.value);

    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

.insert() - O(log n) - logarithmic because we're having to look to half of the sorted data
.contains() - O(log n) - logarithmic because we're having to look to half of the sorted data
.depthFirstLog() - O()n - linear time complexity because we're having to run the
  callback function on ebery value that exists on the tree

 */

