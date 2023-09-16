import React,  { useState }  from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [ isDarkMode, setIsDarkMode ] = useState(false);
  const appClass = isDarkMode ? "App dark" : "App light"

  const handleClick = () => setIsDarkMode((prev) => !prev)

  return (
    <div className = {appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{ isDarkMode ? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={itemData}/>

    </div>
  );
}

export default App;
