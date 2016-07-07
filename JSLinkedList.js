function LinkedList () {
  this.head = null;
}


//IS EMPTY
LinkedList.prototype.isEmpty = function() {
  return this.head === null;
}

//LENGHTH
LinkedList.prototype.length = function() {
  var currentNode = this.head;
  var count = 0;

  while(currentNode !== null) {
    currentNode = currentNode.next;
    count++;
  }

  return count;

}


//PREPEND
LinkedList.prototype.prepend = function(val) {
  //create a node object
  var newNode = {
    data: val,
    next: this.head
  };

  //this makes the nowNode the head, this is how you prepend..
  //everytime you prepend the new node's address pointer
  this.head = newNode

}

//APPEND
LinkedList.prototype.append = function(val) {
  var newNode = {
    data: val,
    next: null
  };

  if (this.isEmpty()) {
    this.head = newNode;
    return;
  }

  var currentNode = this.head;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

 //when you hit address with null set currentNode to the new Node
 currentNode.next = newNode;

}

//CONTAINS
LinkedList.prototype.contains = function(val) {
  var currentNode = this.head;

  while(currentNode !== null) {
    if(currentNode.data === val) {
      return true
    }
    currentNode = currentNode.next;
  }
  //when it finally hits null without a match...return false
  return false
}

//REMOVE
LinkedList.prototype.remove = function(val) {
  if(!this.contains(val)) {
    return err
  }

  //if val to be removed is the head...reasign the next value as the head
  if(this.head.data === val) {
    this.head = this.head.next;
    return
  }

  //if it's not the head...we need to circumvent...
  var currentNode = this.head;
  var previousNode = null;

  //keep moving along with both counters...
  while(currentNode.data !== val) {
    previousNode = currentNode;
    currentNode = currentNode.next
  }

//when you find the value to delete
//the address pointer in the prviousnode becomes the address of the current node...erasing current node
previousNode.next = currentNode.next

}

var list = new LinkedList();
list.prepend(10);
list.append(2);
list.append(44);
list.remove(2 )
console.log(list);

