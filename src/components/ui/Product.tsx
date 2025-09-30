/**
 * Node modules
 */
import type { FC } from 'react';
/**
 * Components
 */
import Image from './Image';
import Button from './Button';

/**
 * Interfaces
 */
import type { ProductProps } from '../../interfaces/products';
/**
 * Icons
 */
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Component
 */

const Product: FC<ProductProps> = ({
  image,
  title,
  price,
  description,
  id,
  bestSeller,
  newArrival,
}) => {
  return (
    <div className='product-card'>
      <Button
        classes='fav-icon-btn'
        icon={<Heart />}
      />
      {bestSeller && <span className='badge'>meilleure vente</span>}
      {newArrival && <span className='badge'>nouveau</span>}
      <Link
        to={`/produit/${id}`}
        state={{
          section: bestSeller
            ? 'meilleures ventes'
            : newArrival
            ? 'nouveautés'
            : 'Products',
          title,
        }}
      >
        <Image
          src={image}
          alt={title}
          width='w-full'
          height='h-48'
          classes='rounded-tl-lg rounded-tr-lg'
        />
      </Link>
      <div className='product-content'>
        <Link
          to={`/produit/${id}`}
          state={{
            section: bestSeller
              ? 'Best Sellers'
              : newArrival
              ? 'New Arrivals'
              : 'Products',
            title,
          }}
        >
          <h2 className='product-title hover:text-blue-600 transition'>
            {title}
          </h2>
        </Link>
        <p className='product-description'>{description}</p>
        <span className='product-price'>{price} DH</span>
        <Button
          label='Ajouter au panier'
          icon={<ShoppingCart />}
          classes='mt-4 w-full flex items-center gap-4'
        />
      </div>
    </div>
  );
};

export default Product;
