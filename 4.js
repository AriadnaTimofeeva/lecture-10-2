/*
Задание 4:
Создать функцию которая позволит выводить сообщения
в консоль для разных уровней логирования.
*/



function createLogger(prefix) {
    return function(message) {
        console.log(`${prefix}${message}`);
    };
}


const errorLog = createLogger('ERROR: ');
errorLog('Пофикси меня!'); // ERROR: Пофикси меня!

const debugLog = createLogger('DEBUG: ');
debugLog('Важная отладочная информация!'); // DEBUG: Важная отладочная информация!

const infoLog = createLogger('INFO: ');
infoLog('Это информационное сообщение.'); // INFO: Это информационное сообщение.
