import "../../styles/showProducts.css";

const ShowProducts = ({ products, setProducts }) => {
  const handleDelete = (index) => {
    setProducts(products.filter((product, i) => i !== index));
  };

  const sum = products
    .map((product) => Number(product.amount)) 
    .reduce((acc, x) => acc + x, 0);

  return (
    <div className="products-container">
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <p>Name: {product.name}</p>
            <p>Amount: {product.amount}</p>
            <p>Price: {product.price}zł</p>
            <button onClick={() => handleDelete(index)}>Delete item</button>
          </li>
        ))}
      </ul>
      <div>Total amount of items: {sum} </div>
    </div>
  );
};

export default ShowProducts;
