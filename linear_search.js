const numbers = [45, 1, 2, 54, 69, 54, 87, 12, 32, 42];

function linear_search(array, target) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === target) {
            return i;
        }
    }
    return -1;
}

const index = linear_search(numbers, 12);
console.log(index)