class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	BFS() {
		let node = this.root;
		const data = [];
		const queue = [];
		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}

	DFSPreOrder() {
		let curr = this.root;
		const data = [];

		const traverse = (node) => {
			data.push(node.val);
			if (node.left) {
				traverse(node.left);
			}
			if (node.right) {
				traverse(node.right);
			}
		};

		traverse(curr);
		return data;
	}

	DFSPostOrder() {
		let curr = this.root;
		const data = [];

		const traverse = (node) => {
			if (node.left) {
				traverse(node.left);
			}
			if (node.right) {
				traverse(node.right);
			}
			data.push(node.val);
		};

		traverse(curr);
		return data;
	}

	DFSInOrder() {
		let curr = this.root;
		const data = [];

		const traverse = (node) => {
			if (node.left) {
				traverse(node.left);
			}
			data.push(node.val);
			if (node.right) {
				traverse(node.right);
			}
		};

		traverse(curr);
		return data;
	}
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
