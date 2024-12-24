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
  const latestPosts = items.slice(0, 3);
  return (
    <div>
      <div className="grid grid-cols-3 gap-20 max-md:grid-cols-1 max-md:gap-5 max-xl:gap-10">
        {latestPosts.map((item: any) => (
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
                description={new Date(item.PublishedDate).toLocaleDateString()}
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
              description={item.Title || ""}
              otherClass={"line-clamp-3"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
