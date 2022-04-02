// https://www.algoexpert.io/questions/Linked%20List%20Palindrome
// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function linkedListPalindrome(head) {
    // Write your code here.
      if (head === null) return false
      if (head.next === null) return true // length of one node is always a palindrome
      
      // get mid point
      let middle = findMiddleNode(head)
      // reverse it
      let reversed = reverse(middle)
      // match it
      let result = matchesExhaustingLast(head, reversed)
      
    return result;
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
  
  function reverse(head) {
      let curr = head
      let next = null
      let prev = null
      while (curr !== null) {
          next = curr.next
          curr.next = prev
          prev = curr
          curr = next
      }
      head = prev
      return head
  }
  
  
  function matchesExhaustingLast(first, last) {
      while (last) {
          if (!first) {
              return false
          }
          if (first.value !== last.value) {
              return false
          }
          first = first.next
          last = last.next
      }
      return true
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.linkedListPalindrome = linkedListPalindrome;