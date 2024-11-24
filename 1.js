/*
Задание 1:
Напишите функцию через Function Expression, которая принимает строку
и возвращает эту строку с перевернутыми словами. 
При этом сами слова должны оставаться в оригинальном порядке, 
а символы внутри каждого слова — переворачиваться.
*/



const reverseWords = function (str) {
    // разделяем строку, затем переворачиваем слова в ней и объеденяем их назад в строку:
    return str.split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
  };
  
const reversedWords = reverseWords('Hello World');
console.log(reversedWords); 

   
   