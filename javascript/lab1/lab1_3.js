while (true) {
    var userInput = prompt("Введите число больше 100:");

    // Проверка на отмену (нажатие кнопки Cancel)
    if (userInput === null) {
        alert("Вы отменили ввод.");
        break; // Выход из цикла при отмене
    }

    var number = parseFloat(userInput);

    // Проверка, является ли введенное значение числом и больше ли оно 100
    if (!isNaN(number) && number > 100) {
        alert("Вы ввели число больше 100: " + number);
        break; // Выход из цикла при вводе числа больше 100
    } else {
        alert("Пожалуйста, введите число, которое больше 100.");
    }
}