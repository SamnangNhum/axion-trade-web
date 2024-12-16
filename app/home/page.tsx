import Description from "../shared/description";
import Title from "../shared/title";

export default function Home() {
  function setSrc(arg0: any) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="text-center bg-[url('../assets/images/bg-axion-trade.png')] bg-cover bg-center w-full p-80">
      <Title title={"Simple. Reliable. Innovative."} otherClass="text-white"/>
      <Description
        description={
          "Get access to 100+ different markets with over 1,000+ market instruments when you trade with Axion Trade."
        }
        otherClass={"text-white p-3"}
      />
    </div>

  )

}
