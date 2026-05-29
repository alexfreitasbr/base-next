import { useEffect, DependencyList } from 'react';

interface UseDebounceProps {
  func: () => void;
  delay?: number; 
  dependences: DependencyList; 
}

export const useDebounce = ({
  func,
  delay = 500,
  dependences,
}: UseDebounceProps): void => {
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      func();
    }, delay);

    return () => clearTimeout(debounceTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependences); 
};