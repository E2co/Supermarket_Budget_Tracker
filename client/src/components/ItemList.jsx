import ItemCard from "./ItemCard"
import "../styles/item-list.css"

export default function ItemList({ items, onRemoveItem }) {
  if (items.length === 0) {
    return (
      <div className="item-list empty">
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h3>No items yet</h3>
          <p>Add your first grocery item to get started!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="item-list">
      <h2>Items Added</h2>
      <div className="items-container">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} onRemove={onRemoveItem} />
        ))}
      </div>
    </div>
  )
}
