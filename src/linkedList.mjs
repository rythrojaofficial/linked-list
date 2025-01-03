import { Node } from "./node.mjs";

export class LinkedList {
  constructor() {
    this.head = null;
    // initialize head
    this.size = 0;
    // initialize empty list
  }
  append(value) {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    // if the list is empty, make this node the head
    else {
      let current = this.head;
      // start at the beginning
      while (current.next != null) {
        current = current.next;
      }
      // loop until the end
      current.next = node;
      // add the new node at the end
    }
    this.size++;
  }
  // adds a new node containing value to the end of the list
  prepend(value) {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      let current = this.head;
      node.next = current;
      this.head = node;
    }
    this.size++;
  }
  // adds a new node containing value to the start of the list
  size;
  // returns the total number of nodes in the list
  head;
  // returns the first node in the list
  tail;
  // returns the last node in the list
  at(index) {
    let count = 0;
    let current = this.head;
    while (count < index) {
      if (current.next === null) return "index does not exist";
      else {
        current = current.next;
        count++;
      }
    }
    return currrent.value;
  }
  // returns the node at the given index
  pop() {
    const secondToLast = this.at(this.size - 2);
    let current = this.head;
    while (current !== secondToLast) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }

  // removes the last element from the list
  find(value) {
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return index;
      else if (currrent.next === null) return null;
      current = current.next;
      index++;
    }
  }
  // returns the index of the node containing value, or null if not found.
  toString() {
    let current = this.head;
    let string = "";
    while (current != null) {
      string = string + `( ${current.value} ) --> `;
      current = current.next;
    }
    string = string.concat(`null`);
    return string;
  }
  // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
}
