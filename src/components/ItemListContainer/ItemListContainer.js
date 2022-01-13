export const ItemListContainer = ({greeting}) => {
  
  return (
    //lo que queremos que se renderice
    <div>
    <h1>Soy el ItemListContainer</h1>
    <h2>Esto es una lista de productos</h2>
    <h3>{greeting}</h3>
    </div>
  );
};

export default ItemListContainer;
