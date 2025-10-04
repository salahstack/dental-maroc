const ProductSkeleton = () => {
  return (
    <div className='rounded-lg relative bg-gray-50 p-4 border border-gray-200 animate-pulse'>
      <div className='rounded-tl-lg rounded-lg h-38 md:h-45 bg-gray-200'></div>
      <div className='mt-3 mb-5'>
        <div className='bg-gray-200 h-5 rounded-xl mb-3'></div>
        <div className='bg-gray-200 h-3 rounded-xl mb-4'></div>
        <div className='bg-gray-200 h-5 rounded-xl mb-3'></div>
        <div className='bg-gray-200 h-5 rounded-xl mb-6'></div>
      </div>
      <div className='h-10 rounded-md bg-gray-200'></div>
    </div>
  );
};

export default ProductSkeleton;
