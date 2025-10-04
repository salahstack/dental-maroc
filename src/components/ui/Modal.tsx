/**
 * Node modules
 */
import { useEffect, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
/**
 * Components
 */
import Button from './Button';
/**
 * Interfaces
 */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className='modal'
              initial={{
                opacity: 0,
                top: 'calc(50% + 32px)',
                translateY: '-50%',
              }}
              animate={{ opacity: 1, top: '50%', translateY: '-50%' }}
              exit={{ opacity: 0, top: 'calc(50% + 32px)', translateY: '-50%' }}
              transition={{ duration: 0.2 }}
            >
              <h3 className='text-center font-medium text-lg mb-2'>Passer la commande</h3>
              <p className='text-center leading-tight text-gray-500'>
                Vous pouvez continuer votre commande en tant qu'invité ou créer
                un compte pour bénéficier d'avantages supplémentaires à
                l'avenir.
              </p>
              <div className='mt-3 flex items-center justify-center flex-wrap gap-2'>
                <Button label='Créer un compte' to='/login' classes='bg-gray-300 text-gray-700 whitespace-nowrap'/>
                <Button label="Continuer en tant qu'invité" classes='whitespace-nowrap' onClick={() => {
                  navigate('confirmation-commande');
                  onClose();
                } } />
              </div>
            </motion.div>
            <motion.div
              className='fixed inset-0 z-40 bg-black/50 cursor-pointer' tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
