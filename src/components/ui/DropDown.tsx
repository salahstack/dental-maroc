import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Option {
  id: string;
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

export default function DropDown({
  options,
  onChange,
  defaultValue,
}: CustomSelectProps) {
  const [selected, setSelected] = useState(
    defaultValue || options[0]?.value || ''
  );
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
    setOpen(false);
  };

  return (
    <div className='relative w-full max-w-60 min-w-60'>
      {/* Select Button */}
      <button
        onClick={() => setOpen(!open)}
        className='flex items-center justify-between w-full px-4 py-2 text-sm border-2 border-gray-200 rounded-lg bg-white hover:border-blue-500 focus:outline-none'
      >
        <span>
          {options.find((opt) => opt.value === selected)?.label || 'Select'}
        </span>
        <ChevronDown
          className={`ml-2 h-4 w-4 transition-transform ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {/* Dropdown with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.1 }}
            className='absolute z-10 mt-2 w-full bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg'
          >
            {options.map((opt) => (
              <div
                key={opt.id}
                onClick={() => handleSelect(opt.value)}
                className={`px-4 py-2 cursor-pointer rounded-md text-sm ${
                  selected === opt.value
                    ? 'bg-blue-600 font-medium text-white'
                    : 'hover:bg-blue-100'
                }`}
              >
                {opt.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
