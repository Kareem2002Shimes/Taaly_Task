import Icon, { SvgIconType } from '../Icon';

type TotalInfo = { icon: SvgIconType; title: string; count: number }[];

const TotalInfo = () => {
  const TotalInfo: TotalInfo = [
    { icon: 'user-group', title: 'Total Learners', count: 12 },
    { icon: 'user-group', title: 'Total Language Buddies', count: 12 },
    { icon: 'building-library', title: 'Total Organizations', count: 12 },
    { icon: 'academic-cap', title: 'Total Projects', count: 12 },
  ];

  return (
    <ul className='grid grid-cols-4 gap-6 h-[104px]'>
      {TotalInfo.map((item, i) => (
        <li
          key={i}
          className='bg-primary rounded-[16px] element-center gap-4 p-4'
        >
          <div className='bg-white w-10 h-10 rounded-full element-center'>
            <Icon name={item.icon} className='text-[#8C8A96]' />
          </div>
          <div className='flex flex-col text-white'>
            <strong className='font-[700] text-base'>{item.title}</strong>
            <span className='font-[700] text-lg'>{item.count}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TotalInfo;
