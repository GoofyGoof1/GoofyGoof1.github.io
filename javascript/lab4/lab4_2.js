const book1 = {
    title: "Book 1",
    price: 10,
    show: function() {
    console.log("Title:", this.title);
    console.log("Price:", this.price);
    }
    };
    
    function showBook() {
    console.log("Title:", this.title);
    console.log("Price:", this.price);
    }
    
    const book2 = {
    title: "Book 2",
    price: 15,
    show: showBook
    };
    
    book1.show();
    book2.show();