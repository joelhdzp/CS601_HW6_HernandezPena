/* InventoryItem component renders individual product information:
 * SKU:number
 * Name:string
 * Quantity:number
 * Price:float
*/
function InventoryItem({ sku, name, qty, price }) {
  return (
    <div className="inventory-item">
      <p><strong>SKU:</strong> {sku}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Quantity:</strong> {qty}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
    </div>
  )
}

export default InventoryItem;