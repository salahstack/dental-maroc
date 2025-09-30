import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const MotionCheck = motion(Check);

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}

const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange, id }) => {
  const checkboxId = id || label.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className='flex items-center gap-2'>
      <label
        htmlFor={checkboxId}
        className='flex items-center cursor-pointer select-none'
      >
        <div
          className={`w-5 h-5 border-2 rounded-md flex items-center justify-center ${
            checked ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
          } hover:border-blue-500 transition-colors`}
          onClick={() => onChange(!checked)}
        >
          <AnimatePresence>
            {checked && (
              <MotionCheck
                className='w-4 h-4 text-white'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              />
            )}
          </AnimatePresence>
        </div>
        <span className='ml-2 text-sm font-medium'>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
