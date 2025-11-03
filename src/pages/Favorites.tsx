/**
 * Components
 */
import MetaData from '../components/ui/MetaData';
import Product from '../components/ui/Product';
/**
 * Hooks
 */
import { useFavorite } from '../hooks/useFavorite';

const Favorites = () => {
  const { favorites } = useFavorite();
  return (
    <>
      <MetaData
        title='Vos Favoris - Dental Supply'
        description='Découvrez vos produits favoris sur Dental Supply. Retrouvez facilement vos équipements dentaires préférés et passez commande en quelques clics.'
      >
        {/* Open Graph / Facebook */}
        <meta
          property='og:title' 
          content='Vos Favoris - Dental Supply'
        />
        <meta
          property='og:description'
          content='Découvrez vos produits favoris sur Dental Supply. Retrouvez facilement vos équipements dentaires préférés et passez commande en quelques clics.'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://dentalmaroc.netlify.app/favoris'
        />
        <meta
          property='og:image'
          content='/images/home-1200.webp'
        />
        {/* Twitter Card */}
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='Vos Favoris - Dental Supply'
        />
        <meta
          name='twitter:description'
          content='Découvrez vos produits favoris sur Dental Supply. Retrouvez facilement vos équipements dentaires préférés et passez commande en quelques clics.'
        />
        <meta
          name='twitter:site'
          content='@DentalSupply'
        />
        <meta
          name='twitter:creator'
          content='@DentalSupply'
        />
        <meta
          name='twitter:url'
          content='https://dentalmaroc.netlify.app/favoris'
        />
        <meta
          name='twitter:image'
          content='/images/home-1200.webp'
        />
        <meta name='twitter:type' content='website' />
        {/* Canonical URL */}
        <link
          rel='canonical'
          href='https://dentalmaroc.netlify.app/favoris'
        />
        {/* Robots */}
        <meta name='robots' content='noindex, follow' />
      </MetaData>
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
                slug={product.slug}
                price={product.price}
                description={product.description}
                bestSeller={product.bestSeller}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Favorites;
