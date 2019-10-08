// Queue

// FIFO, First in First Out
// done with a linkedList

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const node = new Node(val);
		if (this.first === null) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
		return ++this.size;
	}

	dequeue() {
		if (this.first === null) {
			return null;
		} else if (this.first === this.last) {
			this.last = null;
		}
		const curr = this.first;
		this.first = this.first.next;
		--this.size;
		return curr.val;
	}
}
