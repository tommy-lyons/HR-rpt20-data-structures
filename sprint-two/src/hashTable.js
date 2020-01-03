

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //want to add code to change the length of the limitedArray to keep within 25 and 75 percent of total
  // get index using GetIndexBelowMaxForKey
  var index = getIndexBelowMaxForKey(k, this._limit);

  // use that index to know where to place bucket
  // a bucket is an array of possibly multiple tuples (arrays with key/value pairing)
  // for each bucket, tuple[0] = k, and tuple[1] = v
  //if there isn't a bucket at the index
  if (!this._storage.get(index)) {
    // make an empty bucket
    this._storage.set(index, []);
    var bucket = this._storage.get(index);
    bucket.push([k, v]);
  } else { // if there is already a bucket, then look at that bucket, and verify whether it has our key
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      //if it does have our key, then assign the new value to the tuple.
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
  // if ()
  // create a bucket
  // for the length of the bucket, we have to iterate thru tuples and return tuple[1]
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
  // return this._storage[index];
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
 */


/* To prevent excessive collisions, make your hashTable double in size as soon as 75 percent of the spaces have been filled

 To save space, make sure the hashTable halves in size when space usage falls below 25 percent

 A hashTable class, in pseudoclassical style:
 First: Play with each of the helper functions provided to get a sense of what they do.
You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.
A limitedArray helper has been provided for you,
check out the source code for it in src/hashTableHelpers.js.
 Use it to store all inserted values rather than using a plain JavaScript array.
  The limitedArray, as you will see in the source code,
provides get, set, and each methods which you should use in order to interact with it.
Do not use the typical bracket
notation for arrays when interacting with a limitedArray instance. Try interacting with it from the console first.
Make the following properties appear on all instances:
 An .insert() method
 A .retrieve() method
 A .remove() method*/