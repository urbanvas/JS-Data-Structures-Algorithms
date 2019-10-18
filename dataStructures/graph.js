class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(val) {
		this.adjacencyList[val] = [];
	}

	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
		this.adjacencyList[vertex1] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}

	DFSRecursive(start) {
		const results = [];
		const visited = {};
		results.push(vertex);

		const DFSHelper = (vertex) => {
			if (!vertex) {
				return null;
			}

			results.push(vertex);
			visited[vertex] = true;

			this.adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					return DFSHelper(neighbor);
				}
			});
		};
		DFSHelper(start);
		return results;
	}

	DFSIterative(start) {
		const stack = [];
		const results = [];
		const visited = {};
		let node;

		stack.push(start);
		visited[start] = true;

		while (stack.length) {
			node = stack.pop();
			results.push(node);
			this.adjacencyList[node].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}

		return results;
	}

	BFS(start) {
		const queue = [];
		const results = [];
		const visited = {};
		let node;

		results.push(start);
		visited[start] = true;

		while (queue.length) {
			node = queue.shift();
			results.push(node);

			this.adjacencyList[node].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		return results;
	}
}
