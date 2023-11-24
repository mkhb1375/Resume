import Link from "next/link";

type StringArray = Array<string>;

const navList: StringArray = [
  "صفحه اصلی",
  "سرویس ها",
  "قیمت ها",
  "بلاگ متانکست",
  "لینک های مفید",
];

export default function Nav() {
  return (
    <div>
      <div>
        <div className="flex items-center flex lg:hidden justify-center w-full mx-auto ">
          <Link href={"/"}>
            <div className="flex items-center cursor-pointer  ">
              <img
                className="w-[6vw]"
                src="/Nav/Group 34760.png"
                alt="metanext-icon"
              />

              <div className="p-2 mr-[0.8vw]">
                <h2 className="text-right font-[800] text-[1.3rem]">متانکست</h2>
                <p className="font-[300] text-[0.8rem] text-grayed  w-max">
                  جایگاه خود را بهتر کنید
                </p>
              </div>
            </div>
          </Link>

          <div className=" flex items-center justify-between">
            <img
              className=" cursor-pointer w-[20vw] "
              src="/Nav/tel.png"
              alt="tel"
            />

            <Link href={"/login"}>
              <img
                className="w-[24vw] mt-[2vw] cursor-pointer my-scale"
                src="/Nav/demo.png"
                alt="demo"
              />
            </Link>

            <img
              className="w-[10vw] cursor-pointer"
              src="/Nav/lang.png"
              alt="language"
            />
          </div>
        </div>
        <ul className="lg:hidden flex w-[90vw] mx-auto mb-[10vh] text-[0.8rem] items-center justify-between">
          {navList.map((item, idx) => {
            if (idx === 1 || idx === 3 || idx === 4) {
              return (
                <div className="flex items-center justify-between   " key={idx}>
                  <li className="hover:text-hovered text-grayed cursor-pointer">
                    {item}
                  </li>
                  <select
                    className="bg-transparent mt-[-0.1rem] m-0 text-grayed"
                    name=""
                    id=""
                  ></select>
                </div>
              );
            } else {
              return (
                <div key={idx}>
                  <li className="hover:text-hovered   text-grayed cursor-pointer">
                    {item}
                  </li>
                </div>
              );
            }
          })}
        </ul>
      </div>
      <div className="flex items-center hidden lg:flex justify-between lg:w-[90vw] mx-auto ">
        <Link href={"/"}>
          <div className="flex items-center cursor-pointer  mr-[10px]">
            <img
              className="w-[3rem]"
              src="/Nav/Group 34760.png"
              alt="metanext-icon"
            />

            <div className="p-2 mr-[0.8vw]">
              <h2 className="text-right font-[800] text-[1.3rem]">متانکست</h2>
              <p className="font-[300] text-[0.8rem] text-grayed  w-max">
                جایگاه خود را بهتر کنید
              </p>
            </div>
          </div>
        </Link>
        <ul className="flex w-[44vw] text-[0.8rem] items-center justify-between">
          {navList.map((item, idx) => {
            if (idx === 1 || idx === 3 || idx === 4) {
              return (
                <div className="flex items-center justify-between   " key={idx}>
                  <li className="hover:text-hovered text-grayed cursor-pointer">
                    {item}
                  </li>
                  <select
                    className="bg-transparent mt-[-0.1rem] m-0 text-grayed"
                    name=""
                    id=""
                  ></select>
                </div>
              );
            } else {
              return (
                <div key={idx}>
                  <li className="hover:text-hovered   text-grayed cursor-pointer">
                    {item}
                  </li>
                </div>
              );
            }
          })}
        </ul>
        <div className="flex items-center justify-between">
          <img
            className=" cursor-pointer w-[10vw] "
            src="/Nav/tel.png"
            alt="tel"
          />

          <Link href={"/login"}>
            <img
              className="w-[12vw] mt-[2vw] cursor-pointer my-scale"
              src="/Nav/demo.png"
              alt="demo"
            />
          </Link>

          <img
            className="w-[5vw] cursor-pointer"
            src="/Nav/lang.png"
            alt="language"
          />
        </div>
      </div>
    </div>
  );
}
