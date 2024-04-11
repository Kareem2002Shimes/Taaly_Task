// import { UserRole } from '@prisma/client';
import { z } from 'zod';

const userData = {
  first_name: z.string().trim().min(1, { message: 'First Name is required' }),
  last_name: z.string().trim().min(1, { message: 'Last Name is required' }),
  email: z.string().trim().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(40),
  confirm_password: z
    .string()
    .min(8, { message: 'Confirm Password is required' }),
};
export const updateUser = z
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
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .max(40)
      .optional(),
    confirm_password: z
      .string()
      .min(8, { message: 'Confirm Password is required' })
      .optional(),
    id: z.string().min(1, { message: 'User Id is required' }),
    // role: z.nativeEnum(UserRole),
    active: z.boolean(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password do not match',
    path: ['confirm_password'],
  });

export const createUser = z
  .object({
    ...userData,
    // role: z.nativeEnum(UserRole),
    active: z.boolean(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password do not match',
    path: ['confirm_password'],
  });
