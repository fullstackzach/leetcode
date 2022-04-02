const chai = require('chai');

it('Test Case #1', function () {
  const head = LinkedList(0);
  head.next = LinkedList(1);
  head.next.next = LinkedList(2);
  head.next.next.next = LinkedList(2);
  head.next.next.next.next = LinkedList(1);
  head.next.next.next.next.next = LinkedList(0);
  const expected = true;
  const actual = program.linkedListPalindrome(head);
  chai.expect(actual).to.deep.equal(expected);
});