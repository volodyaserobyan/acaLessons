







// console.log({})


// Object.prototype.toString = function () {
//     console.log('barev')
// }
// const myObject = {
//     city: 'Madrid',
//     greet: function () {
//         console.log(this.city)
//     }
// }

// // myObject.toString()

// console.log(myObject.hasOwnProperty('toString'))
// const obj = new Object()

// console.log(Object.getPrototypeOf({}))

// const myDate = new Date()
// console.log(myDate)
// let object = myDate

// do {
//     object = Object.getPrototypeOf(object)
//     console.log(object)
// } while (object)


// const myDate = new Date(1995, 11, 17)

// console.log(myDate.getFullYear())

// myDate.getFullYear = function () {
//     console.log('custom getfull year method')
// }

// const myDate1 = new Date(1997, 11, 17)

// console.log(myDate1.getFullYear())

// const personPrototype = {
//     greet: function () {
//         return 'hello!'
//     }
// }

// const carl1 = Object.create(personPrototype)
// console.log(carl1)



// const obj1 = {
//     a: 1
// }

// const obj2 = {
//     b: 3
// }

// Object.setPrototypeOf(obj1, obj2)

// console.log(obj1)


// const personPrototype = {
//     greet() {
//         console.log(`hello my name is ${this.name}`)
//     }
// }

// function Person(name) {
//     this.name = name
// }

// const person1 = new Person('John')
// Person.prototype = personPrototype
// Person.prototype.constructor = Person
// // console.log(person1)

// const ruben = new Person('Ruben')

// ruben.greet()
// function doSomething() { }
// console.log(doSomething.prototype);
// const doSomethingFromArrowFunction = () => { };
// console.log(doSomethingFromArrowFunction.prototype);

// const Button = (function () {
//     const properties = {
//         width: 100,
//         height: 50
//     };
//     const getWidth = () => properties.width;
//     const getHeight = () => properties.height;
//     const setWidth = width => properties.width = width;
//     const setHeight = height => properties.height = height;
//     return function (width, height) {
//         properties.width = width;
//         properties.height = height; return {
//             getWidth,
//             getHeight,
//             setWidth,
//             setHeight
//         };
//     };
// })();

// QuickSort 

[5, 1, 3, 9, 32, 7]


// 1. Choosing pivot element which is the first element of our array arr[0]
// 2. Iterating over the array and choosing the smaller or
//    bigger elements and adding it accordingly in left or right array
// 3. and we need to repeat the logic independent for right array and left array recursively
// 4. trying to concat the left array, pivot, and right array.
// 5. Base condition for this recursion function is to have only a single element in array




// const quickSort = (arr) => {
//     if (arr.length < 2) {
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []

//     for (let i = 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return quickSort(left).concat(pivot, quickSort(right))
// }

// const res = quickSort([9, 2, 3, 1, 4, 2, 12, 43, 2, 9])

// console.log(res, ' quick Sort')

// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     let pivot = arr[0];
//     let new_array = [[], []];
//     for (let i = 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             new_array[0].push(arr[i]);
//         } else {
//             new_array[1].push(arr[i]);
//         }
//     }
//     return quickSort(new_array[0]).concat(pivot, quickSort(new_array[1]));
// }
// const arr = [5, 1, 3, 9, 32, 7];
// console.log(quickSort(arr));




// MERGE SORT

// [4, 8, 7, 2, 11, 1, 3]




// const merge = (left, right) => {
//     const arr = []

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             arr.push(left.shift())
//         } else {
//             arr.push(right.shift())
//         }
//     }
//     return [...arr, ...left, ...right]
// }


// // console.log(merge([1, 3, 5, 90], [2, 4, 6, 19, 20, 35]))

// const mergeSort = (arr) => {
//     if (arr.length < 2) {
//         return arr
//     }

//     const left = arr.splice(0, arr.length / 2)

//     return merge(mergeSort(left), mergeSort(arr))
// }


// console.log(mergeSort([90, 6, 2, 20, 4, 1, 19]))


//1.
// mergeSort([90, 6, 2, 20, 4, 1, 19])
// global()

//2.
//merge()
//mergeSort()
//global()

// mergeSort([left])
// mergeSort([right])
