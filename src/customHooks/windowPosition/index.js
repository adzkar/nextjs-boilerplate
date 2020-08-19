import { useState, useLayoutEffect } from 'react';
// import Document from 'next/document';

const useInfiniteScroll = () => {
  const [documentHeight, setDocumentHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    setDocumentHeight(document.body.scrollHeight);
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    documentHeight,
    scrollY,
  };
};

export default useInfiniteScroll;
