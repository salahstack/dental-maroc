/**
 * Node modules
 */
import { useEffect, useState, type ChangeEvent, type FC } from 'react';
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
}

/**
 * ProductInterface
 */
interface ProductInterface {
  id: number,
  title: string,
  thumbnail: string,
  price: number
}

const SearchView: FC<SearchViewProps> = ({ isSearchBarOpen, onToggle }) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query);
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        if (err instanceof DOMException && err.name === 'AbortError') {
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
