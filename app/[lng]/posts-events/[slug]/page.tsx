import { notFound } from "next/navigation";
import Image from "next/image";
import Title from "@/app/shared/title";
import Description from "@/app/shared/description";
import PageTitle from "@/app/shared/pages-title";

const getSinglePostBySlug = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_APP_API_URL}/api/blogs?filters[Slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 6 } }
  );
  if (!response.ok) return null;
  const data = await response.json();
  if (data?.data?.length === 0) return null; // If no post is found
  return data.data[0]; // Return the first matching post
};

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getSinglePostBySlug(slug);

  if (!post) {
    return notFound(); // Handle not found
  }

  const coverImage = post.Cover?.formats?.large?.url
    ? `${process.env.NEXT_APP_API_URL}${post.Cover.formats.large.url}`
    : "/assets/images/nothing-image.jpg";

  return (
    <div className="max-md:px-0 max-xl:px-0">
      <div className="bg-black py-12"></div>
      {/* Title Section */}

      <Title
        title={post.Title || "Blog Post"}
        otherClass={"text-4xl font-bold text-center mb-6 mt-16 max-md:mt-10"}
      />
      <div className="px-36 max-md:px-10">
        {/* Cover Image */}
        <Image
          src={coverImage}
          width={1000}
          height={700}
          alt={post.Cover?.name || "Blog Cover"}
          className="object-cover w-full h-[700px] max-md:h-[200px] rounded-md mb-8"
        />

        {/* Published Date */}
        <Description
          description={`Published on: ${new Date(
            post.PublishedDate
          ).toLocaleDateString()}`}
          otherClass={"text-gray-500 text-center mb-8"}
        />

        {/* Blog Content */}
        <div className="prose max-w-none mx-auto mb-16">
          {post.Description.map((block: any, index: number) => (
            <p key={index} className="mb-4">
              {block.children.map((child: any) => child.text).join(" ")}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
