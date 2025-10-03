import type { FC } from 'react';
import { useCart } from '../hooks/useCart';
import Image from '../components/ui/Image';
import Button from '../components/ui/Button';
import { Trash } from 'lucide-react';

interface CartProps {}

const Cart: FC<CartProps> = ({}) => {
  const { cart, removeProduct } = useCart();
  return (
    <div className='cart-dropdown'>
      <div className='border-b border-gray-200 pb-4 mb-4'>
        <h4 className='font-medium'>Votre panier</h4>
      </div>
      <div className='flex flex-col grow gap-4'>
        {cart.length === 0 ? (
          <p className='m-auto font-medium'>Votre panier est vide</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className='flex items-center justify-between gap-2'
              >
                <Image
                  srcSet={item.image}
                  classes='rounded-lg'
                  fallback={item.image}
                  alt={item.title}
                  width='w-14'
                  height='h-14'
                />
                <div className='flex-1 mx-4'>
                  <h5 className='font-medium text-gray-500'>{item.title}</h5>
                  <p className='text-sm text-gray-500 font-medium'>
                    {item.price} DH x {item.quantity}{' '}
                    <span className='text-gray-700'>
                      {item.price * item.quantity} DH
                    </span>
                  </p>
                </div>
                <Button
                  onClick={() => removeProduct(item.id)}
                  icon={<Trash />}
                  classes='text-gray-500 hover:text-red-500 bg-transparent w-10 h-10 p-0'
                />
              </div>
            ))}
            <Button
              label='Valider la commande'
              classes='w-full'
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
