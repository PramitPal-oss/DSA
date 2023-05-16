'use strict'

//Sum of Series:

//Solution:1
export function seriesSum(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) sum += i
    return sum
}

//Solution: 2
export function seriesSum2(n) {
    return (n * (n + 1)) / 2
}

//Second Largest No:

//Solution: 1
export const largest = function (arr, n) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]
        obj[el] ? (obj[el] += 1) : (obj[el] = 1)
    }
    const keys = Object.keys(obj)

    const keysNumber = keys.map((el) => Number(el))

    let maxno = Math.max(...keysNumber)
    let currIndex = keysNumber.indexOf(maxno)
    keysNumber.splice(currIndex, 1)
    return Math.max(...keysNumber)
}

//Solution:2
export const print2Largestno = function (arr, n) {
    const sortedArr = arr.sort((a, b) => a - b).reverse()
    return sortedArr[1]
}

//Solution: 3
export const print2Largestno2 = function (arr, n) {
    let highest = -1
    let secondHighest = -1

    for (let i = 0; i < n; i++) {
        highest = Math.max(highest, arr[i])
    }
    for (let i = 0; i < n; i++) {
        if (arr[i] < highest) {
            secondHighest = Math.max(secondHighest, arr[i])
        }
    }
    return secondHighest
}

//Reverse array in groups:

export function reverseArray(arr, n, k) {
    console.log(arr)
    let start = 0
    let end = Math.min(n, k - 1)
    let resultarr = []

    while (start <= n) {
        if (arr.length >= k - 1) {
            let newarr = arr.slice(start, end + 1)
            let reversearr = newarr.reverse(start, end)
            resultarr.push(...reversearr)
            start += k
            end = Math.min(n, k + end)
        }
    }

    return resultarr
}

//Distinct Element in an Array:

export function distinct(a, n, b, m) {
    let arrObj1 = {}

    for (let i = 0; i < n; i++) {
        arrObj1[a[i]] ? (arrObj1[a[i]] += 1) : (arrObj1[a[i]] = 1)
    }
    for (let i = 0; i < m; i++) {
        arrObj1[b[i]] ? (arrObj1[b[i]] += 1) : (arrObj1[b[i]] = 1)
    }

    const arrObj1Keys = Object.keys(arrObj1).length

    return arrObj1Keys
}

// Check the arry is different or not:

export function equalCheck(A, B, N) {
    console.log(A, B, N)

    let obj1A = {}
    let obj2B = {}

    for (let i = 0; i < N; i++) {
        let arrael = A[i]
        obj1A[arrael] ? (obj1A[arrael] += 1) : (obj1A[arrael] = 1)
    }

    for (let i = 0; i < N; i++) {
        let arrael = B[i]
        obj2B[arrael] ? (obj2B[arrael] += 1) : (obj2B[arrael] = 1)
    }

    for (let key in obj1A) {
        if (!key in obj2B) return 0
        if (obj1A[key] !== obj2B[key]) return 0
    }

    return 1
}

// Cheack a no present in array or not:

export function search(arr, N, X) {
    console.log(arr, N, X)

    for (let i = 0; i < N; i++) {
        if (arr[i] === X) return arr.indexOf(arr[i])
    }
    return -1
}

//Cyclically rotate an array by one
export function cyclicRotate(arr, n) {
    console.log(arr, n)
    let arr2 = []
    const newarr = arr.splice(-1)
    console.log(newarr, arr)
    arr2 = newarr.concat(arr)
    console.log(...arr2)
}

//Find minimum and maximum element in an array

export function minMax(arr, n) {
    console.log(arr, n)

    const arr2 = []

    const max = Math.max(...arr)
    const min = Math.min(...arr)

    arr2.push(max)
    arr2.push(min)

    return arr2
}

//First and last occurrences of x

export function occurrences(arr, n, x) {
    console.log(arr, n, x)

    let arr2 = []

    const first = arr.indexOf(x)

    const second = arr.lastIndexOf(x)

    arr2.push(first)
    arr2.push(second)

    return arr2
}

//Largest element in an array:

export function largestel(arr, n) {
    return Math.max(...arr)
}

//Minimum distance between two numbers

export function minmaxDistance(a, n, x, y) {
    console.log(a, n, x, y)

    for (let i = 0; i < a.length; i++) {
        let i = 0
        let p = -1
        let min_dist = Number.MAX_VALUE

        for (i = 0; i < n; i++) {
            if (a[i] == x || a[i] == y) {
                // we will check if p is not equal to -1 and
                // If the element at current index matches with
                // the element at index p , If yes then update
                // the minimum distance if needed
                if (p != -1 && a[i] != a[p]) min_dist = Math.min(min_dist, i - p)

                // update the previous index
                p = i
            }
        }
        // If distance is equal to var max
        if (min_dist == Number.MAX_VALUE) return -1
        return min_dist
    }
}

//Maximize sum(arr[i]*i) of an Array:

export function maximizeIndexSum(arr, n) {
    const sortedarr = arr.sort((a, b) => a - b)
    console.log(sortedarr)

    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += sortedarr.indexOf(sortedarr[i]) * sortedarr[i]
    }

    return sum
}

//Value equal to index value

export function valueEqualtoIndex(arr, n) {
    console.log(arr, n)
    let resarr = []

    for (let i = 0; i < n; i++) {
        if (arr[i] === i + 1) resarr.push(i + 1)
    }
    return resarr
}

//Immediate Smaller Element
export function immedieatesmaller(arr, n) {
    // console.log(arr);

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) arr.splice(i, 1, arr[i + 1])
        else arr.splice(i, 1, -1)
    }
    return arr
}

//Number of occurrence

export function countOccurance(arr, n, x) {
    let arrObj = {}
    for (let val of arr) {
        arrObj[val] ? (arrObj[val] += 1) : (arrObj[val] = 1)
    }

    let value = 0

    for (let key in arrObj) {
        if (key === String(x)) value = arrObj[key]
    }

    return value
}
