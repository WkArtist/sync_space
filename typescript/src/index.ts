//函数中使用泛型
function take<T>(arr: T[], n: number): T[] {
    if (n >= arr.length) {
        return arr;
    }
    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const newArr = take<number>([3, 4, 5, 6, 2, 1, 33], 2);
// console.log(newArr)

interface callback<T> { (n: T, i: number): boolean; }

function filter<T>(arr: T[], callback: callback<T>): T[] {
    const newArr: T[] = [];
    arr.forEach((n, i) => {
        if (callback(n, i)) {
            newArr.push(n);
        }
    })
    return newArr;
}

const arr = [1, 2, 3, 4, 5]
const res = filter(arr, n => n % 2 !== 0)
console.log(res)