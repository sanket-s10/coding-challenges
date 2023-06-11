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
}

const myLList = new LinkedList(10);

//append at the end 
myLList.append(20);
console.log('L List', myLList)

//prepend at the star 
myLList.prepend(5);
console.log('Prepend L List', myLList)