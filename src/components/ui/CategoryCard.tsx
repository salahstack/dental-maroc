/**
 * Node modules
 */
import type { FC } from "react";
/**
 * Components
 */
import Image from "./Image";
import { Link } from "react-router-dom";
/** 
 * Interface
 */

interface CategoryCardProps {
  icon: string;
  category: string;
};

const CategoryCard: FC<CategoryCardProps> = ({ icon, category }) => {
  return (
    <Link to={`/categories/${category.toLowerCase()}`} state={{ category }}>
      <div className="category-card">
        <Image src={icon} alt={category} width="w-8" />
        <h2 className="category-title">{category}</h2>
      </div>
    </Link>
  )
}

export default CategoryCard;