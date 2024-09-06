import React, { useState } from "react";
import "../../styles/form.css";

const Form = ({ setProducts }) => {
  const [inputText, setInputText] = useState("");
  const [amount, setAmount] = useState();
  const [price, setPrice] = useState();

  const changeText = (e) => {
    setInputText(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const addProduct = () => {
    setProducts((prev) => [
      ...prev,
      { name: inputText, amount: amount, price: price },
    ]);
    setInputText("");
    setAmount(0);
    setPrice(0);
  };

  return (
    <div className="form-container">
      <div className="input-container">
        <label>Product's name</label>
        <input
          value={inputText}
          type="text"
          placeholder="nazwa produktu"
          onChange={changeText}
        />
      </div>
      <div className="">
        <label>Amount</label>
        <input
          value={amount}
          type="number"
          placeholder="ilość"
          onChange={changeAmount}
        />
      </div>
      <div className="">
        <label>Price in PLN</label>
        <input
          value={price}
          type="number"
          placeholder="cena"
          onChange={changePrice}
        />
      </div>

      <button onClick={addProduct}>Dodaj produkt</button>
    </div>
  );
};

export default Form;
