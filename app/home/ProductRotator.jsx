'use client';
import { useEffect, useState } from 'react';

export default function ProductRotator({
  products = [],
  className = 'text-yellow-400 animate-pulse'
}) {
  const [currentProduct, setCurrentProduct] = useState(products[0] || '');

  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      const currentIndex = products.indexOf(currentProduct);
      const nextIndex = (currentIndex + 1) % products.length;
      setCurrentProduct(products[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentProduct, products]);

  return <span className={className}>{currentProduct}</span>;
}
