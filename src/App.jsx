import { useState } from "react";
import "./App.css";

import { dummyData } from "./assets/dummyData";
import CardComponent from "./components/CardComponent";
import {  app } from "./components/ComponentStyles";
import ChangeTextButton from "./components/CustomButton";

function App() {
  const [data, setData] = useState(dummyData);
  const [totalItemNumber, setTotalItemNumber] = useState(0);
  const [totalItemAmount, setTotalItemAmount] = useState(0);

  return (
    <div style={app}>
      {data.map((items, index) => (
        <CardComponent key={index} items={items} />
      ))}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <ChangeTextButton buttonText="NGN" />
          <ChangeTextButton buttonText={"USD"} />
        </div>
        <div>
          <h2>cart amount: {totalItemNumber} </h2>
          <h2>total price: {totalItemAmount} </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
