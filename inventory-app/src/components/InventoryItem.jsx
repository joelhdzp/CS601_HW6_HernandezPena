/* InventoryItem component renders individual product information:
 * SKU - number (key)
 * Name - string
 * Quantity - number
 * Price - float
*/
function InventoryItem({ item }) {
  return (
    <div className="inventory-item">
      <p><strong>SKU:</strong> {item.sku}</p>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Quantity:</strong> {item.qty}</p>
      <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
    </div>
  )
}

export default InventoryItem;
