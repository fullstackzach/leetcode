class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }

    findMiddleNode() {
        let slow = this
        let fast = this
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next
        }
        
        return slow
    }

    length () {
        // probably faster if we maintain a counter and just return it
        let count = 0;
        let curr = this
        while (curr !== null) {
            count++;
            curr = curr.next
        }
        return count
    }
  }

let head1 = new LinkedList(1)
head1.next = new LinkedList(2)
head1.next.next = new LinkedList(3)
head1.next.next.next = new LinkedList(4)
console.log(head1.findMiddleNode().value) // should be 3
console.log(head1.length()) // should be 4


let head2 = new LinkedList(1)
head2.next = new LinkedList(2)
head2.next.next = new LinkedList(3)
head2.next.next.next = new LinkedList(4)
head2.next.next.next.next = new LinkedList(5)
console.log(head2.findMiddleNode().value) // should be 3
console.log(head2.length()) // should be 5