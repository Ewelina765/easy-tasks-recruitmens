import React, { useState } from "react";
import ShowProducts from "./ShowProducts";
import Form from "./Form";

const ItemTask = () => {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Form setProducts={setProducts} />
      <ShowProducts products={products} setProducts={setProducts} />
    </>
  );
};

export default ItemTask;
