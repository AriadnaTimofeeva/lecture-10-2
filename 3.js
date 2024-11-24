/*
Задание 3:
Создайте свою функцию, которая принимает 2 параметра:
1 - одномерный массив
2 - функцию для изменения элементов массива
Условие: изначальный массив, переданный в функцию не должен быть изменен!
*/



function func1(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result;
}


const arr = [1, 2, 3, 4, 5];
const callback = (item, index, array) => item * 2;


const result = func1(arr, callback);
console.log(`Изначальный массив: ${arr}`); 
console.log(`Измененный массив: ${result}`); 
