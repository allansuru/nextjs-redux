import React from "react";
import BookCreate from "../../../modules/book/BookCreate";

const CreateBookPage = () => {
  return (
    <div className="container">
      <BookCreate /> {/* Renderize o componente BookCreate aqui */}
    </div>
  );
};

export default CreateBookPage;
