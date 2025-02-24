import { ChangeEvent } from "react";
import useStore from "../store";

export default function SearchFilter() {
  const { category, setCategory, categories, fetchProductsByCategory } =
    useStore();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    fetchProductsByCategory(selectedCategory);
  };

  return (
    <div>
      <label htmlFor="category"></label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={handleSelectChange}
        className="filter"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
