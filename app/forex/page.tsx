import Description from "../shared/description";
import SubTitle from "../shared/sub-title";
import Title from "../shared/title";
import { MdArrowForwardIos } from "react-icons/md";

export default function Forex() {
  {
    /* Forex Contract & Specifications */
  }
  const Contract = [
    {
      title: "Contract Size",
      amounts: "100,000",
      description:
        "1 standard Lot Contract Size on Axion Trade is equivalent to 100,000 units of base currency. E.g. 1 standard lot of EUR/USD is €100,000.",
    },
    {
      title: "Minimum Lot",
      amounts: "0.01",
      description:
        "The minimum lot size on Axion Trade is 0.01 which is equivalent to 1,000 units of base currency.",
    },
    {
      title: "Incremental Steps",
      amounts: "0.01",
      description:
        "The minimum incremental lot size on Axion Trade is 0.01 which is equivalent to 1,000 units of base currency.",
    },
    {
      title: "Maximum Lot",
      amounts: "100",
      description:
        "The minimum lot size on Axion Trade is 0.01 which is equivalent to 1,000 units of base currency.",
    },
  ];
  {
    /* End Forex Contract & Specifications */
  }

  return (
    <div>
      {/* page-title */}
      <section className="text-center bg-[url('../assets/images/pages-bg.jpg')] bg-cover bg-center py-48 px-20 max-md:py-36 max-md:px-10">
        <Title otherClass="text-white" title="Forex" />
        <Description
          otherClass="text-white"
          description="Trade popular forex pairs like EUR/USD and GBP/USD! Come and trade over 50+ forex pairs with Axion Trade."
        />
      </section>
      {/* End page-title */}

      {/* Forex Contract & Specifications */}
      <div className="px-36 max-md:px-10 max-xl:px-10">
        <section className="pt-16">
          <SubTitle
            otherClass="mb-7"
            subTitle="Forex Contract & Specifications"
          />
        </section>
        <section className="grid grid-cols-2 gap-5 list-none max-md:list-item">
          {Contract.map((items) => (
            <div className="pb-5 max-md:pb-10">
              <section className="flex bg-gray-100 py-3 px-5 border-l-8 border-blue-700">
                <Description
                  otherClass="text-lg font-bold"
                  description={items.title}
                />
                <section className="flex items-center mx-2">
                  <MdArrowForwardIos />
                </section>
                <Description
                  otherClass="text-blue-700 text-lg font-bold"
                  description={items.amounts}
                />
              </section>
              <section className="mt-3">
                {/* <p>{items.description}</p> */}
                <Description
                  otherClass="text-md text-gray-600"
                  description={items.description}
                />
              </section>
            </div>
          ))}
        </section>
      </div>
      {/* End Forex Contract & Specifications */}

      <div className="pt-16">
          <SubTitle otherClass="text-center mx-96 px-52" subTitle="Axion Trade offers two types of spread to our clients:"/>
      </div>
    </div>
  );
}
