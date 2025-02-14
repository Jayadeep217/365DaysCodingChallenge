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

  //This function removes element when index is passed.
  removeAt(index) {
    let currentNode = this.head,
      previousNode;
    // Handle empty list
    if (this.head === null) {
      throw new Error("List is empty!");
    }

    if (index < 0 || index >= this.size) {
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
    return currentNode.data;
  }

  //This function removes element when an element is passed.
  remove(element) {
    let currentNode = this.head, previousNode;
  
    // Handle empty list
    if (this.head === null) {
      throw new Error("List is empty!");
    }
  
    // Check if head needs to be removed
    if (this.head.data === element) {
      this.head = this.head.next;
      this.size--;
      return element;
    }
  
    // Traverse to find the element
    while (currentNode !== null) {
      if (currentNode.data === element) {
        previousNode.next = currentNode.next;
        this.size--;
        return element;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  
    // If element is not found
    return -1;
  }
  

  indexOf(element) {
    let currentNode = this.head,
      index = 0;
    while (currentNode !== null) {
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
    this.head = previousNode;
  }
}

let ll = new LinkedList();
// ll.insert(5, -1);
ll.insert("sdf", 0);
ll.insert("c", 1);
ll.insert(2, 2);
ll.insert(3, 3);
ll.insert(4);
ll.insert("5b");
ll.insert(6);
ll.insert(7);
console.log("original LL :");
ll.print();
console.log(ll.size);
console.log("remove LL :");
console.log(ll.removeAt(Number(process.argv[2])));
console.log(ll.size);
ll.print();
console.log("insert LL :");
ll.insert("ert", 0);
console.log(ll.size);
ll.print();
console.log("reverse :");
ll.reverse();
ll.print();
console.log(ll.indexOf("6"));
console.log(ll.isEmpty());

