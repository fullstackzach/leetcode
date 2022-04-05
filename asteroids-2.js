/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

 var asteroidCollision = function(asteroids) {
    // - -, + + same direction, no collision
    // - + opposite directions, no collision
    // + - asteroid headed right, asteroid headed left, collision
    
    // [-2, -1, 1, 2] = [-2, -1, 1, 2]
    // [8, -8] = []
    // [5, -10, 5] = [-10, 5]
    // [10, 2, -5] = [10]

    let survivors = []
    for (let i = 0; i < asteroids.length; i++) {
        if (survivors[survivors.length - 1] > 0 && asteroids[i] < 0) {
            // collision 💥
            let incoming = -asteroids[i] // we know it's neg, make it positive for comparison sake
            while (incoming !== 0 && survivors.length > 0 && survivors[survivors.length - 1] > 0) {
                let onStack = survivors[survivors.length - 1]
                if (onStack < incoming) {
                    // incoming destroys an asteroid on the stack
                    survivors.pop()
                } else if (onStack === incoming) {
                    // they destroy each other
                    survivors.pop()
                    incoming = 0
                    break
                } else {
                    // onStack > incoming
                    // onStack destroys incoming
                    incoming = 0
                    break
                }
            }
            if (incoming !== 0) survivors.push(asteroids[i])
        } else {
            survivors.push(asteroids[i])
        }
    }
    
    return survivors
};
