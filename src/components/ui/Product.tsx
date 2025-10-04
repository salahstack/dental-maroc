/**
 * Node modules
 */
import { useEffect, useState, type FC } from 'react';
/**
 * Components
 */
import Image from './Image';
import Button from './Button';
import Quantity from './Quantity';

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
 * Custom hooks
 */
import { useCart } from '../../hooks/useCart';
import { useFavorite } from '../../hooks/useFavorite';
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
  const { addProduct, cart } = useCart();
  const { addToFavorite, removeFromFavorite, favorite } = useFavorite();
  const productQuantity = cart.find((item) => item.id === id)?.quantity ?? 1;
  const [quantity, setQuantity] = useState<number>(productQuantity);
  const isProductExistsInFavorite = !!favorite.find(item => item.id === Number(id));
  const [isFavorite, setIsFavorite] = useState<boolean>(isProductExistsInFavorite);

  useEffect(() => {
    const newQuantity = cart.find((item) => item.id === id)?.quantity ?? 1;
    setQuantity(newQuantity);
  }, [cart, id])

  useEffect(() => {
    if(isFavorite) {
      addToFavorite({ id, title, description, image, price });
    }
    else {
      removeFromFavorite(id)
    }
  }, [isFavorite])

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  }


  return (
    <div className='product-card'>
      <Button
        classes='fav-icon-btn'
        icon={<Heart className={`${isFavorite ? 'text-blue-600 fill-blue-600' : ''}`}/>}
        aria-label='add to favorites'
        onClick={() => handleToggleFavorite()}
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
          srcSet={image}
          fallback={image}
          alt={title}
          width='w-full'
          height='h-40 md:h-48'
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
        <div className='flex items-center gap-2 flex-wrap mt-4'>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <Button
            label='Ajouter au panier'
            icon={<ShoppingCart />}
            classes='w-full flex items-center gap-4'
            onClick={() => addProduct({id, title, description, image, price, quantity})}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
