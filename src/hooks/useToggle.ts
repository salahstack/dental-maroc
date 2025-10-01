/**
 * Node modules
 */
import { useCallback, useState } from 'react';

const useToggle = (): [boolean, () => void] => {
  const [isOpen, setToggle] = useState<boolean>(false);

  const toggle = useCallback((): void => {
    setToggle((prev) => !prev);
  }, []);

  return [isOpen, toggle];
};

export { useToggle };
