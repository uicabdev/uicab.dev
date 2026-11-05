import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  order: z.number(),
  status: z.enum(['done', 'in-progress']).default('done'),
});

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  draft: z.boolean().default(false),
});

export const collections = {
  'projects-es': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects/es' }),
    schema: projectSchema,
  }),
  'projects-en': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects/en' }),
    schema: projectSchema,
  }),
  'blog-es': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog/es' }),
    schema: blogSchema,
  }),
  'blog-en': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog/en' }),
    schema: blogSchema,
  }),
};
