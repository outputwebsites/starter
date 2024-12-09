import { z, defineCollection, reference } from "astro:content";

// Every collection must reflect Decap's config.yml collection schema
// In order to be able to optimize images with Astro built-in components, like <Image />, we first must use this image helper 
// Doc: https://docs.astro.build/en/guides/images/#images-in-content-collections

const blogsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.array(reference("author")),
			date: z.date(),
			tags: z.array(z.string()),
			image: image(),
			imageAlt: z.string(),
		}),
});

const authorsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			bio: z.string(),
			photo: image().or(z.string()),
		}),
});

export const collections = {
	blog: blogsCollection,
	author: authorsCollection,
};