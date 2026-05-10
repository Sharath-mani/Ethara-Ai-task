import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email(),
  password: z.string().min(6, 'Min 6 characters'),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const projectSchema = z.object({
  name: z.string().min(1, 'Project name required'),
  description: z.string().optional(),
});

export const addMemberSchema = z.object({
  email: z.string().email(),
});

export const taskSchema = z.object({
  title: z.string().min(1, 'Task title required'),
  description: z.string().optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'DONE']).optional(),
  priority: z.string().optional(),
  dueDate: z
    .string()
    .refine((val) => {
      if (!val) return true; // allow empty/undefined
      const d = new Date(val);
      return !isNaN(d.getTime());
    }, { message: 'Invalid date' })
    .optional(),
  assigneeId: z.string().min(1, 'Assignee required'),
});