/*
Задание 2:
Создайте генератор arrayIterator, который принимает массив
и возвращает его элементы по одному на каждой итерации.
*/



function* arrayIterator(arr) {
    for (let i = 0; i < arr.length; i++) {
      yield arr[i];
    }
  }
  
const gen = arrayIterator(['apple', 'banana', 'cherry']);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done); 
  
  