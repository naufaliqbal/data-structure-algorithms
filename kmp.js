function getPrefix(str) {
    console.time('prefix')
    if (!str || str.length === 0) return
    
    let pattern = Array(str.length).fill(0)
    let j = 0

    for (let i = 1; i < pattern.length; i++) {

        while(j > 0 && str[i] != str[j]) {
            j = pattern[j-1]
        }

        if (str[i] == str[j]) {
            j++
        }
        pattern[i] = j
    }
    pattern[0] = str.length

    console.timeEnd('prefix')
    return pattern
}

console.log(getPrefix('ababaa'))