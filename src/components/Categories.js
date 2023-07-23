import { getCategories } from "../api";

export default function Categories() {

  const categories = getCategories();

  return (
    <div className="container">
      <h1>Session Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
