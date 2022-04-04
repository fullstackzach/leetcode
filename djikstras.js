https://www.algoexpert.io/questions/Dijkstra's%20Algorithm
function dijkstrasAlgorithm(start, edges) {
	let numberOfVertices = edges.length
	
	let minDistances = new Array(numberOfVertices).fill(Infinity)
	minDistances[start] = 0
	
	let visited = new Set()
	
	while (numberOfVertices != visited.size) {
		let [vertex, currentMinDistance] = getVertexWithMinDistance(minDistances, visited)
		if (currentMinDistance === Infinity) break
		visited.add(vertex)
		
		for (let edge of edges[vertex]) {
			let [destination, distance] = edge
			
			if (visited.has(destination)) continue
			
			let newPathDistance = currentMinDistance + distance
			let currentDestinationDistance = minDistances[destination]
			if (newPathDistance < currentDestinationDistance) {
				minDistances[destination] = newPathDistance
			}
		}
	}
	
	return minDistances.map(x => (x === Infinity ? -1 : x))
	
}

function getVertexWithMinDistance(distances, visited) {
	let currentMinDistance = Infinity
	let vertex = -1
	
	for (let [vertexIdx, distance] of distances.entries()) {
		if (visited.has(vertexIdx)) continue
		if (distance <= currentMinDistance) {
			vertex = vertexIdx
			currentMinDistance = distance
		}
	}
	
	return [vertex, currentMinDistance]
}

// Do not edit the line below.
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;
