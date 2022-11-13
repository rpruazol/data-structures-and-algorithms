export default class LinkedList {
  head: ListNode;
  constructor(value: any) {
    this.head = new ListNode(value)
  }
}


class ListNode {
  public next: ListNode | null = null
  constructor(public value: any) {
    this.value = value
  }
}
