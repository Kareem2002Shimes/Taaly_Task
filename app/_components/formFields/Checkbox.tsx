import { IFormField } from '@/_types/app';
import { Controller } from 'react-hook-form';

interface Props extends IFormField {
  errors: any;
  control: any;
}
const Checkbox = ({ label, name, disabled, errors, control }: Props) => {
  return (
    <>
      <label htmlFor={name} className='label cursor-pointer gap-3 p-0 '>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              type='checkbox'
              disabled={disabled}
              {...field}
              name={name}
              id={name}
              className='checkbox-primary checkbox h-5 w-5 rounded-md'
            />
          )}
        />

        <span>{label}</span>
      </label>
    </>
  );
};

export default Checkbox;
