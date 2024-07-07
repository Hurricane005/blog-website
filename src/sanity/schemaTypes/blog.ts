import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title of blog article",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug of your blogarticle",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "titleImage",
      type: "image",
      title: "Title image",
    }),
    defineField({
      name: "smallDescription",
      type: "text",
      title: "Small Description",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    }),
  ],
});
