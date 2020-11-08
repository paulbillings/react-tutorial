import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/41i87iHnnJL._SX389_BO1,204,203,200_.jpg"
      alt="The boy, the mole, the fox and the horse"
    />
  );
};

const Title = () => {
  return <h1>The Boy, The Mole, The Fox and The Horse</h1>;
};

const Author = () => {
  return <h4>Charlie Mackesy</h4>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
