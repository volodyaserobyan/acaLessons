
// function foo(b) {
//     let a = 10
//     return a + b + 11
// }

// function bar(x) {
//     let y = 3
//     return foo(x * y)
// }

// const baz = bar(7)

// console.log(baz)



// let flag = true

// const promise = new Promise((resolve, reject) => {
//     if (flag) {
//         resolve(5)
//     } else {
//         reject('Rejected due to flag property')
//     }
// })

// // console.log(promise)


// promise.then(res => {
//     console.log(res, ' res')
// }).then(res => {
//     console.log(res, ' res 1')
// }).catch(err => {
//     console.log(err, ' err')
// })



// const finded = true
// const interviwerFriendPromise = new Promise((resolve, reject) => {
//     if (finded) {
//         // setTimeout(() => {
//         resolve('Succefull, I found your resume')
//         // }, 3000);
//     } else {
//         reject('Sorry, I couldn’t find your résumé because the key to your safe is missing.')
//     }
// })


// interviwerFriendPromise.then(res => {
//     console.log(res)
// })

// function foo() {
//     console.log('Continued...')
// }

// foo()

// console.log('barev')



// let done = true
// const isItDoneYet = new Promise((res, rej) => {
//     if (done) {
//         const workdDone = 'Here is the thing I built'
//         res(workdDone)
//     } else {
//         rej(`Still working on something else`)
//     }
// })

// (res, rej) => {
//     if (done) {
//         const workdDone = 'Here is the thing I built'
//         res(workdDone)
//     } else {
//         const why = 'Still working on somehting else'
//         rej(why)
//     }
// }
// const checkIfItIsDone = () => {
//     isItDoneYet.then(res => {
//         console.log(res, 'res')
//     }).catch(err => {
//         console.log(err)
//     })
// }


// checkIfItIsDone()



// Create a function which is getting some url as an argument and makes an API call to that endpoint

// Create a decorator function which gets an callback and will count how much time does it
// cost to execute that callback

// console.time('fn')
//  cb()
// console.timeEnd('fn')


// let requestData = (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data, ' data')
//         })
// }

// const dataResponseTime = (fn) => {
//     return (url) => {
//         console.time('fn')
//         fn(url)
//         console.timeEnd('fn')
//     }
// }

// requestData = dataResponseTime(requestData)
// requestData('https://jsonplaceholder.typicode.com/posts')


// let sum = (...args) => {
//     return [...args].reduce((a, b) => a + b)
// }

// const counter = (cb) => {
//     let count = 0
//     return (...args) => {
//         console.log(`the sum funciton was called ${++count} time`)
//         return cb(...args)
//     }
// }

// sum = counter(sum)

// console.log(sum(3, 2, 1))
// console.log(sum(3, 2, 1))
// console.log(sum(3, 2, 1))




// async function f() {
//     return 1
// }

// f().then(console.log)



// await 5


// async function f() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('done')
//         }, 1000);
//     })
//     // promise.then(res => {
//     //     console.log(res)
//     //     return res + 1
//     // }).then(data => console.log(data))

//     // console.log('do something else')

//     const data = await promise
//     console.log(data)
//     console.log('do something else')

// }

// f()



// function loadJson(url) {
//     return fetch(url).then(response => response.json())
// }

// function loadGitHubUser(name) {
//     return loadJson(`......?${name}`)
// }


// function showAvatar(githubUser) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(githubUser)
//         }, 1000);
//     })
// }

// loadJson('.......')
//     .then(res => loadGitHubUser(res?.name)
//         .then(githubUser => showAvatar(githubUser).then(data => console.log(`Finish, ${data}`))))


// async function showAvatar() {
//     const response = await fetch('url')
//     const user = response.json()

//     const githubResponse = await fetch(`url..../${user}`)
//     const githubUser = await githubResponse.json()

//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(githubUser)
//         }, 1000);
//     })

//     return githubUser
// }

// showAvatar()


// let requestData = (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data, ' data')
//         })
// }


const requestData = async (url) => {
    try {
        const response = await fetch(url)
        const data = response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

async function test() {
    const data = await requestData('https://jsonplaceholder.typicode.com/posts')
    console.log(data)
}

test()