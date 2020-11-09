import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup variables
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/41i87iHnnJL._SX389_BO1,204,203,200_.jpg",
  title: "The Boy, The Mole, The Fox and The Horse",
  author: "Charlie Mackesy",
};

const secondBook = {
  img:
    "https://m.media-amazon.com/images/I/91vqStlsFFL._AC_UY327_FMwebp_QL65_.jpg",
  title: "Guinness World Records 2021",
  author: "Guinness World Records",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
