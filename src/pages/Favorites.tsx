/**
 * Hooks
 */
import Product from '../components/ui/Product';
/**
 * Components
 */
import { useFavorite } from '../hooks/useFavorite';

const Favorites = () => {
  const { favorites } = useFavorite();
  return (
    <section>
      <div className='container'>
        <h1 className='text-2xl font-bold mb-4'>Favoris</h1>
        <p className='text-gray-600 mb-4'>Découvrez vos produits favoris.</p>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mb-16'>
          {favorites.map((product, key) => (
            <Product
              key={key}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              bestSeller={product.bestSeller}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
