/**
 * Node modules
 */
import type { FC } from 'react';
/**
 * Interfaces
 */
import type { TextFieldProps } from '../../interfaces/text-field';

const TextField: FC<TextFieldProps> = ({
  type = 'text',
  placeholder,
  label,
  name,
  classes = '',
  fieldClasses = '',
}) => {
  return (
    <div className={`text-field-wrapper ${classes}`}>
      <label
        htmlFor={name}
        className={`text-field-label`}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`text-field ${fieldClasses}`}
      />
    </div>
  );
};

export default TextField;
