function DessertsList(props) {
  const { data } = props;

  const filteredAndSortedDesserts = data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories);

  return (
    <ul>
      {filteredAndSortedDesserts.map((dessert) => (
        <li key={dessert.name}>
          {dessert.name} - {dessert.calories} cal
        </li>
      ))}
    </ul>
  );
}

export default DessertsList;
