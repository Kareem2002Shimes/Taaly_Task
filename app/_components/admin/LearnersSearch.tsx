import Icon from '../Icon';

const LearnersSearch = () => {
  return (
    <form>
      <label
        className='text-sm font-medium text-gray-900 dark:text-gray-300 sr-only'
        htmlFor='search'
      >
        Search
      </label>
      <div className='flex'>
        <div className='relative w-full'>
          <div className='pointer-events-none absolute after:content-[""] after:absolute after:-right-3 after:h-full after:border after:border-[#B1B0B8]  inset-y-0 left-0 flex items-center pl-3'>
            <Icon name='adjustments-horizontal' className='text-[#B1B0B8]' />
          </div>
          <div className='pointer-events-none absolute inset-y-0 left-11 flex items-center pl-3'>
            <Icon name='magnifying-glass' className='text-[#B1B0B8]' />
          </div>
          <input
            className='pl-24 pr-4 custom-input-field rounded-[16px] placeholder:text-base'
            id='search'
            name='search'
            placeholder='Search by Name, Level, etc '
            type='search'
          />
        </div>
      </div>
    </form>
  );
};

export default LearnersSearch;
