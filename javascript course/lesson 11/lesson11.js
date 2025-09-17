console.log("a;");

const nums = [10, 20, 30];
nums[nums.length-1] = 99;
console.log(nums);

console.log("b;");

const testArray = ['hi', 'hello', 'good'];

function getLastValue(array) {
    console.log(array[array.length - 1]);
}
getLastValue(testArray);

console.log("c;");

function arraySwap(array) {
    let temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1]=temp;
    console.log(array);
}

arraySwap(nums);

console.log("d;");

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

console.log("e;");

for (let i = 5; i >= 0; i--) {
    console.log(i);
}

console.log("f;");

let i = 0;

while (i <= 10) {
    console.log(i);
    i += 2;
}

i = 5;

while (i >= 0) {
    console.log(i);
    i--;
}

console.log("g;");

let newArray = [];
console.log(nums);

for(let i = 0; i < nums.length; i++) {
    newArray.push(nums[i]+=1);
}
console.log(newArray);

console.log("h;");

let testArray2 = [-2, -1, 0, 99];

function addOne(array) {
    for(let i = 0; i < array.length; i++) {
        array[i]++;
    }
    console.log(array);
}

addOne(testArray2);

console.log("i;");

testArray2 = [-2, -1, 0, 99];

function addNum (array, num) {
    for(let i = 0; i < array.length; i++) {
        array[i]+=num;
    }
    console.log(array);
}

addNum(testArray2, 3);

console.log("j;");

let testArray3 = [1, 1, 2];
let testArray4 = [1, 1, 3];
newArray=[];

function addArrays (array1, array2) {
    for(let i = 0; i < 3; i++) {
        let newNum = array1[i]+array2[i];
        newArray.push(newNum);
    }
    console.log(newArray);
}

addArrays(testArray3, testArray4);

console.log("k;");

testArray2 = [-2, -1, 0, 99];

function countPositive(array) {
    let counter = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            counter++;
        }
    }
    console.log(counter);
}

countPositive(testArray2);

console.log("o");

const words = ['hello', 'world', 'search', 'good', 'search'];

let k = 0;

while (true) {
    if (words[k] === 'search') {
        console.log(k);
        break;
    } else if (words[k] != 'search' && k === words.length-1) {
        console.log(-1);
        break;
    } else {
        k++;
    }
}

console.log("q");

function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return i;
        } else if (array[i] != word && i === array.length-1) {
            return -1;
        }
    }
}

console.log(findIndex(words, 'vivi'));
