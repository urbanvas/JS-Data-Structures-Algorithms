class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(val) {
		this.values.push(val);

		const bubbleUp = () => {
			let idx = this.values.length - 1;
			const ele = this.values[idx];

			while (idx > 0) {
				let parentIdx = Math.floor((idx - 1) / 2);
				let parent = this.values[parentIdx];
				if (ele <= parent) {
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

	extractMax() {
		const max = this.values[0];
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
					if (leftChild > element) {
						swap = leftChildIdx;
					}
				}
				if (rightChildIdx < length) {
					rightChild = this.values[rightChildIdx];
					if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
						swap = rightChildIdx;
					}
				}

				if (swap === null) {
					break;
				}
			}
		};

		sinkDown();

		return max;
	}
}
