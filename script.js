function list(){
    return Array.prototype.slice.call(arguments);
}

let list1 = list(1,2,3);
console.log(list1);

// Создаём функцию с предустановленным ведущим аргументом
let thirtysevenList = list.bind(undefined, 37);

let list2 = thirtysevenList();
let list3 = thirtysevenList(1,2,3);

console.log(list2, list3);

const array = [5,3,-1,0,2,1,4];

function bubbleSort(array){
    const n = array.length;
    for( let i = 0; i < n -1; i++){
        for (let j = 0; j < n - 1 - i; j++){
            if( array[j+1] < array[j]){
                let swap = array[j+1];
                array[j+1] = array[j];
                array[j] = swap;
            }
        }
    }
    return array;
}

console.log(bubbleSort(array));

console.log(Array.isArray(array),array.sort( (a,b) => a - b )); // if(a>b) return 1; else return -1
console.log(array.reduce((sum, current) => sum + current));

function palindrom(word){
    return word === word.split('').reverse().join("");
}

console.log(palindrom("avavasf"));

const obj1 = {
    a: 4,
    b: 5,
    c: {
        d: 6
    }
};

const obj2 = JSON.parse(JSON.stringify(obj1));

const obj3 = Object.assign({}, obj1);
