function drawTable(rows) {
  var num = parseInt(prompt("Введите целочисленное значение num:"));
    var animals = ['dog', 'dog', 'dog', 'cat', 'cat', 'dog'];
  
    for (var i = 0; i < rows; i++) {
      var row = '';
      
      for (var j = 0; j < 6; j++) {
        var index = (j + i) % animals.length;
        row += animals[index] + '\t';
      }
      
      console.log(row);
    }
  }
  
  drawTable(num);