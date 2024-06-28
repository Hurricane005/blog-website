import { simpleBlogCard } from "@/lib/interface";
import { client } from "../../sanity/lib/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `
  *[_type == "blog"] | order(_createdAt desc) {
    title, 
      smallDescription, 
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 sm:mt-20 gap-4 sm:gap-8">
      {data.map((blog, index) => (
        <Card className="" key={index}>
          <Image
            className="rounded-lg h-[250px] object-cover"
            src={urlForImage(blog.titleImage)}
            alt={blog.title}
            width={500}
            height={300}
          />
          <CardHeader>
            <CardTitle className="text-primary">{blog.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-6">
            <p className="line-clamp-3">{blog.smallDescription}</p>
            <Button asChild>
              <Link
                className="uppercase font-semibold text-lg"
                href={`/blog/${blog.currentSlug}`}
              >
                Read more
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
