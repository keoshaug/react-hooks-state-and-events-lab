import React, {useState} from "react";

function Item({name, category}) {
  const [ itemInCart, setItemInCart ] = useState(false)
  const handleClick = () => {
    setItemInCart(prev => !prev)
  }
  


  return (
    <li className={itemInCart ? 'in-cart' : ''} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={itemInCart ? "remove" : "add"}>{itemInCart ? "Remove from Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
