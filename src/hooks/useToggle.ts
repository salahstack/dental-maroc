/**
 * Node modules
 */
import { useCallback, useState } from 'react';

const useToggle = (): [boolean, () => void, () => void, () => void] => {
  const [isOpen, setToggle] = useState<boolean>(false);

  const toggle = useCallback((): void => {
    setToggle((prev) => !prev);
  }, []);

  const close = useCallback((): void => {
    setToggle(false);
  }, []);

  const open = useCallback((): void => {
    setToggle(true);
  }, []);

  return [isOpen, toggle, close, open];
};

export { useToggle };
