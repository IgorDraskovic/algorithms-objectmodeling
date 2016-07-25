//Tree constructor
function Tree(data) {
   var node = new Node(data);
   this._root = node;
}

//Node constructor
function Node(data) {
   this.data = data;
   this.parent = null;
   this.children = [];
}

var ourTree = new Tree('CEO');

//traverseDF(callback)

Tree.prototype.traverseDF = function(callback) {

  //invoke recourse as the root node as argument, currentNode points currentnode
   (function recurse(currentNode) {
    //iterate once for each child of currentNode
     for (var i = 0, length = currentNode.children.length; i < length; i++) {

      //invoke recourse
      r ecurse(currentNode.children[i]);

    }

     callback(currentNode);

   })

   (this._root);

}



//Remove
Tree.prototype.remove = function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;

    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };

    this.contains(callback, traversal);

    if (parent) {
        index = findIndex(parent.children, data);

        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }

    return childToRemove;
};
