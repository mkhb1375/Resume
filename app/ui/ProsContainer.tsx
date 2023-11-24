import Pros from "./Pros";
import ProsData from "./Api/ProsData";

interface Data {
  image: string;
  title: string;
  text: string;
}

export default function ProsContainer() {
  const prosData = ProsData;

  return (
    <div className="flex flex-wrap justify-center mt-[6vh] lg:mt-[200px] gap-[3vw]">
      {prosData.map((data: Data, index) => (
        <Pros
          key={index}
          image={data.image}
          title={data.title}
          text={data.text}
        />
      ))}
    </div>
  );
}
