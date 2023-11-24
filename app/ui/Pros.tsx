interface Props {
  image: string;
  title: string;
  text: string;
}

export default function Pros({ image, title, text }: Props) {
  return (
    <div
      className="flex p-[0.5rem]  py-[1rem] cursor-pointer items-center justify-around 
     mt-[1.5rem] w-[45vw] rounded-[1rem] 
    border border-[white] hover:border-[#0CA0A2]
     border-[0.15rem] bg-[#F5F8FC] hover:bg-[#3959F81A]"
    >
      <img className="w-[12vw] max-h-[12vw]" src={image} alt={title} />
      <div className="w-[25vw] mr-[2vw]">
        <h3 className="text-[1.3rem] font-[700]">{title}</h3>
        <p className="text-[0.8rem] text-grayed font-[400] mt-[0.5rem]">
          {text}
        </p>
      </div>
    </div>
  );
}
