import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup variables
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41i87iHnnJL._SX389_BO1,204,203,200_.jpg",
    title: "The Boy, The Mole, The Fox and The Horse",
    author: "Charlie Mackesy",
  },
  {
    id: 2,
    img:
      "https://m.media-amazon.com/images/I/91vqStlsFFL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Guinness World Records 2021",
    author: "Guinness World Records",
  },
  {
    id: 3,
    img:
    'https://images-na.ssl-images-amazon.com/images/I/51ql1eQaVvL._SX321_BO1,204,203,200_.jpg',
    title: "A Game of Thrones (A Song of Ice and Fire)",
    author: "George R.R. Martin",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
