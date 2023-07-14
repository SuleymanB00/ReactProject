import React, { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 2, 12),
    description: "Fridge",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2022, 11, 25),
    description: "MacBook",
    amount: 1255.0,
  },
  {
    id: "c3",
    date: new Date(2022, 8, 1),
    description: "Iphone",
    amount: 1000,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
