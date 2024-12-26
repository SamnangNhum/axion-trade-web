import Link from "next/link";
import Image from "next/image";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import { useTranslation } from "@/app/i18n";
import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";

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
      <section className="px-36 py-16 max-sm:px-10 max-sm:pb-0 max-md:px-10 max-xl:px-10">
        <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-5 max-xl:gap-6">
          {latestPosts.map((post: any) => (
            <div key={post.id}>
              <BlurFade delay={0.25 * 0.05} inView>
                <Image
                  src={
                    post.Cover?.formats?.large?.url
                      ? `${process.env.NEXT_APP_API_URL}${post.Cover.formats.large.url}`
                      : "/assets/images/nothing-image.jpg"
                  }
                  width={1000}
                  height={700}
                  className=" h-96 w-full max-md:h-[200px] max-xl:h-[200px] object-cover cursor-pointer"
                  alt={post.Cover?.name || "Post image"}
                />
              </BlurFade>
              <div className="grid grid-cols-2 gap-4 my-2">
                <BlurFade delay={0.25 * 0.05} inView>
                  <BlurIn
                    word={new Date(post.PublishedDate).toLocaleDateString()}
                    className="text-md text-start my-2 max-xl:text-md"
                  />
                </BlurFade>

                <div className="flex justify-end">
                  <BlurFade delay={0.25 * 0.05} inView>
                    <Link
                      className="text-blue-500"
                      href={`/posts-events/${post.Slug || post.id}`}
                    >
                      <BlurIn
                        word={t("read-more")}
                        className="text-md text-start my-2 max-xl:text-md"
                      />
                    </Link>
                  </BlurFade>
                </div>
              </div>
              <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={post.Title || ""}
                  className="text-md text-start my-2 max-xl:text-md"
                />
              </BlurFade>
            </div>
          ))}
        </div>
      </section>

      {/* Remaining Posts Section */}
      <section className="px-36 pb-16 max-sm:px-10 max-sm:py-5 max-md:px-10 max-xl:px-10">
        <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-md:gap-5 max-xl:gap-6">
          {remainingPosts.map((post: any) => (
            <div key={post.id}>
              <BlurFade delay={0.25 * 0.05} inView>
                <Image
                  src={
                    post.Cover?.formats?.small?.url
                      ? `${process.env.NEXT_APP_API_URL}${post.Cover.formats.small.url}`
                      : "/assets/images/nothing-image.jpg"
                  }
                  width={500}
                  height={500}
                  className=" h-64 w-full cursor-pointerb max-md:h-[200px] max-xl:h-[200px] object-cover"
                  alt={post.Cover?.name || "Event image"}
                />
              </BlurFade>
              <div className="grid grid-cols-2 gap-4 my-2">
                   <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={new Date(
                    post.PublishedDate
                  ).toLocaleDateString()}
                  className="text-md text-start my-2 line-clamp-3 max-xl:text-md"
                />
              </BlurFade>
                 
                <div className="flex justify-end">
                  <BlurFade delay={0.25 * 0.05} inView>
                    <Link
                      className="text-blue-500"
                      href={`/posts-events/${post.Slug || post.id}`}
                    >
                      <BlurIn
                        word={t("read-more")}
                        className="text-md text-start my-2 max-xl:text-md"
                      />
                    </Link>
                  </BlurFade>
                </div>
              </div>
         
                 <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={post.Description[0]?.children[0]?.text || ""}
                  className="text-md text-start my-2 line-clamp-3 max-xl:text-md"
                />
              </BlurFade>
                 
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PostAndEvent;
