class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append = (value) => {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend = (value) => {
        const newNode = {
            value: value,
            next: this.head
        }
        this.head = newNode;
        this.length++;
    }
    printList = () => {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array
    }
    traverseToIndex = (index) => {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter ++;
        }
        return currentNode;
    }
    insert = (index, value) => {
        let nodeToInsert = {
            value : value,
            next: null
        };
        if(index == 0){
            this.prepend(value)
        }
        if(index >= this.length){
            this.append(value)
        }
        if(index > 0 && !(index >= this.length)){
            const leader = this.traverseToIndex(index-1);
            const holdingPointer = leader.next;
            leader.next = nodeToInsert;
            nodeToInsert.next = holdingPointer;
        }
       
        this.length++;
    }
    delete = (index) => {
        if(index >= this.length || index < 0){
            return "Index not found"
        }
        if(index == 0){
            const holdingPointer = this.head.next;
            this.head.next = null;
            this.head = holdingPointer;
        }else{
            let leaderNode = this.traverseToIndex(index-1);
            let currentIndexNode = leaderNode.next;
            let nextNodePointer = currentIndexNode.next;
            leaderNode.next = nextNodePointer;
        }
        this.length --;
    }
}

const myLList = new LinkedList(10);

//append at the end 
myLList.append(20);

myLList.append(25);

// //prepend at the star 
myLList.prepend(5);

myLList.insert(2,2);

// myLList.delete(2);

// myLList.delete(1);

myLList.delete(2);

const listValueArr = myLList.printList();


console.log(" value arry ", listValueArr);
// myLList.insert(1 , 2);
// console.log('Insert L List', myLList);

// myLList.insert(1 , 3);
// console.log('Insert L List', myLList)