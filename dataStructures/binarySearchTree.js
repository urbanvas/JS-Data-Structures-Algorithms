class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const node = new Node(val);
		if (this.root === null) {
			this.root = node;
			return this;
		} else {
			let curr = this.root;
			while (true) {
				if (val === curr.val) {
					return undefined;
				}
				if (val < curr.val) {
					if (curr.left === null) {
						curr.left = node;
						return this;
					} else {
						curr = curr.left;
					}
				} else if (val > curr.val) {
					if (curr.right === null) {
						curr.right = node;
					} else {
						curr = curr.right;
					}
				}
			}
		}
	}

	find(val) {
		if (this.root === null) {
			return false;
		}
		let curr = this.root;
		let found = false;
		while (curr && !found) {
			if (val < curr.val) {
				curr = curr.left;
			} else if (val > curr.val) {
				curr = curr.right;
			} else {
				found = true;
			}
		}
		if (!found) {
			return false;
		}
		return curr;
	}
}
