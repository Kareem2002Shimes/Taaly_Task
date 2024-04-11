import type { IFormField, IFormFieldsVariables } from '@/_types/app';
import { Pages } from '@/_constants/enums';

const useFormFields = ({ slug }: IFormFieldsVariables) => {
  const loginFields = (): IFormField[] => [
    {
      label: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'Example@mail.com',
      autoFocus: true,
    },
    {
      label: 'password',
      name: 'password',
      placeholder: '6+ strong characters',
      type: 'password',
    },
  ];

  const signupFields = (): IFormField[] => [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Example@mail.com',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: '6+ strong characters',
    },
    {
      label: 'Confirm Password',
      name: 'confirm_password',
      type: 'password',
      placeholder: '6+ strong characters',
    },
  ];

  const forgotFields = (): IFormField[] => [
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      autoFocus: true,
    },
  ];

  const resetFields = (): IFormField[] => [
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      autoFocus: true,
    },
    {
      label: 'Confirm Password',
      name: 'confirm_password',
      type: 'password',
    },
  ];

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Pages.LOGIN:
        return loginFields();
      case Pages.SIGNUP:
        return signupFields();
      case Pages.FORGOT_PASSWORD:
        return forgotFields();
      case Pages.RESET_PASSWORD:
        return resetFields();

      case Pages.PROFILE_DETAILS:
        return signupFields();

      default:
        return [];
    }
  };

  return {
    getFormFields,
  };
};

export default useFormFields;
