import { defineCollection, z } from "astro:content";

import { strapiLoader } from "@/strapi-loader";
// import { strapiLoader } from "strapi-community-astro-loader"

// Define the Strapi posts collection
const blog = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});

const landing = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      sections: z.array(
        z.object({
          title: z.string(),
          content: z.string(),
          image: z.string().optional(),
        })
      ),
      cta: z.object({
        text: z.string(),
        link: z.string(),
      }),
    }),
});

const about = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      name: z.string(),
      image: z.string(),
      bio: z.string(),
      socialLinks: z.array(
        z.object({
          platform: z.string(),
          url: z.string(),
          icon: z.string(),
        })
      ),
    }),
});

const strapiPostsLoader = defineCollection({
  loader: strapiLoader({ contentType: "article" }),
});

export const collections = {
  blog,
  landing,
  about,
  strapiPostsLoader,
};
