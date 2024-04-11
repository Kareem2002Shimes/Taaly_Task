import Image from 'next/image';

const AuthImage = () => {
  return (
    <div className='hidden lg:block bg-primary relative flex-1 rounded-[14px]'>
      <div className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='mb-10 element-center'>
          <Image
            src='/assets/images/logo.svg'
            alt='Taaly Brand'
            width={200}
            height={100}
          />
        </div>
        <q className='text-white font-[600] text-xl'>
          Het verbinden van nieuwkomers met de samenleving door hun taal te
          verbeteren
        </q>
      </div>
    </div>
  );
};

export default AuthImage;
