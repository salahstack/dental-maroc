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
        <Image srcSet={icon} fallback={icon} alt='' classes="w-8" width={32} height={32} />
        <h2 className="category-title">{category}</h2>
      </div>
    </Link>
  )
}

export default CategoryCard;