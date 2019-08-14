class NewNode {
    constructor(data) {
        this.data = data
        this.left = this.right = null
    }
}

function isValid(a) {
    let length = a.length
    var root = 0,
        root = insertLevelOrder(a, root, 0, length)
    inOrder(root)
    // Write your code here
}

function insertLevelOrder(arr, root, i, n) {
    if (i < n) {
        let temp = new NewNode(arr[i])
        let root = temp

        root.left = insertLevelOrder(arr, root.left, 2 * i + 1, n)
        root.right = insertLevelOrder(arr, root.right, 2 * i + 2, n)
    }

    return root
}

function inOrder(root) {
    if (root) {
        inOrder(root.left)
        print(root.data)
        inOrder(root.right)
    }
}

console.log(isValid([0, 3,4,1,5,2]))