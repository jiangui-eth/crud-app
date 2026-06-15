export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search tasks..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
