import "../styles/budget-summary.css"

export default function BudgetSummary({ totals, itemCount }) {
  return (
    <div className="budget-summary">
      <h2>Summary</h2>

      <div className="summary-item">
        <span>Items in Cart</span>
        <span className="summary-value">{itemCount}</span>
      </div>

      <div className="summary-item">
        <span>Taxable Items</span>
        <span className="summary-value">${totals.taxableSum.toFixed(2)}</span>
      </div>

      <div className="summary-item">
        <span>Tax (8%)</span>
        <span className="summary-value">${totals.taxAmount.toFixed(2)}</span>
      </div>

      <div className="summary-item">
        <span>Tax-Free Items</span>
        <span className="summary-value">${totals.nonTaxableSum.toFixed(2)}</span>
      </div>

      <div className="summary-divider"></div>

      <div className="summary-item total">
        <span>Total</span>
        <span className="summary-value">${totals.total.toFixed(2)}</span>
      </div>
    </div>
  )
}
