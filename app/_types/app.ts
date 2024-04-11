import { Role } from '@/_constants/enums';
import { User } from 'firebase/auth';

export interface IOption {
  label: string;
  value: string;
}
export interface IFormField {
  name: string;
  label?: string;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'checkbox'
    | 'radio'
    | 'select'
    | 'hidden'
    | 'textarea';
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  options?: IOption;
  id?: string;
}
export interface IFormFieldsVariables {
  slug: string;
}
export type ProfileType = {
  status: number;
  email: string;
  name: string | null;
  lastName: string | null;
  firstName: string | null;
  id: string;
  password: boolean | null;
};

export type UserType = User & {
  id: string;
  email: string;
  phoneNumber: string;
  role: Role;
  rating?: number;
  organization?: string;
  hoursSpent?: number;
  program?: string;
  level?: string;
};
