import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  const fruits = [
    { fruitName: "apple", id: 1 },
    { fruitName: "banana", id: 2 },
    { fruitName: "orange", id: 3 }
  ];

  return (
    <div>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;
