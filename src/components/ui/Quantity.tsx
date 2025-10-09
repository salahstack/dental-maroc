/**
 * Node modules
 */
import type { Dispatch, FC, SetStateAction } from 'react';
/**
 * Components
 */
import { IconButton } from './Button';
/**
 * Icons
 */
import { Minus, Plus } from 'lucide-react';

interface QuantityProps {
  quantity: number,
  setQuantity: Dispatch<SetStateAction<number>>
}

const Quantity: FC<QuantityProps> = ({ quantity, setQuantity }) => {
  return (
    <div className='flex items-center justify-around gap-2 w-full bg-blue-100 rounded-lg py-1'>
      <IconButton
        icon={<Minus aria-hidden='true' />}
        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
        aria-label='decrease quantity'
      />
      <span className='font-medium'>{quantity}</span>
      <IconButton
        icon={<Plus aria-hidden='true' />}
        onClick={() => setQuantity((prev) => prev + 1)}
        aria-label='increase quantity'
      />
    </div>
  );
};

export default Quantity;
