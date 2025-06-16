import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import InventoryItem from "./InventoryItem.jsx";

// Displays the full inventory list, fetched from inventory.json
function InventoryList() {
  const [items, setItems] = useState([]);   // All items in inventory

  useEffect(() => {
    // Fetch inventory data on mount
    fetch("/inventory.json")
      .then((result) => result.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Failed to fetch inventory:", error)
    );
  }, []);

  return (
    <div>
      <div className="list-title">
        <h2>Inventory</h2>
      </div>
      <div className="inventory-list">
        {/* Wrap each InventoryItem with Link for detail page navigation */}
        {items.map(item => (
          <Link
          key={item.sku}
          to={`/product/${item.sku}`}
          style={{ textDecoration: 'none', color: 'inherit' }}>
            {/* Pass props to InventoryItem */}
            <InventoryItem
            key={item.sku} 
            sku={item.sku} 
            name={item.name} 
            qty={item.qty} 
            price={item.price} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default InventoryList;