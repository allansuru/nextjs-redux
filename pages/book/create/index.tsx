import React from "react";
import withAuth from "../../../core/components/WithAuth";
import BookCreate from "../../../modules/book/BookCreate";

const CreateBookPage = () => {
  return (
    <div className="container">
      <BookCreate /> {/* Renderize o componente BookCreate aqui */}
    </div>
  );
};

export default withAuth(CreateBookPage);
