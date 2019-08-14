console.time('sort')
function mergeSort(arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
    // return arr.sort((a,b) => a-b)
}

function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
    
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

// function mergeSort(arr) {
//     return arr.sort((a, b) => a-b)
// }

console.log(mergeSort([1,3,5,7,2,2,5,5,5,5,8]))
console.timeEnd('sort')