class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    // left 
                    if(!currentNode.left){
                        currentNode.left = newNode; 
                        return this; 
                    }
                    currentNode = currentNode.left; 
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(15);
bst.insert(8);


console.log(' BST TREE ', bst);