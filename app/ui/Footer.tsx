type FooterImages = Array<string>;
type FooterData = Array<Array<string | [string, string]>>;

export default function Footer() {
  const footerImages: FooterImages = [
    "/Footer/facebook.png",
    "/Footer/Linkedin.png",
    "/Footer/instagram.png",
    "/Footer/Telegram.png",
  ];

  const footerData: FooterData = [
    ["صفحه اصلی", "قیمت ها", "خدمات", "بلاگ", "درباره ما"],
    [
      ["حسابداری آنلاین", "/Footer/Group 70202.png"],
      ["مدیریت نیروی کار", "/Footer/Group 70202 (1).png"],
      ["گفتوگو با مشتریان", "/Footer/Group 70202 (2).png"],
      ["اپلیکیشن فروشگاهی", "/Footer/Group 70202 (3).png"],
      ["سایت فروش", "/Footer/Group 70202 (4).png"],
    ],
    ["تماس با ما", "سوالات متداول", "همکاری در فروش"],
  ];

  return (
    <div className="mt-[3vh]">
      <div className="flex  items-center justify-between p-6 text-[white] bg-[#011627] footer-grid">
        <div className="flex items-center">
          <img src="/Footer/Group 34738 (1).png" alt="" />

          <div className="mr-[10px]">
            <h1 className="text-[1.7rem] font-[800]">تماس با ما</h1>
            <p className="text-[0.75rem] font-[400] text-[#bcbcbd]">
              در تمامی روز های هفته ۲۴ ساعته در خدمتیم
            </p>
          </div>
        </div>
        <h1 className="text-[2rem] font-[700]">۰۹۱۵۲۶۶۳۰۴۵</h1>
      </div>
      <div className="lg:flex justify-between items-center px-[4vw] py-[5vh] border-solid border-b-[1px] border-[#BDC5DDCC]">
        <div className="flex items-center ">
          <img
            className=""
            src="/Footer/Group 34760 (1).png"
            alt="metanext-icon"
          />

          <div className="mx-auto lg:mx-0 lg:mr-[20px]">
            <h2 className="lg:text-right font-[800] text-[2rem]">متانکست</h2>
            <p className="font-[400] text-[1.2rem] text-grayed">
              جایگاه خود را بهتر کنید
            </p>
          </div>
        </div>
        <div className="flex items-center mx-auto lg:mx-0 w-fit">
          {footerImages.map((icon, idx) => (
            <img
              className="w-[8vw] lg:w-[3vw] cursor-pointer p-[0.5rem] bg-[#F5F8FC] lg:mr-[4vw] hover:bg-[#0c9fa24b] rounded-[100%]"
              key={idx}
              src={icon}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="flex-wrap flex justify-between p-16 mt-[5vh] items-start">
        <div>
          <h1 className="text-[1.3rem] mb-[2.5rem] font-[800]">متانکست</h1>
          {footerData[0].map((data, index) => (
            <p
              className="text-[0.8rem] mb-[1.25rem] font-[300] text-grayed cursor-pointer hover:text-[#0CA0A2]"
              key={index}
            >
              {data}
            </p>
          ))}
        </div>
        <div>
          <h1 className="text-[1.3rem] mb-[2.5rem] font-[800]">خدمات ما</h1>
          {footerData[1].map((data, index) => (
            <div key={index}>
              <div className="flex items-center mb-[1.25rem]">
                <img src={data[1]} alt="" />
                <p className="text-[0.8rem] font-[300] text-grayed cursor-pointer hover:text-[#0CA0A2]">
                  {data[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-[1.3rem] mb-[2.5rem] font-[800]">
            خدمات مشتریان
          </h1>
          {footerData[2].map((data, index) => (
            <p
              className="text-[0.8rem] mb-[1.25rem] font-[300] text-grayed cursor-pointer hover:text-[#0CA0A2]"
              key={index}
            >
              {data}
            </p>
          ))}
        </div>
        <div>
          <h1 className="text-[1.3rem] mb-[2.5rem] font-[800]">
            راه های ارتباطی
          </h1>
          <div>
            <div className="flex items-center mb-[1.25rem]">
              <img src="/Footer/location.png" alt="" />
              <p className="text-[0.8rem] mr-[10px] font-[300] text-grayed">
                آدرس
              </p>
            </div>
            <p className="text-[0.8rem] mb-[1.25rem] font-[400]">
              مشهد بابانظر ۷۷ ، عزیزی ۳، پلاک ۸
            </p>
          </div>
          <div className="flex items-center mb-[1.25rem]">
            <img src="/Footer/Group 34738 (2).png" alt="" />
            <p className="text-[0.8rem] mr-[10px] font-[300] text-grayed">
              شماره تماس
            </p>
            <p className="text-[0.8rem] mr-[10px] font-[400]">۰۲۱۶۶۱۶۰۸۰۰</p>
          </div>
          <div className="flex items-center mb-[1.25rem]">
            <img src="/Footer/Message.png" alt="" />
            <p className="text-[0.8rem] mr-[10px] font-[300] text-grayed">
              ایمیل
            </p>
            <p className="text-[0.8rem] mr-[10px] font-[400]">Metanext.com</p>
          </div>
        </div>
        <img
          className="mt-[2.5rem] w-[15vw] lg:w-[5vw] cursor-pointer my-scale"
          src="/Footer/Logo.png"
          alt="logo"
        />
      </div>
      <div className="flex px-6 py-4 bg-[#0CA0A2] w-[90vw] mx-auto rounded-[20px] justify-between items-center footer-bg relative">
        <h1 className="text-[white] text-[1.6rem] font-[800]">
          دریافت دمو رایگان
        </h1>
        <div className="bg-[white] px-[3rem] py-[1rem] rounded-[0.65rem] flex">
          <img src="/Footer/presention-chart.png" alt="" />
          <p className="text-[0.9rem] text-[#0CA0A2] font-[500]">دمو رایگان</p>
        </div>
      </div>
      <div className="flex justify-between p-16 py-8">
        <div className="flex items-center">
          <img src="/Footer/copyright.png" alt="" />
          <p className="text-[500] text-[0.8rem] text-grayed">
            تمامی حقوق مادی و معنوی این سایت نزد متانکست محفوظ است و هر گونه کپی
            برداری پیگرد قانونی دارد
          </p>
        </div>
        <p className="text-[500] text-[0.8rem] text-grayed">۱۴۰۲</p>
      </div>
    </div>
  );
}
