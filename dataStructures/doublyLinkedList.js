class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = node;
			return this;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		++this.length;
		return this;
	}

	pop() {
		if (this.head === null) {
			return undefined;
		} else if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			const node = this.tail;
			this.tail = node.prev;
			this.tail.next = null;
			node.prev = null;
		}
		--this.length;
		return this;
	}

	shift() {
		const node = this.head;
		if (this.head === null) {
			return undefined;
		} else if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = node.next;
			this.head.prev = null;
			node.next = null;
		}
		--this.length;
		return node;
	}
}
