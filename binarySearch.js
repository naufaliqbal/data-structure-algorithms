function binarySearch(nums, maxes) {
    // notes: nums is sorted asc
    let result = []

    for (let i = 0; i < maxes.length; i++) {
        let min = 0,
            max = nums.length - 1

        while (min <= max) {
            let mid = min + Math.floor((max - min) / 2)

            if (maxes[i] < nums[mid]) {
                max = mid - 1
            } else if (maxes[i] >= nums[mid]) {
                min = mid + 1
            }
        }

        result.push(nums.slice(0, min))
    }

    return result
}

console.log(binarySearch([3, 5, 6, 9, 11, 13, 14, 15, 17, 19, 21, 22, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 51, 53, 55, 57, 59, 61, 64, 89, 91, 93, 95, 97, 99, 100, 101], [6, 4, 18, 13, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20]))