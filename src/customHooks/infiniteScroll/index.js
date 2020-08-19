import { useState, useLayoutEffect } from 'react';
// import Document from 'next/document';

const useInfiniteScroll = (elementId, reRender = null) => {
  const [isBottom, setIsBottom] = useState(false);

  useLayoutEffect(() => {
    function handleScroll() {
      let currentHeight =
        window.innerHeight + document.documentElement.scrollTop;
      const heightCoefficient = 0.99;
      const minimumHeightToTrigger =
        document.getElementById(elementId).offsetHeight * heightCoefficient;
      if (currentHeight < minimumHeightToTrigger) return;
      setIsBottom(true);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementId, reRender]);

  return [isBottom, setIsBottom];
};

export default useInfiniteScroll;
