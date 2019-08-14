// 1. build heap
function buildHeap(arr, heapSize) {
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
        maxHeapify(arr, heapSize, i)
    }
}

// build max heap
function maxHeapify(arr, heapSize, i) {
    let left = 2 * i + 1
    let right = 2 * i + 2
    let largest = i

    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right
    }
    if (largest != i) {
        let currentValue = arr[i]
        let largestValue = arr[largest]

        arr[i] = largestValue
        arr[largest] = currentValue
        maxHeapify(arr, heapSize, largest)
    }
}

// sort maxheap
function heapSort(arr) {
    let heapSize = arr.length
    buildHeap(arr, heapSize)

    for (let j = heapSize - 1; j >= 0; j--) {
        let initValue = arr[0]
        let currentValue = arr[j]

        arr[0] = currentValue
        arr[j] = initValue
        heapSize-=1

        maxHeapify(arr, heapSize, 0)
    }
    return arr
}

console.log(heapSort([4, 2, 3, 5, 1, 6]))