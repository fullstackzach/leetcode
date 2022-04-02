class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  

function findMiddleNode (head) {
    let slow = head
    let fast = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

let head1 = new LinkedList(1)
head1.next = new LinkedList(2)
head1.next.next = new LinkedList(3)
head1.next.next = new LinkedList(4)
console.log(findMiddleNode(head1).value) // should be 2


let head2 = new LinkedList(1)
head2.next = new LinkedList(2)
head2.next.next = new LinkedList(3)
head2.next.next.next = new LinkedList(4)
head2.next.next.next.next = new LinkedList(5)
console.log(findMiddleNode(head2).value) // should be 3