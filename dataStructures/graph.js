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
}
