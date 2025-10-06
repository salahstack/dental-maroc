/**
 * Node modules
 */
import { useParams } from 'react-router-dom';
import { useState } from 'react';

/**
 * Components
 */
import Image from '../components/ui/Image';
import PageTitle from '../components/ui/PageTitle';
import Button from '../components/ui/Button';
import Breadcrumb from '../components/ui/Breadcrumb';
import Quantity from '../components/ui/Quantity';
/**
 * Icons
 */
import { ShoppingCart } from 'lucide-react';
/**
 * Custom hooks
 */
import { useCart } from '../hooks/useCart';
/**
 * Interfaces
 */
import type { ProductProps } from '../interfaces/products';
interface ProductDetailsProps extends ProductProps {
  category: string;
  status: string;
}

const newArrivals: ProductDetailsProps[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1629904853693-ec84a89b2e63?auto=format&fit=crop&w=600&q=80',
    title: 'Premium Dental Chair Unit',
    price: 2499,
    description:
      'Ergonomic dental chair with LED operating light and multifunctional delivery system.',
    newArrival: true,
    category: 'Dental Chair',
    status: 'In Stock',
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
    category: 'Dental Equipment',
    status: 'In Stock',
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
    category: 'Sterilization',
    status: 'Out of Stock',
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
    category: 'Handpieces',
    status: 'In Stock',
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
    category: 'Imaging',
    status: 'In Stock',
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
    category: 'Orthodontics',
    status: 'Limited Stock',
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
    category: 'Imaging',
    status: 'In Stock',
  },
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addProduct } = useCart();

  const [quantity, setQuantity] = useState<number>(1);
  const product = newArrivals.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section>
        <div className='container'>
          <p>Produit non trouvé.</p>
        </div>
      </section>
    );
  }

  const { image, title, price, description, category, status } = product;

  return (
    <section>
      <PageTitle
        title={title}
        content={description}
      />
      <div className='container'>
        <Breadcrumb />
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
          <Image
            srcSet={image}
            fallback={image}
            alt={title}
            width='w-full max-w-[400px] lg:w-1/2'
            height='h-40 md:h-80'
            classes='rounded-lg mx-auto md:mx-0 md:ml-auto'
          />
          <div className='w-full max-w-[500px] mx-auto'>
            <h1 className='product-title'>{title}</h1>
            <span className='block mt-2 font-medium text-gray-500 hover:text-blue-600 transition'>
              {category}
            </span>
            <span className='product-price mb-3'>{price} DH</span>
            <p className='product-description'>{description}</p>
            <span
              className={`block mt-2 font-medium text-white ${
                status === 'In Stock'
                  ? 'bg-green-400'
                  : status === 'Limited Stock'
                  ? 'bg-orange-400'
                  : 'bg-red-400'
              } w-fit px-3 py-1 rounded-lg`}
            >
              {status}
            </span>
            <div className='flex mt-4 items-center flex-wrap gap-4'>
              <Quantity
                quantity={quantity}
                setQuantity={setQuantity}
              />
              <Button
                label='Ajouter au panier'
                icon={<ShoppingCart />}
                classes='w-full flex items-center gap-4'
                onClick={() => {
                  addProduct({
                    id: Number(id),
                    title,
                    description,
                    image,
                    price,
                    quantity,
                  });
                  setQuantity(1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
