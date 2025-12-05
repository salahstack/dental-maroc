/**
 * Node modules
 */
import { useState, memo, type FC } from 'react';
import { Link } from 'react-router-dom';
/**
 * Components
 */
import Image from './Image';
import Button, { IconButton } from './Button';
import Quantity from './Quantity';

/**
 * Interfaces
 */
import type { ProductProps } from '../../interfaces/products';
/**
 * Icons
 */
import { Heart, ShoppingCart } from 'lucide-react';
/**
 * Custom hooks
 */
import useCartActions from '../../hooks/cart/useCartActions';
import useFavoritesActions from '../../hooks/favorites/useFavoritesActions';
import useIsProductInFavorites from '../../hooks/favorites/useIsProductInFavorites';
/**
 * Component
 */

const Product: FC<ProductProps> = memo(
  ({ image, title, slug, price, description, id, bestSeller, newArrival }) => {
    const { addToCart } = useCartActions();
    const { addToFavorites, removeFromFavorites } = useFavoritesActions();
    const isInFavorites = useIsProductInFavorites(id);
    const [quantity, setQuantity] = useState<number>(1);

    const handleToggleFavorite = () => {
      if (isInFavorites) {
        removeFromFavorites(id);
      } else {
        addToFavorites({
          id,
          title,
          slug,
          description,
          image,
          price,
          bestSeller,
          newArrival,
        });
      }
    };
    // console.count('component re-rendered');
    return (
      <div className='product-card'>
        <IconButton
          classes='absolute top-4 right-4'
          variant='filled'
          color='secondary'
          icon={
            <Heart
              className={`${
                isInFavorites ? 'text-blue-600 fill-blue-600' : ''
              }`}
            />
          }
          aria-label='add to favorites'
          onClick={handleToggleFavorite}
        />
        {bestSeller && <span className='badge'>meilleure vente</span>}
        {newArrival && <span className='badge'>nouveau</span>}
        <Link
          to={`/produits/${slug}`}
          state={{
            section: bestSeller
              ? 'meilleures ventes'
              : newArrival
              ? 'nouveaux arrivages'
              : 'Produits',
            title,
          }}
        >
          <Image
            srcSet={image}
            fallback={image}
            alt={title}
            width={600}
            height={400}
            classes='rounded-tl-lg rounded-tr-lg h-40 md:h-48 w-full'
          />
        </Link>
        <div className='product-content'>
          <Link
            to={`/produits/${slug}`}
            state={{
              section: bestSeller
                ? 'meilleures ventes'
                : newArrival
                ? 'nouveaux arrivages'
                : 'Produits',
              title,
            }}
          >
            <h2 className='product-title hover:text-blue-600 transition'>
              {title}
            </h2>
          </Link>
          <p className='product-description'>{description}</p>
          <span className='product-price'>{price} DH</span>
          <div className='flex items-center gap-2 flex-wrap mt-4'>
            <Quantity
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <Button
              classes='w-full'
              onClick={() => {
                addToCart({ id, title, description, image, price, quantity });
                setQuantity(1);
              }}
            >
              <ShoppingCart />
              Ajouter au panier
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default Product;
