"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedList {
    constructor(value) {
        this.head = new ListNode(value);
    }
}
exports.default = LinkedList;
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.value = value;
    }
}
