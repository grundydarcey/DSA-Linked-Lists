//underscore indicates that node class is private
//only displays the node to the linked list class
/*class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    //head indicates the beginning of linked list !
    this.head = null;
    this.length = 0;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, before) {
    let currNode = this.head;
    if (!currNode) {
      return null;
    }
    if (currNode.value === before) {
      this.insertFirst(item);
      return;
    }
    while ((currNode.next.value !== before) & (currNode.next.next !== null)) {
      currNode = currNode.next;
    }
    if (currNode.next.value === before) {
      let tempNode = new _Node(item, currNode.next);
      currNode.next = tempNode;
    } else {
      console.log('Item to insert before does not exist');
      return;
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main(item) {
  let SLL = new LinkedList;
  let insert = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
  insert.map(item => SLL.insertFirst(item));
  console.log(SLL);
}

main();*/

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertFirst(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const SLL = new LinkedList();
const insert = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
SLL.insertFirst(insert);
console.log(SLL);