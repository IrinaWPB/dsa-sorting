function insertionSort(arr) {
    //sorting og empty array returns empty array
    if (!arr.length) return []

    //start sorted array with the first element, add second, swap if necessary
    let sorted = [arr[0]]
    if (arr[0] > arr[1]) {
        sorted.unshift(arr[1])
    } else sorted.push(arr[1])

    //check every element starting from 2nd
    for (let i = 2; i < arr.length; i++) {

        //if element is greater than last element of sorted array, push it to sorted array
        if (arr[i] > sorted[sorted.length - 1]) {
            sorted.push(arr[i])

        } else {
            //iterate through sorted array, insert before smalest
            for (let j = 0; j < sorted.length; j++) {
                if (arr[i] <= sorted[j]) {
                    sorted.splice(j, 0, arr[i])
                    //if found start the outer loop again using next element
                    break
                }
            } 
        }
    }
    return sorted
}

module.exports = insertionSort;