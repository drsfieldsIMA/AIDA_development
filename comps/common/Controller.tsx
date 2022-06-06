import { useState } from "react";

export const toppings = [
  {
    name: "Interior e.g. Bikes",
  },
  {
    name: "Textiles e.g. Clothes",
  },
  {
    name: "Training Equipment e.g. Bike",
  },
  {
    name: "Metals e.g. Frying Pans",
  },
  {
    name: "Stationary e.g Books",
  },
  {
    name: "Phones e.g. Electricals",
  },
  {
    name: "Other",
  }
];



export default function Controller() {
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <h3>Select Toppings</h3>
      <ul className="toppings-list">
        {toppings.map(({ name, id }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
