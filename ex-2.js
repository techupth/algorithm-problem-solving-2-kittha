function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = books.length - 1;
  let index = -1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (books[middle].title === searchTitle) {
      index = middle;
      return index;
    } else if (books[middle].title < searchTitle) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return index;
}

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

const searchBook = "Gone with the Wind";
console.log(findBookIndex(books, searchBook));
console.log(findBookIndex(books, "The Master Mind"));
