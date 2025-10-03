/**
 * Node modules
 */
import { Link } from 'react-router-dom';
/**
 * Components
 */
import Button from '../components/ui/Button';
import CategoryCard from '../components/ui/CategoryCard';
import Image from '../components/ui/Image';
import InfoCard from '../components/ui/InfoCard';
import Product from '../components/ui/Product';
import PageTitle from '../components/ui/PageTitle';

/**
 * Interfaces
 */
import type { ProductProps } from '../interfaces/products';

const infoCards = [
  {
    smallScreens: '/images/info-80.webp',
    largeScreens: '/images/info-96.webp',
    altSrc: '/images/info-fallback.jpg',
    title: 'Matériaux dentaires',
    description:
      'Nous fournissons les meilleures résines, plâtres et matériaux de haute qualité pour les laboratoires dentaires.',
  },
  {
    smallScreens: '/images/info-80.webp',
    largeScreens: '/images/info-96.webp',
    altSrc: '/images/info.jpg',
    title: 'Équipements et instruments',
    description:
      'Les outils de forage, de polissage et les machines de précision les plus récents pour un travail parfait.',
  },
  {
    smallScreens: '/images/info-80.webp',
    largeScreens: '/images/info-96.webp',
    altSrc: '/images/info.jpg',
    title: 'Fournitures d’hygiène',
    description:
      'Des produits de stérilisation et de nettoyage spécialement conçus pour les laboratoires dentaires, garantissant un environnement sûr.',
  },
];

const categories = [
  {
    category: 'Résines et Matériaux',
    // "description": "Matériaux de haute qualité pour la fabrication et la restauration dentaire.",
    icon: 'images/flask.svg',
    // "subcategories": [
    //   "Résines dentaires",
    //   "Matériaux céramiques",
    //   "Composites"
    // ]
  },
  {
    category: 'Outils et Instruments',
    // "description": "Instruments essentiels pour le travail quotidien des prothésistes dentaires.",
    icon: 'images/dental-drill.svg',
    // "subcategories": [
    //   "Fraises dentaires",
    //   "Pinces et spatules",
    //   "Instruments de modelage"
    // ]
  },
  {
    category: 'Machines et Appareils',
    // "description": "Équipements modernes pour optimiser la production et la précision.",
    icon: 'images/microscope.svg',
    // "subcategories": [
    //   "Polisseuses et moteurs",
    //   "Appareils de photopolymérisation",
    //   "Petites machines de laboratoire"
    // ]
  },
  {
    category: 'Consommables',
    // "description": "Produits à usage quotidien indispensables pour les laboratoires.",
    icon: 'images/package.svg',
    // "subcategories": [
    //   "Gants et protections",
    //   "Brossettes et disques de polissage",
    //   "Accessoires divers"
    // ]
  },
];

const bestSellers: ProductProps[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1629904853693-ec84a89b2e63?auto=format&fit=crop&w=600&q=80',
    title: 'Premium Dental Chair Unit',
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
    price: 1499,
    description:
      'CMOS intraoral digital X-ray sensor with high resolution and low radiation exposure.',
    bestSeller: true,
  },
];

const newArrivals: ProductProps[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1629904853693-ec84a89b2e63?auto=format&fit=crop&w=600&q=80',
    title: 'Premium Dental Chair Unit',
    price: 2499,
    description:
      'Ergonomic dental chair with LED operating light and multifunctional delivery system.',
    newArrival: true,
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/3845855/pexels-photo-3845855.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Ultrasonic Scaler',
    price: 499,
    description:
      'High-frequency ultrasonic scaler for efficient plaque and tartar removal.',
    newArrival: true,
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Class B Autoclave Sterilizer',
    price: 1899,
    description:
      'Fully automatic steam sterilizer with advanced safety features for dental instruments.',
    newArrival: true,
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1629904853714-3f7a64de03f3?auto=format&fit=crop&w=600&q=80',
    title: 'High Speed Handpiece',
    price: 299,
    description:
      'Durable turbine handpiece with ceramic bearings for precision cutting.',
    newArrival: true,
  },
  {
    id: 5,
    image:
      'https://images.pexels.com/photos/3845769/pexels-photo-3845769.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Intraoral Camera',
    price: 699,
    description:
      'HD intraoral camera with USB connection for patient education and case documentation.',
    newArrival: true,
  },
  {
    id: 6,
    image:
      'https://images.pexels.com/photos/4269363/pexels-photo-4269363.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Complete Orthodontic Kit',
    price: 399,
    description:
      'Comprehensive set including brackets, wires, and tools for orthodontic procedures.',
    newArrival: true,
  },
  {
    id: 7,
    image:
      'https://images.pexels.com/photos/6812527/pexels-photo-6812527.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Digital X-Ray Sensor',
    price: 1499,
    description:
      'CMOS intraoral digital X-ray sensor with high resolution and low radiation exposure.',
    newArrival: true,
  },
];

const Home = () => {
  return (
    <>
      <PageTitle
        title='Boutique Dentaire | Équipements et Fournitures de Qualité'
        content='Découvrez notre sélection d’équipements dentaires de qualité : fauteuils, instruments, stérilisateurs et dispositifs d’imagerie. La référence des professionnels dentaires.'
      />
      {/* Hero Section */}
      <section>
        <div className='container grid grid-cols-1 md:lg:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr] gap-6 items-center'>
          <div className=' w-full max-w-[450px] mx-auto'>
            <h1 className=' text-3xl lg:text-5xl font-bold mb-4 leading-tight'>
              Outils avancés pour la fabrication dentaire
            </h1>
            <p className='text-gray-600'>
              Nous fournissons les matériaux et technologies les plus récents
              pour les laboratoires dentaires afin de créer des sourires
              parfaits.
            </p>
            <Button
              label='acheter maintenant'
              to='/shop'
              classes='mt-6'
              state={{ section: 'shop' }}
            />
          </div>
          <Image
            srcSet='/images/home-400.webp 400w, /images/home-800.webp 800w, /images/home-1200.webp 1200w, /images/home-1600.webp 1600w'
            fallback='/images/home-fallback.png'
            alt='Home'
            classes='rounded-lg'
            width='max-lg:w-full max-lg:max-w-sm'
            height='h-64 lg:h-[400px] square mx-auto'
            loading='eager'
            sizes='(max-width: 768px) 100vw, 50vw'
            fetchPriority='high'
          />
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className='container'>
          <h2 className='text-3xl font-bold mb-4 text-center'>Nos services</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {infoCards.map((info, key) => (
              <InfoCard
                key={key}
                smallScreens={info.smallScreens}
                largeScreens={info.largeScreens}
                altSrc={info.altSrc}
                title={info.title}
                description={info.description}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section>
        <div className='container'>
          <h2 className='text-3xl font-bold mb-6 text-center'>Catégories</h2>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6'>
            {categories.map((cat, key) => (
              <CategoryCard
                key={key}
                category={cat.category}
                icon={cat.icon}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Best Sellers Section */}
      <section>
        <div className='container'>
          <div className='flex items-center justify-between mb-6 gap-4'>
            <h2 className='text-3xl font-bold'>Meilleures ventes</h2>
            <Link
              to='/meilleures ventes'
              state={{ section: 'meilleures ventes' }}
              className='font-medium text-blue-600 transition hover:underline whitespace-nowrap'
            >
              Voir toutes
            </Link>
          </div>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mb-16'>
            {bestSellers.map((product, key) => (
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
      {/* New Arrivals */}
      <section>
        <div className='container'>
          <div className='flex items-center justify-between mb-6 gap-4'>
            <h2 className='text-3xl font-bold'>Nouveautés</h2>
            <Link
              to='/nouveautés'
              state={{ section: 'nouveautés' }}
              className='font-medium text-blue-600 transition hover:underline whitespace-nowrap'
            >
              Voir toutes
            </Link>
          </div>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mb-16'>
            {newArrivals.map((product, key) => (
              <Product
                key={key}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                newArrival={product.newArrival}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
