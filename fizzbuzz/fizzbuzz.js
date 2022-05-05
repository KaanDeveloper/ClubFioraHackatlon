const fizzbuzz = (n) => {
    //n is an array
    n.forEach(element => {
        if(element % 15 === 0) {
            console.log(`${element} is fizzbuzz.`)
        }
        else if(element % 3 === 0) {
            console.log(`${element} is fizz.`)
        }
        else if(element % 5 === 0) {
            console.log(`${element} is buzz.`)
        }
        else {
            console.log(element.toString())
        }
    });
}

const array = [3, 8, 9, 15, 30, 66, 77, 100]

fizzbuzz(array)