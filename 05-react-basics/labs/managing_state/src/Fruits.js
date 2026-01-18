function Fruits({ fruits }) {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.fruitName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
