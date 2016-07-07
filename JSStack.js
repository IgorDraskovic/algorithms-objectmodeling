function Stack() {
  this._size = 0;
  this._storage = {};
}

Stack.prototype.push = function(data) {
  var size = this._size++

  //size is set as the key to data, so size 1 = data, size 2 = some other data..
  this._storage[size] = data;
  // in console -> Stack { _size: m,2, _storage: { '0': 1, '1': 2 } }

}



Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;

    if (size) {
        deletedData = this._storage[size];

        delete this._storage[size];
        this._size--;

        return deletedData;
    }
};

var stack2 = new Stack();

stack2.push('Igor')
console.log(stack2);
stack2.pop();
console.log(stack2);
stack2.push('Bob');
console.log(stack2);
stack2.push('Mack');
console.log(stack2);
