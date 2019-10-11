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

	unshift(val) {
		const node = new Node(val);
		if (this.length === 0) {
			this.head = 0;
			this.tail = 0;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		++this.length;
		return this;
	}

	get(idx) {
		if (idx <= 0 || idx >= this.length) {
			return null;
		}
		let count;
		let curr;
		if (idx <= this.length / 2) {
			count = 0;
			curr = this.head;
			while (count !== idx) {
				curr = curr.next;
				++count;
			}
		} else {
			count = this.length - 1;
			curr = this.tail;
			while (count !== idx) {
				curr = curr.prev;
				--count;
			}
		}
		return curr;
	}
	set(idx, val) {
		const node = this.get(idx);
		if (node !== null) {
			node.val = val;
			return true;
		}
		return false;
	}

	insert(idx, val) {
		if (idx < 0 || idx > this.length) {
			return false;
		} else if (idx === 0) {
			return this.unshift(val);
		} else if (idx === this.length) {
			return this.push(val);
		}
		const prev = this.get(idx - 1);
		const curr = prev.next;
		const node = new Node(val);

		prev.next = node;
		node.prev = prev;

		node.next = curr;
		curr.prev = node;

		++this.length;
		return true;
	}

	remove(idx) {
		if (idx < 0 || idx >= this.length) {
			return undefined;
		} else if (idx === 0) {
			return this.shift(idx);
		} else if (idx === this.length - 1) {
			return this.pop(idx);
		} else {
			const node = this.get(idx);
			node.prev.next = node.next;
			node.next.prev = node.prev;
			node.next = null;
			node.prev = null;
			--this.length;
			return node;
		}
	}
}
