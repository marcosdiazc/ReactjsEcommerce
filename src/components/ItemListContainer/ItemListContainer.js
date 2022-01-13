export const ItemListContainer = ({ color = "peru", text = "no tiene texto", onClick, greeting }) => {
    return (
      <h1 style={{ color }} onClick={onClick}>
        {text}
      </h1>
    );
  };