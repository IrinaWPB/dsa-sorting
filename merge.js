function merge(a1, a2) {
    const merged = []
    let i = 0
    let j = 0
    while (i < a1.length && j < a2.length) {
        if (a1[i] < a2[j]) {
            merged.push(a1[i])
            i++
        } else {
            merged.push(a2[j])
            j++
        }
    }
    while (i < a1.length) {
        merged.push(a1[i])
        i++
    }
    while (j < a2.length) {
        merged.push(a2[j])
        j++
    }
    return merged
}

function mergeSort(arr) {
    //base case, if arr has 0 or 1 elements we return it
    if (arr.length <= 1) return arr
    //find the middle of current arr
    const mid = Math.floor(arr.length/2)
    //find left side of current arr
    const left = mergeSort(arr.slice(0, mid))
    //find right part of current arr
    const right = mergeSort(arr.slice(mid))
    //constantly merge sides
    return merge(left, right)
}

module.exports = { merge, mergeSort};