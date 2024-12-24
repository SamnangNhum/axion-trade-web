import Link from "next/link";
import Image from "next/image";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import { useTranslation } from "@/app/i18n";

const getNewEvent = async () => {
  const response = await fetch(
    `${process.env.NEXT_APP_API_URL}/api/blogs?populate=*`,
    { next: { revalidate: 6 } }
  );
  return response.json();
};

const PostAndEvent = async ({
  params,
}: {
  params: Promise<{ lng: string }>;
}) => {
  const { lng } = await params;
  const newData = await getNewEvent();
  const { t } = await useTranslation(lng);

  // Extract data from the API response
  const posts = newData?.data || [];
  const latestPosts = posts.slice(0, 2); // Get the latest 2 posts
  const remainingPosts = posts.slice(2); // Get all posts except the latest 2

  return (
    <div>
      {/* PageTitle */}
      <PageTitle
        title={t("posts-&-events")}
        description={t("get-updated-to")}
      />

      {/* Latest Posts Section */}
      <section className="px-36 py-16 max-sm:px-16 max-sm:pb-0 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:gap-5">
          {latestPosts.map((post: any) => (
            <div key={post.id}>
              <Image
                src={
                  post.Cover?.formats?.large?.url
                    ? `${process.env.NEXT_APP_API_URL}${post.Cover.formats.large.url}`
                    : "/assets/images/nothing-image.jpg"
                }
                width={1000}
                height={700}
                className="object-cover h-96 w-full cursor-pointer"
                alt={post.Cover?.name || "Post image"}
              />
              <div className="grid grid-cols-2 gap-4 my-2">
                <Description
                  description={new Date(
                    post.PublishedDate
                  ).toLocaleDateString()}
                  otherClass={"line-clamp-3"}
                />
                <div className="flex justify-end">
                  <Link
                    className="text-blue-500"
                    href={`/posts-events/${post.Slug || post.id}`}
                  >
                    {t("read-more")}
                  </Link>
                </div>
              </div>
              <Description
                description={post.Title || ""}
                otherClass={"line-clamp-3"}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Remaining Posts Section */}
      <section className="px-36 pb-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-3 gap-20 max-md:grid-cols-1 max-md:gap-5">
          {remainingPosts.map((post: any) => (
            <div key={post.id}>
              <Image
                src={
                  post.Cover?.formats?.small?.url
                    ? `${process.env.NEXT_APP_API_URL}${post.Cover.formats.small.url}`
                    : "/assets/images/nothing-image.jpg"
                }
                width={500}
                height={500}
                className="object-cover h-64 w-full cursor-pointer"
                alt={post.Cover?.name || "Event image"}
              />
              <div className="grid grid-cols-2 gap-4 my-2">
                <Description
                  description={new Date(
                    post.PublishedDate
                  ).toLocaleDateString()}
                  otherClass={"line-clamp-3"}
                />
                <div className="flex justify-end">
                  <Link
                    className="text-blue-500"
                    href={`/posts-events/${post.Slug || post.id}`}
                  >
                    {t("read-more")}
                  </Link>
                </div>
              </div>
              <Description
                description={post.Description[0]?.children[0]?.text || ""}
                otherClass={"line-clamp-3"}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PostAndEvent;
