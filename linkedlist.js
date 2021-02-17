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

  insertLast(data) {
    if (this.head === null) {
      this.insertFirst(data);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new LinkedListNode(data, null);
    }
  }

  insertBefore(data, before) {
    if (!this.find(before)) {
      return;
    } else {
      let tempNode = this.head;
      while (tempNode.next.value !== before) {
        tempNode = tempNode.next;
      }
      let insert = new LinkedListNode(data, tempNode.next);
      tempNode.next = insert;
    }
  }

  insertAfter(data, after) {
    if (!this.find(after)) {
      return;
    } else {
      let tempNode = this.head;
      while (tempNode.value !== after) {
        tempNode = tempNode.next;
      }
      let insert = new LinkedListNode(data, tempNode.next);
      tempNode.next = insert;
    }
  }

  insertAt(data, at) {
    if (at === 1) {
      this.insertFirst(data);
      return;
    }
    let count = 1;
    let tempNode = this.head;
    while (count < at - 1) {
      tempNode = tempNode.next;
      count++;
    }
    let insert = new LinkedListNode(data, tempNode.next);
    tempNode.next = insert;
  }

  find(data) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== data) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(data) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === data) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !== data)) {
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

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//const SLL = new LinkedList();
/*SLL.insertFirst('Starbuck');
SLL.insertFirst('Husker');
SLL.insertFirst('Helo');
SLL.insertFirst('Boomer');
SLL.insertFirst('Apollo');
//console.log(SLL);
SLL.insertFirst('Tauhida');
//console.log(SLL);
SLL.insertLast('squirrel');
console.log(SLL);*/

function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Apollo');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 4);
  SLL.remove('Tauhida');
  console.log(SLL);
}

//main();


function display(list) {
  const SLL = new LinkedList();
  let tempNode = list.head;
  while (tempNode.next !== null) {
    console.log(tempNode.value);
    tempNode = tempNode.next;
  }
  console.log(tempNode.value);
}

function size(list) {
  if (list.head === null) {
    return 0;
  }
  let tempNode = list.head;
  let count = 0;
  while (tempNode.next !== null) {
    count++;
    tempNode = tempNode.next;
  }
  count++;
  return count;
}

function isEmpty(list) {
  if (list.lhead === null) {
    return true;
  } else {
    return false;
  }
}

function findPrevious(list, data) {
  let tempNode = list.head;
  if (tempNode === null || tempNode.value === data) {
    console.log('List contains no previous item');
    return;
  }
  while (tempNode.next.value !== data) {
    if (tempNode.next === null) {
      return 'Item does not exist';
    }
    tempNode = tempNode.next;
  }
  return tempNode.value;
}

function findLast(list) {
  let tempNode = list.head;
  if (tempNode === null) {
    console.log('List contains no items');
  }
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  return tempNode.value;
}

Mystery program time complexity is logarithmic

function reverseList(list) {
  let listSize = size(list);
  let newHead = list.head;
  if (size < 1) {
    console.log('List has no values to reverse');
  } if (size === 1) {
    return list;
  } else if (size === 2) {
    newHead.next.nxt === newHead;
  }
}
