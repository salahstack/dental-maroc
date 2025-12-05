/**
 * Node modules
 */
import { useCallback, useEffect, useMemo, useState, type FC } from 'react';
import { Link } from 'react-router-dom';
/**
 * Components
 */
import { IconButton } from './Button';
/**
 * Custom Hooks
 */
import { useDebounce } from '../../hooks/useDebounce';
/**
 * Icons
 */
import { ArrowLeft, Search } from 'lucide-react';
/**
 * Interfaces
 */
interface SearchViewProps {
  isSearchBarOpen: boolean;
  onToggle: () => void;
  // items:
}

/**
 * Products
 */

const items = [
  {
    id: 101,
    name: '3M Filtek Z350 XT Composite A2',
    slug: '3m-filtek-z350-xt-composite-a2',
    thumbnail:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=60',
    price: 18.5,
    brand: '3M',
    category: 'Composite',
    short_description:
      'Nano-hybrid composite for anterior & posterior restorations',
    in_stock: true,
  },
  {
    id: 102,
    name: 'Ivoclar OptraDam Plus',
    slug: 'ivoclar-optradam-plus',
    thumbnail: 'https://cdn.example.com/products/102/thumb.jpg',
    price: 12.99,
    brand: 'Ivoclar Vivadent',
    category: 'Rubber Dam',
    short_description: 'Flexible rubber dam for moisture control',
    in_stock: false,
  },
  {
    id: 103,
    name: 'Dentsply Gutta-Percha Points (Size 25)',
    slug: 'dentsply-gutta-percha-25',
    thumbnail: 'https://cdn.example.com/products/103/thumb.jpg',
    price: 7.2,
    brand: 'Dentsply',
    category: 'Endodontics',
    short_description: 'High-precision gutta-percha cones for obturation',
    in_stock: true,
  },
  {
    id: 104,
    name: 'Woodpecker LED.B Curing Light',
    slug: 'woodpecker-led-b-curing-light',
    thumbnail: 'https://cdn.example.com/products/104/thumb.jpg',
    price: 49.99,
    brand: 'Woodpecker',
    category: 'Light Curing',
    short_description: 'High-power LED curing light with 1200 mW/cm²',
    in_stock: true,
  },
  {
    id: 105,
    name: 'Meta Biomed RC-Prep Paste',
    slug: 'meta-biomed-rc-prep',
    thumbnail: 'https://cdn.example.com/products/105/thumb.jpg',
    price: 9.5,
    brand: 'Meta Biomed',
    category: 'Endodontics',
    short_description: 'Lubricant for root canal instrumentation',
    in_stock: true,
  },
];

const SearchView: FC<SearchViewProps> = ({ isSearchBarOpen, onToggle }) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query);
  const [products, setProducts] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const reset = () => {
    setQuery('');
  };

  useEffect(() => {
    if (!debouncedQuery) {
      setProducts([]);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedQuery}&limit=6`,
          { signal: controller.signal }
        );
        const data = await res.json();
        // console.log(data.products);
        setProducts(data.products);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Previous request aborted');
        } else {
          console.error(err);
        }
      }
    };
    fetchData();

    return () => controller.abort();
  }, [debouncedQuery]);

  return (
    <>
      <div className={`search-view ${isSearchBarOpen && 'active'}`}>
        <div
          role='search'
          className={`search-wrapper`}
        >
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 z-3 hidden xl:block' />
          <IconButton
            icon={<ArrowLeft className='text-gray-700' />}
            variant='text'
            color='secondary'
            classes='absolute left-3 top-1/2 -translate-y-1/2 duration-200 transition-colors rounded-full hover:bg-gray-200 xl:hidden'
            onClick={onToggle}
          />
          <input
            type='search'
            name='query'
            className='search-field'
            placeholder='Search products'
            value={query}
            onChange={handleChange}
          />
          <div className='absolute border-2 border-blue-600 border-r-transparent rounded-full w-6 h-6 animate-spin top-1/2 -translate-y-1/2 right-2'></div>
        </div>
        {products.length > 0 && (
          <ul className='view-list'>
            {products.map((product) => (
              <li key={product.id}>
                <Link
                  to={'#'}
                  className='view-item'
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    width={48}
                    height={48}
                    className='w-10 h-10 rounded-md'
                  />
                  <div>
                    <h3 className='text-xs font-medium'>{product.title}</h3>
                  </div>
                  <span className='text-xs font-medium'>{product.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {products.length > 0 && (
        <div
          className='fixed inset-0 z-[9]'
          tabIndex={0}
          onClick={reset}
        ></div>
      )}
    </>
  );
};

export default SearchView;
