let library = {
  books: ["firstBook", "secondBook", "thirdBook"],
  addBook(bookName) {
    this.books.push(bookName);
    console.log(this.books);
  },
  removeBook(bookName) {
    this.books = this.books.filter((book) => book != bookName);
  },
};
library.addBook("fourthBook");
console.log(library.books);
library.removeBook("secondBook");
console.log(library.books);
