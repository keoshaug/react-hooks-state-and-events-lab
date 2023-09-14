import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [items, setItems] =useState(itemData)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function toggleDarkMode () {
    setDarkMode(!darkMode)
  }

  function toggleInCart (id) {
    const newItems = [...items]
    setItems(newItems.map((item) => id === item.id ? {...item, inCart: !item.inCart} : item ))
  }

  return (
    <div className = {darkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{darkMode? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={items.filter((item) => selectedCategory === "All" || item.category === selectedCategory)} toggleInCart={toggleInCart} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    <section>
    Items in cart: {items.filter((item) => item.inCart).length}
    </section>
    </div>
  );
}

export default App;
