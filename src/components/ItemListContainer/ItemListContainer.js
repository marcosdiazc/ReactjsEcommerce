import ItemCount from "./ItemCount";
import getData from "../../Services/getData";
import { useEffect, useState } from "react";



export const ItemListContainer = ({greeting}) => {
  




  const[products, setProducts] = useState([]);
  console.log("Estos son los productos",products);
  
  useEffect(() => {
    getData
      .then((res) => console.log("la respuesta de la promesa", res));

  })
  return (
    //lo que queremos que se renderice
    <div>
    <h3>{greeting}</h3>
    <ItemCount/>
    </div>
  );
};

export default ItemListContainer;
