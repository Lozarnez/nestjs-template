import { z } from 'zod';

export const createPostZodDto = z
  .object({
    title: z
      .string()
      .min(5, { message: 'Title must be between 5 and 30 characters' })
      .max(30),
    content: z.string().min(5),
    authorId: z.number().positive(),
  })
  .required();

export type CreatePostZodDto = z.infer<typeof createPostZodDto>;
