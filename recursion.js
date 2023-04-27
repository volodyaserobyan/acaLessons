// 5! = 5 * 4 * 3 * 2 * 1

// 5! = 5 * 4!
// 5! = 5 * 4 * 3!
// 5! = 5 * 4 * 3 * 2!
// 5! = 5 * 4 * 3 * 2 * 1

// const factorial = (n) => {
//     if (n === 2) {
//         return 2
//     }
//     return n * factorial(n - 1)
// }

// console.log(factorial(5))



// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// const fiboncci = (x) => {
//     if (x < 2) {
//         return x
//     }
//     console.log(x, ' x')
//     return fiboncci(x - 2) + fiboncci(x - 1)
// }

// console.log(fiboncci(4))

// fiboncci(9) = fib(7) + fib(8)
// fib(7) ....
// fub(8) ....


// [1, 2, [3, 4, [5, [7, [4]], [3]]]]

// // let result = []

// const recursiveFlat = (arr) => {
//     const result = []
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             result.push(...recursiveFlat(item))
//         } else {
//             result.push(item)
//         }
//     });
//     return result
// }

// console.log(recursiveFlat([1, 2, [3, 4, [5, [7, [4]], [3]]]]))
// console.log([1, 2, [3, 4, [5, [7, [4]], [3]]]].flat(Number.POSITIVE_INFINITY))

// gcd
// greates common divisior


// const gcd = (a, b) => {
//     if (!b) {
//         return a
//     }
//     return gcd(b, a % b)
// }


// const result = gcd(458, 2154)
// console.log(result)

// gcd(458, 2154)
// gcd(2154, 458)
// gcd(458, 322)
// gcd(322, 136)
// gcd(136, 50)
// gcd(50, 36)
// gcd(36, 14)
// gcd(14, 8)
// gcd(8, 6)
// gcd(6, 2)
// gcd(2, 0)


// function t(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//         for (let i = 0; i < n; i++) {
//             console.log(i)
//         }
//     }
// }

// O(2n) = 2O(n) = O(n)
// O(n^2)
// O(logN)


// Linear Search

// O(n)
// const linearSearch = (list, value) => {
//     for (let i = 0; i < list.length; i++) {
//         if (value === list[i]) {
//             return i
//         }
//     }
//     return -1
// }


// BINARY SEARCH

// function binarySearch(list, value) {
//     let start = 0
//     let end = list.length - 1

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2)
//         if (list[middle] === value) {
//             return middle
//         } else if (list[middle] < value) {
//             start = middle + 1
//         } else {
//             end = middle - 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([3, 14, 19, 23, 35, 100, 301], 14))



// const arr = [1, 2, 3, 1, 2, 3, 4, 1, 2]  // 1, 2, 3, 4


// const consecutiveSequence = (arr) => {
//     let seqArr = []
//     let startIndex = 0
//     let seqObj = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] + 1 === arr[i + 1]) {
//             seqArr = [...seqArr, arr[i]]
//             seqObj = {
//                 ...seqObj,
//                 [startIndex]: [...seqArr, arr[i + 1]]
//             }
//         } else {
//             seqArr = []
//             startIndex = i
//         }
//     }

//     const valuesArr = Object.values(seqObj)

//     let longestSequence = valuesArr[0]

//     for (let i = 0; i < valuesArr.length; i++) {
//         if (valuesArr[i].length > longestSequence.length) {
//             longestSequence = valuesArr[i]
//         }
//     }
//     console.log(longestSequence)
// }

// consecutiveSequence([1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7])

// [1, 5, 2, 9, 6, 21]
// [1, 2, 5, 6, 9, 21]

// O(n^2)

// let a = 5;
// let b = 3;

// [a, b] = [b, a]

// console.log(a, b)

// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 const temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     console.log(arr)
// }

// bubbleSort([1, 5, 2, 9, 6, 21])