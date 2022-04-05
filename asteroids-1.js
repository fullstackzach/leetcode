/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

// NOTE: I saw other soltions that set the destroyed asteroid to 0, and then push it at the end only if the value is not 0
var asteroidCollision = function(asteroids) {
    // - -, + + same direction, no collision
    // - + opposite directions, no collision
    // + - asteroid 1 headed right, asteroid 2 headed left, collision
    
    // [-2, -1, 1, 2] = [-2, -1, 1, 2]
    // [8, -8] = []
    // [5, -10, 5] = [-10, 5]
    // [10, 2, -5] = [10]
    
    let result = []
    collision:
    for (let i = 0; i < asteroids.length; i++) {
        // console.log('begin', asteroids, result)
        if (asteroids[i] > 0) { // positive case
            result.push(asteroids[i])
        }
        if (asteroids[i] < 0) { // negative case
            while (result[result.length - 1] > 0 && -asteroids[i] >= result[result.length - 1]) {
                // console.log(-asteroids[i], result[result.length - 1])
                if (result.pop() === -asteroids[i]) { // both get destroyed
                    continue collision // we want to stop here and avoid pushing the roid since it got destroyed
                }
            }
            if (result[result.length - 1] < 0 || result.length === 0) {
                result.push(asteroids[i])
            }
        }
    }
    return result
};

console.log(asteroidCollision([-2, -1, 1, 2]))
console.log(asteroidCollision([8, -8]))
console.log(asteroidCollision([5, -10, 5]))
console.log(asteroidCollision([10, 2, -5]))