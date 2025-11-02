"use client"
import "../styles/item-card.css"

export default function ItemCard({ item, onRemove }) {
  return (
    <div className="item-card">
      <div className="item-info">
        <h3>{item.description}</h3>
        <div className="item-details">
          <span className="amount">${item.amount.toFixed(2)}</span>
          <span className={`tax-badge ${item.isTaxable ? "taxable" : "non-taxable"}`}>
            {item.isTaxable ? "📌 Taxable" : "✓ Tax-Free"}
          </span>
        </div>
      </div>
      <button className="btn-remove" onClick={() => onRemove(item.id)} aria-label={`Remove ${item.description}`}>
        ✕
      </button>
    </div>
  )
}
