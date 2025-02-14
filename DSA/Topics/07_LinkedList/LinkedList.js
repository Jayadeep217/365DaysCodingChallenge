class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(element, index) {
    const newNode = new ListNode(element);

    if (index !== undefined) {
      //index based insertion
      if (index < 0 || index > this.size) {
        throw new Error("Provide a valid index.");
      }

      if (this.head === null) {
        this.head = newNode;
        this.size++;
        return this;
      }

      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let tempNode = this.head;
        for (let i = 1; i < index; i++) {
          tempNode = tempNode.next;
        }
        newNode.next = tempNode.next;
        tempNode.next = newNode;
      }
    } else {
      //append at last node
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size++;
    return this.head;
  }

  remove(index) {
    let currentNode = this.head,
      previousNode;
    // Handle empty list
    if (this.head === null) {
      throw new Error("List is empty!");
    }

    if (index < 0 || index > this.size) {
      throw new Error("Provide a valid index.");
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      previousNode = currentNode;
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.size--;
    return currentNode.element;
  }

  indexOf(element) {
    let currentNode = this.head,
      index = 0;
    while (currentNode!==null) {
      if (currentNode.data === element) return index;
      index++;
      currentNode = currentNode.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let tempNode = this.head;
    process.stdout.write("HEAD->");
    while (tempNode !== null) {
      process.stdout.write(tempNode.data + "->");
      tempNode = tempNode.next;
    }
    console.log("NULL");
  }

  reverse() {
    let previousNode = null,
      currentNode = this.head;
    while (currentNode !== null) {
      let tempNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = tempNode;
    }
    this.head =  previousNode;
  }
}

let ll = new LinkedList();
// ll.insert(5, -1);
ll.insert("sdf", 0);
ll.insert('c', 1);
ll.insert(2, 2);
ll.insert(3, 3);
ll.insert(4);
ll.insert('5b');
ll.insert(6);
ll.insert(7);
ll.print();
console.log(ll.size);
// console.log(ll.remove(Number(process.argv[2])));
// ll.print();
// console.log(ll.size);
ll.reverse();
ll.print();
console.log(ll.indexOf("6"));