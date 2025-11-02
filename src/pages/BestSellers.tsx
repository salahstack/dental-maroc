/**
 * Components
 */
import Product from '../components/ui/Product';
import Breadcrumb from '../components/ui/Breadcrumb';
import MetaData from '../components/ui/MetaData';
/**
 * Interfaces
 */
import type { ProductProps } from '../interfaces/products';

const BestSellers = () => {
  const bestSellers: ProductProps[] = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1629904853693-ec84a89b2e63?auto=format&fit=crop&w=600&q=80',
      title: 'Premium Dental Chair Unit',
      slug: 'premium-dental-chair-unit',
      price: 2499,
      description:
        'Ergonomic dental chair with LED operating light and multifunctional delivery system.',
      bestSeller: true,
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/3845855/pexels-photo-3845855.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Ultrasonic Scaler',
      slug: 'ultrasonic-scaler',
      price: 499,
      description:
        'High-frequency ultrasonic scaler for efficient plaque and tartar removal.',
      bestSeller: true,
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Class B Autoclave Sterilizer',
      slug: 'class-b-autoclave-sterilizer',
      price: 1899,
      description:
        'Fully automatic steam sterilizer with advanced safety features for dental instruments.',
      bestSeller: true,
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1629904853714-3f7a64de03f3?auto=format&fit=crop&w=600&q=80',
      title: 'High Speed Handpiece',
      slug: 'high-speed-handpiece',
      price: 299,
      description:
        'Durable turbine handpiece with ceramic bearings for precision cutting.',
      bestSeller: true,
    },
    {
      id: 5,
      image:
        'https://images.pexels.com/photos/3845769/pexels-photo-3845769.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Intraoral Camera',
      slug: 'intraoral-camera',
      price: 699,
      description:
        'HD intraoral camera with USB connection for patient education and case documentation.',
      bestSeller: true,
    },
    {
      id: 6,
      image:
        'https://images.pexels.com/photos/4269363/pexels-photo-4269363.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Complete Orthodontic Kit',
      slug: 'complete-orthodontic-kit',
      price: 399,
      description:
        'Comprehensive set including brackets, wires, and tools for orthodontic procedures.',
      bestSeller: true,
    },
    {
      id: 7,
      image:
        'https://images.pexels.com/photos/6812527/pexels-photo-6812527.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Digital X-Ray Sensor',
      slug: 'digital-x-ray-sensor',
      price: 1499,
      description:
        'CMOS intraoral digital X-ray sensor with high resolution and low radiation exposure.',
      bestSeller: true,
    },
  ];

  return (
    <>
      <MetaData
        title='Meilleures ventes'
        description='Découvrez notre sélection des meilleures ventes, des équipements dentaires de haute qualité plébiscités par les professionnels du secteur pour leur performance et leur fiabilité.'
      >
        {/* Open Graph / Facebook */}
        <meta
          property='og:title'
          content='Meilleures ventes - Dental Supply'
        />
        <meta
          property='og:description'
          content='Découvrez notre sélection des meilleures ventes, des équipements dentaires de haute qualité plébiscités par les professionnels du secteur pour leur performance et leur fiabilité.'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://dentalmaroc.netlify.app/meilleures-ventes'
        />
        <meta
          property='og:image'
          content='https://dentalmaroc.netlify.app/images/home-1200.webp'
        />
        {/* Twitter Card */}
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='Meilleures ventes - Dental Supply'
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
          name='twitter:description'
          content='Découvrez notre sélection des meilleures ventes, des équipements dentaires de haute qualité plébiscités par les professionnels du secteur pour leur performance et leur fiabilité.'
        />
        <meta
          name='twitter:image'
          content='/images/home-1200.webp'
        />
        <meta
          name='twitter:url'
          content='https://dentalmaroc.netlify.app/meilleures-ventes'
        />
        <meta
          name='twitter:type'
          content='website'
        />
        {/* Canonical URL */}
        <link
          rel='canonical'
          href='https://dentalmaroc.netlify.app/meilleures-ventes'
        />
        {/* Robots */}
        <meta
          name='robots'
          content='index, follow'
        />
        {/* Keywords */}
        <meta
          name='keywords'
          content='meilleures ventes, équipements dentaires, fournitures dentaires, Dental Supply, produits populaires dentaires'
        />
      </MetaData>

      <section>
        <div className='container'>
          <Breadcrumb />
          <h1 className='text-3xl font-bold mb-6'>Meilleures ventes</h1>
          <p className='text-gray-500 mb-4 max-w-3xl'>
            Découvrez notre sélection des meilleures ventes, des équipements
            dentaires de haute qualité plébiscités par les professionnels du
            secteur pour leur performance et leur fiabilité.
          </p>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mb-16'>
            {bestSellers.map((product, key) => (
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

export default BestSellers;
