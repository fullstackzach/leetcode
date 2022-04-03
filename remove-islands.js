// https://www.algoexpert.io/questions/Remove%20Islands

// O(row*col) time
// O(row*col) space (We create a set of visited nodes)

function removeIslands(matrix) {
    // Write your code here
      let visited = new Set()
      for (let row = 0; row < matrix.length; row++) {
          for (let col = 0; col < matrix[0].length; col++) {
              // check if visited already. If it is, we already evaluated it earlier. we don't need to do this again
              if (!visited.has(`${row},${col}`) && matrix[row][col] === 1) {
                  // determine if isIsland
                  // if it is, replace 1s with 0s
                  if (isIsland(row, col, matrix)) {
                      replaceZeros(row, col, matrix, visited)
                  }
              }
              visited.add(`${row},${col}`)
          }
      }
    return matrix;
  }
  
  // visited is only used within isIsland temporarily while checking if its an island. We can't share visited with the rest of the algo. If island We'll have to revisit and replace with 0s 
  function isIsland(row, col, matrix, visited = new Set()) {
      // might have to do this in two passes. 1) identify island first 2) modify only if isIsland
      // alternatively, postorder remove only if isIsland = true?  We won't know if its an island until all neighbors have been visited
      if (isOutOfBounds(row, col, matrix)) return false
      if (!visited.has(`${row},${col}`) && matrix[row][col] === 1) {
          visited.add(`${row},${col}`)
          return isIsland(row + 1, col, matrix, visited) && 
                       isIsland(row, col + 1, matrix, visited) && 
                       isIsland(row - 1, col, matrix, visited) && 
                       isIsland(row, col - 1, matrix, visited)
      }
      return true
  }
  
  function replaceZeros(row, col, matrix, visited) {
      if (!visited.has(`${row},${col}`) && matrix[row][col] === 1) {
          visited.add(`${row},${col}`)
          matrix[row][col] = 0
          replaceZeros(row + 1, col, matrix, visited)
          replaceZeros(row, col + 1, matrix, visited)
          replaceZeros(row - 1, col, matrix, visited)
          replaceZeros(row, col - 1, matrix, visited)
      } 
  }
  
  function isOutOfBounds(row, col, matrix) {
      return (row < 0 || col < 0 || row > matrix.length - 1 || col > matrix[0].length - 1)
  }
  
  // Do not edit the line below.
  exports.removeIslands = removeIslands;
  