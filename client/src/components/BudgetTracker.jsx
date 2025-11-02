import { useState } from "react"
import ItemForm from "./ItemForm"
import ItemList from "./ItemList"
import BudgetSummary from "./BudgetSummary"
import "../styles/budget-tracker.css"

const TAX_RATE = 0.15 // 8% tax rate

export default function BudgetTracker() {
  const [items, setItems] = useState([])

  const addItem = (newItem) => {
    const item = {
      id: Date.now(),
      ...newItem,
    }
    setItems([...items, item])
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const calculateTotals = () => {
    let taxableSum = 0
    let nonTaxableSum = 0

    items.forEach((item) => {
      if (item.isTaxable) {
        taxableSum += Number.parseFloat(item.amount) || 0
      } else {
        nonTaxableSum += Number.parseFloat(item.amount) || 0
      }
    })

    const taxAmount = taxableSum * TAX_RATE
    const total = taxableSum + taxAmount + nonTaxableSum

    return {
      taxableSum,
      nonTaxableSum,
      taxAmount,
      total,
    }
  }

  const totals = calculateTotals()

  return (
    <div className="budget-tracker">
      <header className="tracker-header">
        <h1>🛒 Supermarket Budget Tracker</h1>
        <p>Keep track of your grocery spending with ease</p>
      </header>

      <main className="tracker-main">
        <div className="tracker-content">
          <section className="input-section">
            <ItemForm onAddItem={addItem} />
          </section>

          <section className="list-section">
            <ItemList items={items} onRemoveItem={removeItem} />
          </section>
        </div>

        <aside className="summary-section">
          <BudgetSummary totals={totals} itemCount={items.length} />
        </aside>
      </main>
    </div>
  )
}
