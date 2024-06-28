import { fullBlog } from "@/lib/interface";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { PortableText } from "next-sanity";

export const dynamic = "force-dynamic";

async function getData(slug: string) {
  const query = `
    *[
  _type == "blog" && slug.current == "${slug}"
] {
  "currentSlug": slug.current,
    title,
    content,
    titleImage
}[0]
    `;

  const data = await client.fetch(query);
  return data;
}

type Props = {
  params: {
    slug: string;
  };
};
const BlogPage = async ({ params }: Props) => {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="mt-8 sm:mt-16">
      <h1>
        <span className="block text-lg text-center text-primary font-semibold tracking-wide uppercase">
          Hurricane Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlForImage(data.titleImage)}
        alt={data.title}
        width={1200}
        height={800}
        priority
        className="rounded-lg mt-8"
      />
      <div className="mt-16 prose prose-lg mx-auto dark:prose-invert sm:prose-headings:text-3xl prose-headings:text-xl prose-headings:text-primary prose-li:marker:text-primary ">
        <PortableText value={data.content} />
      </div>
    </div>
  );
};
export default BlogPage;
