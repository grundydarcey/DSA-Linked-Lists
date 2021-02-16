//underscore indicates that node class is private
//only displays the node to the linked list class


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