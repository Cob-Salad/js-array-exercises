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

