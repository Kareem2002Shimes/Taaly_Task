import Form from '@/_components/auth/Form';
import Image from 'next/image';

const Signup = () => {
  return (
    <div className='flex-1'>
      <div className='p-10 lg:p-20'>
        <h3 className='text-heading font-[600] text-2xl mb-6'>
          Create An Account
        </h3>
        <h4 className='font-[600] text-xl mb-6'>Signup Here</h4>
        <Form />
      </div>
      <Image
        src='/assets/images/capa.svg'
        alt='capa img'
        width={800}
        height={400}
      />
    </div>
  );
};

export default Signup;
