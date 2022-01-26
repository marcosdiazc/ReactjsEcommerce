import React, { useEffect, useState } from "react";
import "./itemList.css";
import Item from "./Item";


const ItemList = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  });
  return (
    <div className="d-flex flex-wrap">
      {products ? (
        products.map((product) => {
          return <Item key={product.id}product={product} />;
        })
      ) : (
        <h1> cargando productos...</h1>
      )}
    </div>
  );
};

export default ItemList;
