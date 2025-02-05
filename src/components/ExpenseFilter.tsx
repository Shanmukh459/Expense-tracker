import categories from "../categories"

interface Props {
  onSelectCategory: (category: string) => void
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="All Categories">All Categories</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  )
}

export default ExpenseFilter
