// last in first out => LIFO
class Stack {
    constructor() {
        this.stack = []
    }
    add(element) {
        this.stack.push(element);
    }
    remove() {
        return this.stack.pop();
    }
}

const plates = new Stack();
plates.add('Abur');
plates.add('Babul');
plates.add('Cabul');
plates.add('Dabul');
plates.add('Ebul');

console.log('add', plates.stack);

plates.remove();

console.log(plates.stack);