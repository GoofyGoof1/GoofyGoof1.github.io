let book1 = {};

book1.title = 'Название книги 1';
book1.pubYear = 2020;
book1.price = 100;


let book2 = {
  title: 'Название книги 2',
  pubYear: 2019,
  price: 150,
};

console.log("Свойства объекта book1:");
for (let prop in book1) {
  console.log(prop + ": " + book1[prop]);
}

console.log("Свойства объекта book2:");
for (let prop in book2) {
  console.log(prop + ": " + book2[prop]);
}


    
    
    
    
    
    