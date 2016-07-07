function Queue() {
  this._newestIndex = 1;
  this._oldestIndex = 1;
  this._storage = {};
}

Queue.prototype.size = function() {
  console.log(this._newestIndex - this._oldestIndex);
}

Queue.prototype.enqueue = function(data) {
  this._storage[this._newestIndex] = data;
  this._newestIndex++;
}

Queue.prototype.dequeue = function() {
  var oldestIndex = this._oldestIndex;
  var newestIndex = this._newestIndex;
  var datatoDelete;

  //if not empty

  if (newestIndex !== oldestIndex) {
    datatoDelete = this._storage[oldestIndex]
    delete this._storage[oldestIndex];
    this._oldestIndex++;

    return datatoDelete;

  }

}

var queue = new Queue();


queue.enqueue('Igor');

queue.enqueue('Bob');

//queue.dequeue();

queue.size();


