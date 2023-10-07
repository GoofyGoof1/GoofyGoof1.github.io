// Запрос значения num у пользователя
var num = parseInt(prompt("Введите целочисленное значение num:"));

// Проверка с использованием if...else
if (num >= 0) {
    if (num === 0) {
        alert("На ветке сидит 0 ворон");
    } else if (num === 1) {
        alert("На ветке сидит 1 ворона");
    } else if (num === 2 || num === 3 || num === 4) {
        alert("На ветке сидит " + num + " вороны");
    } else {
        alert("На ветке сидит " + num + " ворон");
    }
} else {
    alert("Введите неотрицательное целое число");
}

// Проверка с использованием switch
switch (num) {
    case 0:
        alert("На ветке сидит 0 ворон");
        break;
    case 1:
        alert("На ветке сидит 1 ворона");
        break;
    case 2:
    case 3:
    case 4:
        alert("На ветке сидит " + num + " вороны");
        break;
    default:
        if (num >= 0) {
            alert("На ветке сидит " + num + " ворон");
        } else {
            alert("Введите неотрицательное целое число");
        }
        break;
}