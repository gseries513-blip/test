import { useParams } from "react-router-dom";
import CategoryNav from "../components/CategoryNav";
import CategoryBookList from "../components/CategoryBookList";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  const formatCategoryName = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="container">
          <h1 className="heading-lg">{formatCategoryName(categoryName || '')}</h1>
          <p className="text-muted">Discover our collection of {formatCategoryName(categoryName || '').toLowerCase()} books.</p>
        </div>
      </div>
      <CategoryNav />
      <CategoryBookList />
    </div>
  );
}