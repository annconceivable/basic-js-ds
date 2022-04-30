const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  getUnderlyingList() {
    let currentNode = this.head;
    while(currentNode) {
      let res = currentNode;
      currentNode = currentNode.next;
      return res;
    }
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) return;
    let res = this.head.value;
    this.head = this.head.next;
    return res;
  }
}

module.exports = {
  Queue
};
