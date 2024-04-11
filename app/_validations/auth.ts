import * as z from 'zod';

const userData = {
  // first_name: z.string().trim().min(1, { message: 'First Name is required' }),
  // last_name: z.string().trim().min(1, { message: 'Last Name is required' }),
  email: z.string().trim().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(40),
  confirm_password: z
    .string()
    .min(6, { message: 'Confirm Password is required' }),
};

export const loginSchema = z.object({
  email: z.string().trim().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(40),
});

export const signUpSchema = z
  .object(userData)
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password do not match',
    path: ['confirm_password'],
  });
export const ResetPasswordSchema = z
  .object({
    userId: z.string().optional(),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .max(40),
    confirm_password: z
      .string()
      .min(8, { message: 'Confirm Password is required' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password do not match',
    path: ['confirm_password'],
  });
export const verifyOTP = z.object({
  userId: z.string(),
  code: z.string().min(4, { message: 'Please enter 4 digits' }),
});

export const generateOTP = z.object({
  email: z.string().trim().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
});

export const updateProfile = z
  .object({
    first_name: z
      .string()
      .trim()
      .min(1, { message: 'First Name is required' })
      .optional(),
    last_name: z
      .string()
      .trim()
      .min(1, { message: 'Last Name is required' })
      .optional(),
    email: z.string().trim().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    password: z.string().optional(),
    confirm_password: z.string().optional(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password do not match',
    path: ['confirm_password'],
  });

export type IResetPasswordType = z.infer<typeof ResetPasswordSchema>;

export type ILogin = z.infer<typeof loginSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;
export type IUpdateProfile = z.infer<typeof updateProfile>;
export type IGenerateOTP = z.infer<typeof generateOTP>;
export type IResetPassword = Omit<IResetPasswordType, 'confirm_password'>;
