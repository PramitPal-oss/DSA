//! First approach Where time complexity o(n**2)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1)
    }
    return true
}

//same([1, 2, 3, 2], [9, 1, 4, 4]);

// !Second approach Where timw complexity is o(n)

function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

//console.log(same2([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

function validAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false
    let str1obj = {}
    let str2obj = {}
    for (let i of str1) {
        // str1obj[i] = ++str1obj[i] || 1;
        str1obj[i] ? (str1obj[i] += 1) : (str1obj[i] = 1)
    }
    for (let j of str2) {
        // str2obj[j] = ++str2obj[j] || +1;
        str2obj[j] ? (str2obj[j] += 1) : (str2obj[j] = 1)
    }
    console.log(str1obj)
    console.log(str2obj)
    for (let i in str1obj) {
        if (!(i in str2obj)) return false
        if (str1obj[i] !== str2obj[i]) return false
    }
    return true
}

console.log(validAnagrams('ghn', 'ngh'))
