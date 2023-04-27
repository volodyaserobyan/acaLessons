


// let arr = [1, 2, " string", true, { a: 1 }, [22]]

// console.log(arr[arr.length - 1])


// console.log(Array.from({
//     key: "value",
//     key1: 'value1'
// }))

// console.log(instance, ' int')

// const arr = [1, 2, 3]
// const arr1 = [...arr]
// const arr1 = [4, 5, 6]

// const arr2 = [...arr, ...arr1]

// console.log(arr2)

// Array.prototype.myMap = function (cb) {
//     // Write your code here
//     let result = []
//     for (let i = 0; i < this.length; i++) {
//         result.push(cb(this[i], i, this))
//     }
//     return result
// }

// const arr = [1, 2, 3]

// const arr1 = arr.map(function (item) {
//     return item * 2
// })

// const arr2 = arr.myMap(function (item) {
//     return item * 2
// })

// console.log(arr1, arr2)


// let arrr1 = [1, 2, 3];
// // let arrr2 = [];
// arrr1.forEach((el) => {
//     return el + 1
// });
// console.log(arrr1, ' aa');

// Array.prototype.myMap = function (cb) { 
//     let x = [] 
//     for(let i = 0; i < this.length; i++) { 
//         x.push(cb(this[i], i, this ) ) 
//     } 
//     return x 
// } 
// let arr = [ 1, 2, 3, 4 ]   

// arr.myMap(  ) 



// const obj = {
//     name: 'Volodya',
//     foo: function() {

//     }
// }

1. //Function that accepts callback as an argument
2. // Callback accepts 3 arguments, item, index, and array
3. // It should always return new array without mutating the original array



// const array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array.copyWithin(0, 3, 6));

// const array1 = ['f', 'a', 'b', 'c', ' p'];

// const iterator1 = array1.entries();
// console.log(iterator1)
// console.log(iterator1.next().value)
// console.log(iterator1.next().value)
// console.log(iterator1.next().value)
// console.log(iterator1.next().value)

// const arr1 = [1, 2, 3, 4, 7]

// const isSmallFive = arr1.some(function (value) {
//     return value < 5
// })

// console.log(isSmallFive)

// const array1 = [1, 2, 3, 4, 7, 'aa', 8, 6];

// // fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));



// const words = [10, 2, 3, 7];

// const result = words.filter(function (item) {
//     return item > 6
// });

// console.log(result, ' res')

// const arr = [1, 2, 3]
// arr.forEach(element => {
//     return
// });

// console.log(arr, ' arr1')

// const arr = [2, 3, 1, 5, 4, 9, 8, 7, 5];
// const result = arr.filter(function (item, index) {
//     if (item > arr[index + 1] && item > arr[index - 1]) {
//         return item
//     }
// })
// console.log(result, ' res')

// function a() {
//     console.log(i);
// }

// function b() {
//     const i = 1;
//     a();
// }
// b();

// const i = 0;

// function a() {
//     const arr = Object.values(arguments)
//     console.log(arr, ' arg')
// }

// a(1, 2)

// const a = {
//     name: "Volodya",
//     sayHi: () => {
//         console.log(this, ' barev')
//     }
// }

// console.log(a.sayHi())

// function Person() {
//     this.name = 'Jack',
//         this.age = 25,
//         this.sayName = function () {

//             // this is accessible
//             console.log(this.age);

//             function innerFunc() {

//                 // this refers to the global object
//                 console.log(this.age);
//                 console.log(this);
//             }

//             innerFunc();

//         }
// }

// let x = new Person();
// x.sayName();

// const a = {
//     name: "Jack",
//     age: 25,
//     sayName: function () {
//         console.log(this.age)

//         const innerFunc = () => {
//             console.log(this.age)
//             console.log(this)
//         }
//         innerFunc()
//     }
// }

// a.sayName()

// try {
//     let a = undefinedVariable
// } catch (e) {
//     console.log(e instanceof ReferenceError)
//     console.log(e.message)
//     console.log(e.name)
// }

// try {
//     eval('hoo bar');
// } catch (e) {
//     console.error(e instanceof SyntaxError);
//     console.error(e.message);
//     console.error(e.name);
//     console.error(e.fileName);
//     console.error(e.lineNumber);
//     console.error(e.columnNumber);
//     console.error(e.stack);
// }

// try {
//     throw new SyntaxError('Hello');
// } catch (e) {
//     console.error(e instanceof SyntaxError);
//     console.error(e.message);
//     console.error(e.name);
// }

// try {
//     null.f()
// } catch (e) {
//     console.log(e instanceof TypeError)
//     console.log(e.message)
//     console.log(e.name)
// }

// function User() {
//     this.name = 'Bob';
// }

// var user1 = new User();
// var user2 = new User();
// console.log(user1)

// function intersection(arr1, arr2) {
//     let resultArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) != -1) resultArray.push(arr1[i]);
//     }
//     return resultArray;
// }

// console.log(intersection(['a', 'b', 'c'], ['a', 'b', 'c', 'd']));
// console.log(intersection(['a', 'b', 'c'], []));
// console.log(intersection(['a', 'b', 'c', 2], [1, 2, 4]));


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// class Dog extends Animal {
//     constructor(name) {
//         super(name); // call the super class constructor and pass in the name parameter
//     }

//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// const d = new Dog('Mitzie');
// console.log(d)

// class fish {
//     constructor(habitat, length) {
//         this.habitat = habitat
//         this.length = length
//     }
// }

// class trout extends fish {
//     constructor(habitat, length, variety) {
//         super()
//         this.variety = variety
//     }
// }

// const a = new trout('a', 5, ' barev')

// console.log(a)
// const v = document.getElementById('vernagir')
// const block = document.getElementById('block')
// class Cart {
//     constructor(a, b, m, t) {
//         this.a = a
//         this.b = b
//         this.m = m
//         this.t = t
//     }

//     vernagir() {
//         v.innerHTML = this.a
//     }
//     prnt() {
//         console.log(this.a, this.b, this.m, this.t)
//         block.innerHTML = this.a + ' ' + ' ' + this.b + " " + this.m + " " + this.t
//     }
// }

// class P1 extends Cart {
//     constructor(a, b, m, t) {
//         super(a, b, m, t)
//     }
// }

// let a1 = new P1('anun', 'azganun', 'hayranun', 'tariq')
// a1.vernagir()
// a1.prnt()

// const myPromise = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     reject('rejected');
//     // }, 300);

//     setTimeout(() => {
//         if (false) {
//             resolve('this is the eventual value the promise will return');
//         } else {
//             reject('reject')
//         }
//     }, 300);
// });

// // console.log();
// myPromise.catch(i => console.log(i))

// function f() {
//     return new Promise((rs, rj) => {
//         rj('ds')
//     })
// }
// let prom = f()
// prom.then(function (rsult) {
//     console.log(rsult)
// }).catch(function (x) {
//     console.log(x, ' bareeeeeeeeev')
// })





// (function a() {
//     var b = 5
//     console.log('aaa')
// })()


// function a() {
//     console.log(i)
// }

// function b() {
//     const i = 1
//     function a() {
//         console.log(i)
//     }
//     a()
// }

// const i = 0
// b()


// const i = 0
// function a() {
//     console.log(i)
// }
// a()


// function greetings() {
//     let message = 'hi'

//     function sayHi() {
//         console.log(message)
//     }

//     sayHi()
// }

// greetings()


// function greetings() {
//     let message = 'hi'
//     function sayHi() {
//         console.log(message)
//     }
//     return sayHi
// }

// const a = greetings()

// a()


// function calc() {
//     let a = 0
//     function inner() {
//         a++
//         console.log(a)
//     }
//     return inner
// }

// const a = calc()
// a()
// a()
// a()
// a()

// function func1() {
//     console.log(arguments)
//     // arguments
// }

// func1(1, 2, 3, 4)



// function sum() {
//     // Write your code here
//     return [...arguments].reduce(function (sum, cur) {
//         return sum + cur
//     }, 0)
// }


// const result = sum(1, 2, 3, 4, 5, 6, 7, 10)
// console.log(result)

// const materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];


// const wordLength = materials.map(material => material.length)
// console.log(wordLength)



// function func(a) {
//     return a
// }

// const foo = (a) => ({ a })

// console.log(foo(3))

// yield