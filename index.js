function loop1() {
    let fruits = ["apple", "banana", "cherry"]
    for (let i = 0; i < fruits.length; i++){
        console.log(fruits[i]);
    }
}

const loop2 = () => {
    let array = [];
    for (let i = 0; i < 3; i++){
        item = prompt("add item: ");
        array.push(item);
    }
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

const loop3 = () => {
    let array = prompt("give three items separated by commas: ").split(",")
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
    

}

const map1 = () => {
    const numString = prompt("Enter comma separated numbers: ");
    const numArrayAsStrings = numString.split(",");

    function convertToNumber(str) {
        return parseInt(str)
    }

    const numArray = numArrayAsStrings.map(convertToNumber);

    console.log(numArray);

    // // Version 1
    // const numArray = [];
    // for (let i = 0; i < numArrayAsStrings.length; i++) {
    // const s = numArrayAsStrings[i];
    // const num = Number(s);
    // numArray.push(num);
    // }

    // // Version 2
    // const numArray = numArrayAsStrings.map((s) => {
    // return Number(s);
    // });

    // // Version 3
    // function convertToNumber(str) {
    // return Number(str);
    // }
    // const numArray = numArrayAsStrings.map(convertToNumber);

    // // Version 4
    // const numArray = numArrayAsStrings.map(Number);

    // // for (let i = 0; i < numArrayAsStrings.length; i++){
    //     let num = parseInt(numArrayAsStrings[i])
    //     numArray.push(num)
    // }

}

const map2 = () => {
    const numbers = [1,2,3,4,5];
    const doubleNums = (array) =>{
        return array * 2
    }
    const doubled = numbers.map(doubleNums)
    console.log(doubled)
}


const map3 = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    const changed = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0){
            changed.push(numbers[i] * 2)
        }else{
            changed.push(numbers[i] * 3)
        }
    }
    console.log(changed)    
}

const testNumberFilter = () => {
    const nums = [1, 3, 2, 34, 7, 5, 10];
    let filteredNumbers = numberFilterFor(nums);
    console.log(filteredNumbers);
    filteredNumbers = numberFilterWhile(nums);
    console.log(filteredNumbers);
    filteredNumbers = numberFilterFilter(nums);
    console.log(filteredNumbers);
}



const numberFilterFor = (numbers) => {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0 && numbers[i] <= 5){
            result.push(numbers[i])
        }
    }
    return result;
}


const numberFilterWhile = (numbers) => {
    const result = [];
    let i = 0
    while (i < numbers.length) {
        if (numbers[i] >= 0 && numbers[i] <= 5){
            result.push(numbers[i])
        }
        i++ 
    }
    return result;
}

const checkNumber = (numbers) => {
    return numbers >= 0 && numbers <=5;
}

const numberFilterFilter = (numbers) => {
    const result = numbers.filter(checkNumber);
    return result;
}


const oddFilter = () => {
    const input = prompt("input an array of numbers separated by commas: (1,2,3,4...)")
    const inputArray = input.split(",")
    const oddArray = []
    for (let i = 0; i < inputArray.length; i++) {
        const num = Number(inputArray[i])
        if (num % 2 !== 0){
            oddArray.push(num)
        }
    }
    for (let i = 0; i < oddArray.length; i++){
        console.log(oddArray[i])
    }
}


const arrayFilter = (filterArray) => {
    return filterArray >= 8 && filterArray <= 15;
}

const filterModifyArray = () => {
    const setForArray = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let i = 0
    while (i < setForArray.length){
        if (setForArray[i] < 8 || setForArray[i] > 15){
            setForArray.splice(i, 1)

        }else{
            i++
        }
    }
    console.log(setForArray)
    console.log()
}
const addArray = [1,2,4,5,6,7,10]

const addFromArray = (addArray) => {
    
    let total = 0
    for (let i = 0; i < addArray.length; i++){
        total = total + addArray[i];
        console.log(total);
    }
    return total;
}



