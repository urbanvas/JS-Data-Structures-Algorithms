// Stacks

// in a linked list format
// LIFO, Last In First Out

class Node {
	constructor(val) {
		this.val = val; // head
		this.next = null; // tail
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const node = new Node(val);
		if (this.first === null) {
			this.first = node;
			this.last = node;
		} else {
			node.next = this.first;
			this.first = node;
		}
		return ++this.size;
	}

	pop() {
		const node = this.first;
		if (node === null) {
			return null;
		} else if (node === this.last) {
			this.last = null;
		}
		this.first = node.next;
		--this.size;
		return node.val;
	}
}
