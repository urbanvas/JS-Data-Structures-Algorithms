// Singly Linked List

// COMMENT ALL THE CODE AFTER THE FACT AS PRACTICE

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
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
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		++this.length;
		return this;
	}

	pop() {
		if (this.head === null) {
			return undefined;
		}
		let curr = this.head;
		while (curr.next !== this.tail) {
			curr = curr.next;
		}
		this.tail = curr;
		--this.length;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return curr;
	}

	popWithoutTail() {
		if (this.head === null) {
			return undefined;
		}
		let curr = this.head;
		let newTail = curr;
		while (curr.next) {
			newTail = curr;
			curr = curr.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		--this.length;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return curr;
	}

	shift() {
		if (this.head === null) {
			return undefined;
		}
		let oldHead = this.head;
		this.head = this.head.next;
		--this.length;
		if (this.length === 0) {
			this.tail = null;
		}
		return oldHead;
	}

	unshift(val) {
		const node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		++this.length;
		return this;
	}

	get(idx) {
		if (idx < 0 || idx >= this.length) {
			return null;
		}
		let count = 0;
		let curr = this.head;
		while (count !== idx) {
			curr = curr.next;
			++count;
		}
		return curr;
	}

	set(idx, val) {
		let curr = this.get(idx);
		if (curr) {
			curr.val = val;
			return true;
		}
		return false;
	}

	insert(idx, val) {
		if (idx < 0 || idx > this.length) {
			return false;
		}
		const curr = new Node(val);
		if (idx === this.length) {
			this.push(node);
		} else if (idx === 0) {
			this.unshift(node);
		} else {
			const prev = this.get(idx - 1);
			curr.next = prev.next;
			prev.next = curr;
		}
		return true;
	}

	remove(idx) {
		if (idx < 0 || idx > this.length) {
			return undefined;
		} else if (idx === this.length - 1) {
			return this.pop();
		} else if (idx === 0) {
			return this.shift();
		}
		const prev = this.get(idx - 1);
		const node = prev.next;
		prev.next = node.next;
		--this.length;
		return node;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let prev = null;
		let next;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
	}
}

var l = new SinglyLinkedList();
l.push(1);
l.push(2);
l.push(3);
l.shift();
