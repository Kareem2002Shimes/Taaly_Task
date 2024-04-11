'use client';

import { Pages, Role, Routes } from '@/_constants/enums';
import useFormFields from '@/_hooks/useFormFields';
import useFormValidations from '@/_hooks/useFormValidations';
import { IFormField } from '@/_types/app';
import { zodResolver } from '@hookform/resolvers/zod';
import FormFields from '../formFields/FormFields';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { auth, db } from '@/_firebase/config';
import { ClipLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { useAuth } from '@/_providers/AuthContextProvider';
import Cookies from 'js-cookie';
import { doc, setDoc } from 'firebase/firestore';
const Form = () => {
  const { login, register } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split('/')[1];
  const { getValidationSchema } = useFormValidations({ slug });
  const { getFormFields } = useFormFields({ slug });

  const DEFAULT_VALUES: any = {};
  for (const field of getFormFields()) {
    DEFAULT_VALUES[field.name] = '';
  }

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<any>({
    resolver: zodResolver(getValidationSchema()),
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
  });

  const NavigateLink = ({
    slug,
    desc,
    linkText,
  }: {
    slug: string;
    desc: string;
    linkText: string;
  }) => {
    return (
      <div className='mt-6 flex items-center gap-2'>
        <p className='text-sm font-medium text-black'>{desc}</p>
        <Link
          href={`/${slug}`}
          className='text-sm font-medium text-[#B1B0B8] hover:underline'
        >
          {linkText}
        </Link>
      </div>
    );
  };
  const renderButtonText = (): string | null => {
    switch (slug) {
      case Pages.LOGIN:
        return 'Login';
      case Pages.SIGNUP:
        return 'Create account';
      case Pages.FORGOT_PASSWORD:
        return 'Continue';
      case Pages.VERIFY_ACCOUNT:
        return 'Resend Verification Email';
      case Pages.RESET_PASSWORD:
        return 'Change Password';
      case Pages.ENTER_OTP:
        return 'Confirm';
      default:
        return null;
    }
  };
  const renderNavigateLink = (): React.ReactNode | null => {
    switch (slug) {
      case Pages.LOGIN:
        return (
          <NavigateLink
            slug={Pages.SIGNUP}
            desc='Don’t have an account yet?'
            linkText='Sign up now'
          />
        );
      case Pages.SIGNUP:
        return (
          <NavigateLink
            slug={Pages.LOGIN}
            desc='Already have an account?'
            linkText='Login'
          />
        );
      default:
        return null;
    }
  };
  const onSubmit = useCallback(async (data: any) => {
    switch (slug) {
      case Pages.LOGIN:
        const loginResponse = await login(data);
        if (loginResponse?.user) {
          reset();
          router.replace(`/${Routes.PROFILE}`);
          Cookies.set('access_token', loginResponse.user.accessToken);
          toast.success('You have been logged in successfully');
        }
        break;
      case Pages.SIGNUP:
        const registerResponse = await register(data);
        if (registerResponse?.user) {
          reset();
          const {
            displayName,
            email,
            emailVerified,
            phoneNumber,
            photoURL,
            uid,
          } = registerResponse?.user;
          const docRef = doc(db, `/users/${uid}`);
          setDoc(docRef, {
            id: uid,
            displayName,
            role: Role.USER,
            email,
            emailVerified,
            photoURL,
            phoneNumber,
          });
          router.replace(`/${Routes.PROFILE}`);
          Cookies.set('access_token', registerResponse.user.accessToken);
          toast.success('You have been registered successfully');
        }
        break;
      default:
        break;
    }
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {getFormFields().map((field: IFormField) => (
        <div key={field.name} className='mb-3'>
          <FormFields {...field} control={control} errors={errors} />
        </div>
      ))}

      {slug === Pages.LOGIN && (
        <Link
          href={`/${Pages.FORGOT_PASSWORD}`}
          className='text-sm font-medium text-[#B1B0B8] hover:underline block text-center mb-4'
        >
          Forgot Password?
        </Link>
      )}
      <button
        className={`submit-btn element-center mx-auto ${
          isSubmitting ? 'bg-slate-400 ' : ''
        }`}
        type='submit'
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <ClipLoader
            color='white'
            size={24}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        ) : (
          renderButtonText()
        )}
      </button>
      {renderNavigateLink()}
    </form>
  );
};

export default Form;
