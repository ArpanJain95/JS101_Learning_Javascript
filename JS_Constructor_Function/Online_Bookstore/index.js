function Author(name, birthYear, nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function Book(title, author, genre, price){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: Rs.${this.price}/-`);
};

const author1 = new Author("James Clear", 1985, "American");
const book1 = new Book("Atomic Habits", author1, "Self-Help", 159);
const author2 = new Author("Chethan Bhagat", 1974, "Indian");
const book2 = new Book("Revolution 2020", author2, "Novel, Romance, Political", 149);

console.log("Bookstore Inventory:");
console.log("--------------------");
book1.getBookInfo();
console.log("--------------------");
book2.getBookInfo();