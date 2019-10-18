// Min Binary Heap

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		const newNode = new Node(val, priority);
		this.values.push(newNode);

		const bubbleUp = () => {
			let idx = this.values.length - 1;
			const ele = this.values[idx];

			while (idx > 0) {
				let parentIdx = Math.floor((idx - 1) / 2);
				let parent = this.values[parentIdx];
				if (ele.priority >= parent.priority) {
					break;
				}
				this.values[parentIdx] = ele;
				this.values[idx] = parent;
				idx = parentIdx;
			}
		};

		bubbleUp();
		return this;
	}

	dequeue() {
		const min = this.values[0];
		if (this.values.length > 0) {
			const end = this.values.pop();
			this.values[0] = end;
		}

		const sinkDown = () => {
			let idx = 0;
			const length = this.values.length;
			const element = this.values[0];

			while (true) {
				let leftChildIdx = idx * 2 + 1;
				let rightChildIdx = idx * 2 + 2;
				let leftChild;
				let rightChild;
				let swap = null;

				if (leftChildIdx < length) {
					leftChild = this.values[leftChildIdx];
					if (leftChild.priority < element.priority) {
						swap = leftChildIdx;
					}
				}
				if (rightChildIdx < length) {
					rightChild = this.values[rightChildIdx];
					if (
						(swap === null && rightChild.priority < element.priority) ||
						(swap !== null && rightChild.priority < leftChild.priority)
					) {
						swap = rightChildIdx;
					}
				}

				if (swap === null) {
					break;
				}
			}
		};

		sinkDown();

		return min;
	}
}
