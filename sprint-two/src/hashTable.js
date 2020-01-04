
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  if (!arguments[1]) {
    return 'You forgot to pass in a value argument';
  }
  // for advanced content - want to add code to change the length of the limitedArray to keep within 25 and 75 percent of total
  // produce index using GetIndexBelowMaxForKey
  var index = getIndexBelowMaxForKey(k, this._limit);

  // use that index to determine where to place a bucket
  // a bucket is an array of possibly multiple tuples, a tuple is an array with a key/value pairing at location 0 and 1.
  // for each tuple inside of each bucket, tuple[0] = k, and tuple[1] = v
  // if there isn't a bucket at the index
  if (!this._storage.get(index)) {
    // make an empty bucket
    this._storage.set(index, []);
    var bucket = this._storage.get(index);
    bucket.push([k, v]);
  } else { // if there is already a bucket, then look at that bucket, and verify whether it has our key
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      // if it does have our key, then assign the new value to the tuple, regardless of the existing value
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        return;
      }
    }
    // otherwise if it doesn't have the key then push the tuple (key, value) to the bucket
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create a bucket
  var bucket = this._storage.get(index);

  // for the length of the bucket, iterate thru tuples and return tuple[1]
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  // if there was no value at the target key (k) then return undefined
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if bucket doesn't exist, then exit out?
  // otherwise, iterate thru bucket length
  // if tuple[i][0] === k, then we take out tuple by bucket.splice(i, 1);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return 'no value found';
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket.splice(i, 1);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 The time complexity for all three methods is constant. This is based on the assumption that the hashing
 function is good enough that it spreads out the data evenly throughout the storage array AND the hash table
 resizes itself to re-arrange where key/value tuples sit when the ratio of tuple count to storage
 array length is exceeded.
 */

/* To prevent excessive collisions, make your hashTable double in size as soon as 75 percent of the spaces have been filled

 To save space, make sure the hashTable halves in size when space usage falls below 25 percent
*/
