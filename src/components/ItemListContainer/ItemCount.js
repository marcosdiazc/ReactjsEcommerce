export const ItemCount = ({ count }) => {
  return (
    <div className='item-count'>
      <p>{count}</p>
      <button>+</button>
    </div>
  );
}