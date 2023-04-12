import { useEffect } from 'react';

const useOnKeydown = ({
  keyname,
  onKeydown,
}: {
  keyname: string;
  onKeydown: () => void;
}): void => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === keyname) {
      onKeydown();
    }
  };

  useEffect(() => {
    if (onKeydown) {
      window.addEventListener('keydown', handleKeydown);
    } else {
      window.removeEventListener('keydown', handleKeydown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onKeydown]);
};

export default useOnKeydown;
