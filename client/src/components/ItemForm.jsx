"use client"

import { useState } from "react"
import "../styles/item-form.css"

export default function ItemForm({ onAddItem }) {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [quantity, setQuantity] = useState(1)
  /* added quantity state */
  const [isTaxable, setIsTaxable] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description.trim() || !amount.trim()) {
      alert("Please fill in all fields")
      return
    }

    onAddItem({
      description: description.trim(),
      amount: Number.parseFloat(amount),
      quantity: Number.parseInt(quantity) || 1,
      /* included quantity in item data */
      isTaxable,
    })

    setDescription("")
    setAmount("")
    setQuantity(1)
    /* reset quantity after submit */
    setIsTaxable(false)
  }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <h2>Add New Item</h2>

      <div className="form-group">
        <label htmlFor="description">Item Description</label>
        <input
          id="description"
          type="text"
          placeholder="e.g., Organic Milk, Bread, etc."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount ($)</label>
        <input
          id="amount"
          type="number"
          step="0.01"
          min="0"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          min="1"
          max="999"
          placeholder="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="form-group checkbox-group">
        <input id="taxable" type="checkbox" checked={isTaxable} onChange={(e) => setIsTaxable(e.target.checked)} />
        <label htmlFor="taxable">This item is taxable</label>
      </div>

      <button type="submit" className="btn-primary">
        Add Item
      </button>
    </form>
  )
}
