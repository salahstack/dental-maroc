/**
 * Components
 */
import Product from '../components/ui/Product';
import Breadcrumb from '../components/ui/Breadcrumb';
/**
 * Interfaces
 */
import type { ProductProps } from '../interfaces/products';



const NewArrivals = () => {
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
  return (
    <section>
      <div className='container'>
        <Breadcrumb />
        <h1 className='text-3xl font-bold mb-6'>Nouveaux Arrivages</h1>
        <p className='text-gray-500 mb-4 max-w-3xl'>Découvrez les derniers équipements dentaires ajoutés à notre catalogue, alliant innovation et qualité pour répondre aux besoins des professionnels.</p>
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
  );
};

export default NewArrivals;
