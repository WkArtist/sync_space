
// interface Condition {
//     (n: number): boolean
// }

// function sum(numbers: number[], callBack: Condition) {
//     let s = 0;
//     numbers.forEach(n => {
//         if (callBack(n)) {
//             s += n;
//         }
//     })
//     return s;
// }

// const res = sum([1, 2, 3, 4, 5, 6], (n) => {
//     return n % 2 !== 0
// })

// console.log(res)

interface A {
    T1: string
}

interface B {
    T2: number
}

interface C extends A, B {
    T3: boolean
}