


// Instantiate a new graph
var Graph = function() {

  this.graph = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = { edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.graph[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.graph[node]) {
    delete this.graph[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if both nodes exist
  if (this.graph[fromNode] && this.graph[toNode]) {
    // if they do, check that both contain a reference to each other (aka a connecting edge)
    if (this.graph[toNode].edges[fromNode] && this.graph[fromNode].edges[toNode]) {
      return true; // returns true if nodes exists AND edges exists
    } else {
      return false; // returns false if nodes exists but edges don't exist
    }
  } // if neither nodes exist, returns false
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check if both exist
  if (this.graph[fromNode] && this.graph[toNode]) {
    // add the value of each node as an edge of the other
    // i.e. add the value of each node as a key on the edges object, with a property of true
    this.graph[toNode].edges[fromNode] = true;
    this.graph[fromNode].edges[toNode] = true;

  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    delete this.graph[toNode].edges[fromNode];
    delete this.graph[fromNode].edges[toNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.graph, function(val, node) {
    cb(node);
  });

  //ALTERNATE SOLUTION:
  // for (var node in this.graph) {
  //   cb(node);
  // }
};


/*
 * Complexity: What is the time complexity of the above functions?
 .addNode - constant time complexity, as we have a reference. O(1)
 .removeNode - constant time complexity, as we have a reference.
 .contains - constant time complexity, as we have a reference.
 .hasEdge - constant time complexity, as we have a reference.
 .addEdge - constant time complexity, as we have a reference.
 .removeEdge - constant time complexity, as we have a reference.
 .forEachNode - linear time complexity, since we need to touch each node to execute the callback. O(n)
 */




