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

	removeVertex(vertex) {}
}
