function isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

let book1 = {};

  
let book2 = {
    title: 'Название книги 2',
    pubYear: 2019,
    price: 150,
  };

console.log(isEmpty(book1)); // true
console.log(isEmpty(book2)); // false