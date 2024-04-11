import Icon from '@/_components/Icon';

const Search = () => {
  return (
    <form className='ml-16 hidden md:block w-[551px]'>
      <label
        className='text-sm font-medium text-gray-900 dark:text-gray-300 sr-only'
        htmlFor='search'
      >
        Search
      </label>
      <div className='flex'>
        <div className='relative w-full'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <Icon name='magnifying-glass' className='text-[#B1B0B8]' />
          </div>
          <input
            className='pl-11 pr-4 custom-input-field'
            id='search'
            name='search'
            placeholder='Search'
            type='search'
          />
        </div>
      </div>
    </form>
  );
};

export default Search;
