export const Title = ({ color = "peru", text = "no tiene texto", onClick }) => {
  return (
    <h1 style={{ color }} onClick={onClick}>
      {text}
    </h1>
  );
};
