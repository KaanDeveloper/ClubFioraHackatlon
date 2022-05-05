const fibonacci = (n) => {
    const fibonacciArray = []

    fibonacciArray[0] = 1
    fibonacciArray[1] = 1

    for(let i = 2; i < n; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2]
    }

    return fibonacciArray
}

const fibonacciArray = fibonacci(10)

console.log(fibonacciArray)