var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var currentTree = currentTree || this;

  if (currentTree.value === target) {
    return true;
  } else {
    for (var i = 0; i < currentTree.children.length; i++) {
      if (currentTree.children[i].contains(target, currentTree.children[i])) {
        return true;
      }
    }
  }
  return false;

  //ALTERNATE SOLUTION/////////
  // var found = false;
  // if (this.value === target) {
  //   found = true;
  // }
  // var search = function(target, children) {
  //   for (var i = 0; i < children.length; i++) {
  //     if (children[i].value === target) {
  //       found = true;
  //     }
  //     search(target, children[i].children);
  //   }
  // };
  // search(target, this.children);
  // return found;
  ///////////////////////////////

};



/*
 * Complexity: What is the time complexity of the above functions?
 The .addChild() method has CONSTANT time complexity, since it has a reference to the end of the array, it's a single operation.

 The .contains() method has linear time complexity, since it has to touch all the values in the tree to see if the value exists in the tree.
 */

/*
using functional with shared methods style
.children property, an array containing a number of subtrees
.addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the
target node or any descendant node
*/