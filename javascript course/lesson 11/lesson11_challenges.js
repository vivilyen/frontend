console.log("l-m;");

let array1 = [-2, 3, -5, 7, 10];
const array2 = [];
const array3 = [3];

function minMax (array) {
    let min = null;
    let max = null;
    if (array.length > 0) {
        min = array[0];
        max = array[0];
    }
    for (let i = 1; i < array.length; i++) {
        array[i] < min ? min = array[i] : undefined;
        array[i] > max ? max = array[i] : undefined;
    } 
    console.log(`min: ${min}, max: ${max}`);
}

minMax(array3);

console.log("n;");

array1 = ['apple', 'grape', 'apple', 'apple', 'grape', 'lime'];

/*function countWords (array) {
    let uniques = [array[0]];
    let quantity = []
    let counter = 1;
    for (let i = 1; i < array.length; i++) {
        if (array[i] === uniques[0]) {
            counter++;
        } else if (array[i] != uniques[0]) {
            if (uniques.length < 2) {
                uniques.push(array[i]);
            } else {
                let same = false;
                for (let j = 0; j < uniques.length; j++) {
                    if (array[i] === uniques[j]) {
                        same = true;
                    }
                }
                if (same === false) {
                    uniques.push(array[i]);
                }
            }
        }
    }
    quantity.push(counter);
    counter=0;
    for (let i = 1; i < uniques.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (uniques[i] === array[j]) {
                counter++;
            }
        }
        quantity.push(counter);
        counter=0;
    }

    for (let i = 0; i < uniques.length; i++) {
        console.log(`${uniques[i]}: ${quantity[i]}`);
    }
}
*/



function countWords (array) {
    let fruits = [];
    for (let i = 0; i < array.length; i++) {
        let fruit = {
            name: array[i],
            quantity: 0,
        };
        let same = false;
        for (let j = 0; j < fruits.length; j++) {
            if (fruits[j].name === fruit.name) {
                same = true;
                break;
            }
        }
        !same ? fruits.push(fruit) : undefined;
    }
    for (let i = 0; i < fruits.length; i++) {
        for (let j = 0; j < array.length; j++) {
            array[j] === fruits[i].name ? fruits[i].quantity += 1 : undefined;
        }
    }
    console.log(fruits);  
}
    
countWords(array1);