//12j
const multiply = (num, num2) => num * num2;

console.log(multiply(7, 10));

//12l

const countPositive = (array) => {
    let counter = 0;
    array.forEach(element => element > 0 ? counter++ : undefined);
    return counter;
};

console.log(countPositive([1,-3,5]));

//12m

const addNum = (array, num) => array.map(value => value * num);

console.log(addNum([1,2,3],2));

//12n-o

const list = ['egg', 'apple', 'egg', 'egg', 'ham'];

let counter = 0;

const removeEgg = array => 
    array.filter((value) => {
        if (value != 'egg') {
            return true;
        } else if (value === 'egg' && counter != 2) {
            counter++;
            return false;
        } else {
            return true;
        }
});

console.log(removeEgg(list));