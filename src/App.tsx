import { useState } from "react"
import ExpenseList from "./components/ExpenseList"
import ExpenseFilter from "./components/ExpenseFilter"
import ExpenseForm from "./components/ExpenseForm"

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Groceries" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ])
  const [selectedCateory, setSelectedCategory] = useState("All Categories")
  const selectedExpenses =
    selectedCateory === "All Categories"
      ? expenses
      : expenses.filter((e) => e.category === selectedCateory)

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={selectedExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  )
}

export default App
