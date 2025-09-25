import { z, defineCollection, reference } from "astro:content";

// Every collection must reflect Decap's config.yml collection schema
// In order to be able to optimize images with Astro built-in components, like <Image />, we first must use this image helper 
// Doc: https://docs.astro.build/en/guides/images/#images-in-content-collections

const detailsCollection = defineCollection({
	type: "data",
	schema: () =>
		z.object({
			name: z.string(),
			email: z.string(),
			phone: z.string(),
			description: z.string(),
			domain: z.string(),
			keywords: z.array(z.string()).optional(),
		}),
});

export const collections = {
	details: detailsCollection,
};