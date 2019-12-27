var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail !== null) {
      this.tail.next = node;
    }
    this.tail = node;
  };

  list.removeHead = function() {
    // move head pointer to next item in our list after original head
    var newHead = list.head;
    list.head = newHead.next;
    // whatever was "first" value before will get cancelled
    // return value of the former head
    return newHead.value;
  };

  list.contains = function(target) {
    var current = list.head;

    while (current) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
