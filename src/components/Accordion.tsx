/**
 * Node modules
 */
import type { FC } from 'react';

/**
 * Interfaces
 */
interface AccordionProps {
  question: string;
  answer: string;
}

/**
 * Components
 */
import { IconButton } from './ui/Button';

/**
 * Icons
 */
import { ChevronUp } from 'lucide-react';

/**
 * Custom hooks
 */
import { useToggle } from '../hooks/useToggle';

const Accordion: FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, toggle] = useToggle();
  return (
    <li className={`accordion-item ${isOpen && 'active'}`}>
      <div
        className='accordion-header'
        onClick={toggle}
        role='button'
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <h3>{question}</h3>
        <IconButton
          icon={
            <ChevronUp
              className={`duration-500 ${isOpen ? 'rotate-180' : ''}`}
              aria-hidden='true'
            />
          }
          variant='text'
          color='secondary'
          aria-label="Basculer l'accordéon"
        />
      </div>
      <div className={`accordion-body`}>
        <p className='accordion-content'>{answer}</p>
      </div>
    </li>
  );
};

export default Accordion;
