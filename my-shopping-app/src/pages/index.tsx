import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import ProductCard from '../components/ProductCard';

const IndexPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*');

      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Welcome to My Shopping App</h1>
      <h2>Product Catalog</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;