import Link from "next/link";
import Image from "next/image";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";

export default function PostAndEvent() {
  const postItems = [
    {
      date: "September 27, 2024",
      link: "/",
      linkText: "Press Release",
      imageSrc: "/nothing-image.jpg",
      despcription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
      date: "September 27, 2024",
      link: "/",
      linkText: "Press Release",
      imageSrc: "/nothing-image.jpg",
      despcription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
  ];
  const items = [
    {
      date: "September 27, 2024",
      link: "/",
      linkText: "Press Release",
      imageSrc: "/nothing-image.jpg",
      despcription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
      date: "September 27, 2024",
      link: "/",
      linkText: "Press Release",
      imageSrc: "/nothing-image.jpg",
      despcription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
      date: "September 27, 2024",
      link: "/",
      linkText: "Press Release",
      imageSrc: "/nothing-image.jpg",
      despcription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
  ];
  return (
    <div>
      {/* PageTitle */}
      <PageTitle
        title="Posts & Events"
        description="Get updated to our latest activities and events."
      />
      {/* Post  & Events Section*/}

      <section className="px-36 py-16 max-sm:px-16 max-sm:pb-0 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:gap-5">
          {postItems.map((item, index) => (
            <div key={index}>
              <Image
                src={item.imageSrc}
                width={1000}
                height={700}
                alt="Image description"
              />
              <div className="grid grid-cols-2 gap-4 my-2">
                <Description description={item.date} otherClass={""} />
                <div className="flex justify-end">
                  <Link className="text-blue-500" href={item.link}>
                    {item.linkText}
                  </Link>
                </div>
              </div>
              <Description description={item.despcription} otherClass={""} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-36 pb-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-3 gap-20 max-md:grid-cols-1 max-md:gap-5">
          {items.map((item, index) => (
            <div key={index}>
              <Image
                src={item.imageSrc}
                width={500}
                height={500}
                alt="Image description"
              />
              <div className="grid grid-cols-2 gap-4 my-2">
                <Description description={item.date} otherClass={""} />
                <div className="flex justify-end">
                  <Link className="text-blue-500" href={item.link}>
                    {item.linkText}
                  </Link>
                </div>
              </div>
              <Description description={item.despcription} otherClass={""} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
