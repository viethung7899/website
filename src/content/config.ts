import { z, defineCollection } from "astro:content"

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    screenshot: z.string().optional(),
    github: z.string().url(),
    demo: z.string().optional(),
    technology: z.array(z.string()),
    date: z.date(),
  }),
})

const timePoint = z.object({
  month: z.number().min(1).max(12).step(1),
  year: z.number(),
})

const experienceCollection = defineCollection({
  schema: z.object({
    role: z.string(),
    place: z.string(),
    url: z.string().url(),
    technology: z.array(z.string()),
    start: timePoint,
    end: timePoint.optional(),
  }),
})

export const collections = {
  projects: projectCollection,
  experience: experienceCollection,
}