import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const ProductCard = ({ product, onAddToCart }) => {
  return ( 
    <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-700 group">
      <div className="relative">
        <img
          src={`http://localhost:3000/uploads/${product.image}`}
          alt={product.name}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'block';
          }}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="hidden absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-400 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        
        {/* <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-3 py-1 rounded-full text-sm font-bold">
          ${product.price}
        </div> */}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
            {/* <p className="text-amber-300 text-sm mb-3">
              {product.categoryName || 'Uncategorized'}
            </p> */}
          </div>
          <div className="bg-amber-900 rounded-full px-2 py-1 text-xs text-amber-200">
            {product.stock} 
          </div>
        </div>
        
        <p className="text-amber-100 text-sm mb-4 ">
          {product.description}
        </p>
        
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
        >
          Add to Cart
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ProductList = ({ products, onAddToCart }) => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          Welcome to ChemaCrete Shop
        </h1>
        <div className="w-64 h-1.5 bg-gradient-to-r from-amber-300 to-amber-200 mx-auto rounded-full mb-6"></div>
        <p className="text-amber-200 max-w-2xl mx-auto text-lg">
          كيماكريت فريق متخصص في كيماويات البناء الحديث وكافة انواع العزل ومعالجة مشاكل الرطوبة في المباني مع تقديم التقارير والاستشارات الفنية
        </p>
      </div>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard 
              key={product._id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">No Products Available</h3>
          <p className="text-amber-200 max-w-md mx-auto">
            We're currently updating our inventory. Please check back later!
          </p>
        </div>
      )}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-red-700 to-red-600 text-amber-100 py-10 mt-auto">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-black mb-2">ChemaCrete</h3>
          <p className="max-w-xs">Premium products with exceptional quality and service</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <p className="mb-4">© 2025 Chemacrete shop. All rights reserved.</p>
          {/* <div className="flex space-x-5">
            <a href="https://www.facebook.com/profile.php?id=100091997126247" className="hover:text-amber-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
              </svg>
            </a>
            <a href="https://discord.com/users/alfurjani" className="hover:text-amber-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"/>
              </svg>
            </a>
            <a href="https://www.twitch.tv/ahmedthedevoloper" className="hover:text-amber-400 transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
              </svg>
            </a>
          </div> */} 
          {/* the devoloper info is commented here */}
        </div>
      </div>
    </div>
  </footer>
);

function Home() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await axios.get('http://localhost:3000/products');
        setProducts(Array.isArray(productsRes.data) ? productsRes.data : []);
        setError('');
      } catch (error) {
        setError('Failed to load products. ' + error.message);
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [location.key]);

  const processedProducts = useMemo(() => {
    return products.map(product => ({
      ...product,
      // stock: typeof product.stock === 'string' ? parseInt(product.stock) : product.stock,
      categoryName: product.categoryName || 'Uncategorized'
    }));
  }, [products]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500 mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-black">Loading Products</h2>
            <p className="text-amber-200">Please wait while we prepare our collection</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-600 to-amber-500">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md p-8 bg-amber-800/30 backdrop-blur-sm rounded-2xl border border-amber-700">
            <div className="bg-amber-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Connection Error</h3>
            <p className="text-amber-200 mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-amber-600 to-amber-700 text-black hover:from-amber-700 hover:to-amber-800 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neutral-800 to-neutral-700">
      <main className="flex-grow">
        <ProductList 
          products={processedProducts} 
          onAddToCart={handleAddToCart} 
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home;