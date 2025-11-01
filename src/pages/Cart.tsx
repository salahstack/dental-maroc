/**
 * Node modules
 */
import { useState, type FC } from 'react';
/**
 * Custom hooks
 */
import { useCart } from '../hooks/useCart';
/**
 * Components
 */
import Image from '../components/ui/Image';
import Button, { IconButton } from '../components/ui/Button';
import Modal from '../components/ui/Modal';
/**
 * Icons
 */
import { Trash } from 'lucide-react';
/**
 * Interfaces
 */

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeProduct, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };
  const handleOpen = () => setIsModalOpen(true);

  return (
    <>
      <div className={`cart-dropdown ${isOpen ? 'active' : ''}`}>
        <div className='border-b border-gray-200 pb-4 mb-4'>
          <h4 className='font-medium'>Votre panier</h4>
        </div>
        <div className='flex flex-col grow gap-3'>
          {cart.length === 0 ? (
            <p className='m-auto font-medium'>Votre panier est vide</p>
          ) : (
            <>
              <div className='flex items-center justify-between'>
                <p className='text-sm'>
                  {cart.length} produit{cart.length > 1 ? 's' : ''} dans le
                  panier
                </p>
                <Button
                  variant='filled'
                  color='danger'
                  size='sm'
                  onClick={clearCart}
                >
                  Vider le panier
                </Button>
              </div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className='flex items-center justify-between gap-2'
                >
                  <Image
                    srcSet={item.image}
                    classes='rounded-lg w-14 h-14'
                    fallback={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                  />
                  <div className='flex-1 mx-4'>
                    <h5 className='font-medium text-gray-500 text-sm'>
                      {item.title}
                    </h5>
                    <p className='text-sm text-gray-500 font-medium'>
                      {item.price} DH x {item.quantity}{' '}
                      <span className='text-gray-700'>
                        {item.price * item.quantity} DH
                      </span>
                    </p>
                  </div>
                  <IconButton
                    onClick={() => removeProduct(item.id)}
                    icon={<Trash />}
                    variant='filled'
                    color='secondary'
                  />
                </div>
              ))}
              <Button
                classes='w-full'
                onClick={handleOpen}
              >
                Valider la commande
              </Button>
            </>
          )}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </>
  );
};

export default Cart;
