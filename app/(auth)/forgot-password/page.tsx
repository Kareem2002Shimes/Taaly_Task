import Form from '@/_components/auth/Form';
import Image from 'next/image';

const ForgotPassword = () => {
  return (
    <div className='flex-1'>
      <div className='p-10 lg:p-20'>
        <h3 className='text-heading font-[600] text-2xl mb-6'>
          Forgot your Password
        </h3>
        <h4 className='font-[600] text-xl mb-6'>Type your email here</h4>
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

export default ForgotPassword;
