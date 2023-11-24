import Cards from "./Api/Cards";
export default function Video() {
  type Card = {
    url: string;
    top: number;
    right: number;
  };

  return (
    <div>
      <img
        className="mx-auto mt-[10vh] w-full"
        src="Video/Group 34774.png"
        alt="Logo"
      />

      <div className="relative w-[75vw] lg:w-[60vw] mx-auto">
        <img
          className="mx-auto w-full cursor-pointer "
          src="Video/Group 34778.png"
          alt="Video"
        />
        {Cards.map((card: Card, idx: number) => {
          return (
            <img
              key={idx}
              style={{ right: ` ${card["right"]}%`, top: ` ${card["top"]}%` }}
              className={` my-scale cursor-pointer w-[15vw] absolute`}
              src={card["url"]}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}
