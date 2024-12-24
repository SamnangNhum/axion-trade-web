import Link from "next/link";
import Button from "../../shared/button";
import Description from "../../shared/description";
import Title from "../../shared/title";
import Image from "next/image";

const getNewEvent = async () => {
  const response = await fetch(
    `${process.env.NEXT_APP_API_URL}/api/blogs?populate=*`,
    { next: { revalidate: 6 } }
  );
  return response.json();
};

export const NewAndEventSection = async () => {
  const newData = await getNewEvent();
  const items = newData?.data || []; // Ensure items is extracted from API response

  return (
    <div>
      <section className="px-36 pt-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 my-2">
          <div>
            <Title
              title={"News & Events"}
              otherClass={"max-md:text-3xl max-md:text-center"}
            />
            <Description
              description={"Get updated on our latest activities and events."}
              otherClass={
                "text-gray-500 my-2 max-md:px-0 max-md:text-center max-xl:px-0"
              }
            />
          </div>
          <div className="flex justify-end max-md:justify-center">
            {/* View All Button */}
            <Link href="/posts-events">
              <Button button={"View All"} />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-20 max-md:grid-cols-1 max-md:gap-5">
          {items.map((item: any) => (
            <div key={item.id}>
              <Link href={`/posts-events/${item.Slug || item.id}`}>
                <Image
                  src={
                    item.Cover?.formats?.medium?.url
                      ? `${process.env.NEXT_APP_API_URL}${item.Cover.formats.medium.url}`
                      : "/assets/images/nothing-image.jpg"
                  }
                  width={500}
                  height={500} // Set a fixed height
                  alt={item.Cover?.name || "Event image"}
                  className="object-cover h-64 w-full cursor-pointer" // Ensure consistent height and cover the area
                />
              </Link>
              <div className="grid grid-cols-2 gap-4 my-2">
                <Description
                  description={new Date(
                    item.PublishedDate
                  ).toLocaleDateString()}
                  otherClass={""}
                />
                <div className="flex justify-end">
                  {/* Link to Single Page */}
                  <Link
                    className="text-blue-500"
                    href={`/posts-events/${item.Slug || item.id}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <Description
                description={item.Description[0]?.children[0]?.text || ""}
                otherClass={"line-clamp-3"}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
