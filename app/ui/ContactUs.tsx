export default function ContactUs() {
  const formData = ["نام و نام خانوادگی", "شماره تماس", "نام شرکت", "موضوع"];

  return (
    <div className="lg:flex items-center justify-between px-[20px] mt-[5vh] ">
      <img
        className="w-[40vw] mx-auto lg:mx-0 lg:w-[25vw] lg:mr-[10vw] "
        src="/ContactUs/Frame.png"
        alt=""
      />
      <div className="form bg-[#F5F8FC] w-[90vw] mx-auto lg:mx-0  lg:w-[50vw] rounded-[20px] p-8">
        <div className="flex  items-center">
          <img src="/ContactUs/Group 34738.png" alt="" />

          <div>
            <p className=" text-[1rem] font-[300] text-grayed">
              همراه شما هستیم برای یک شروع تازه
            </p>
            <h1 className="text-[2rem] font-[700] mt-[20px]">
              دریافت{" "}
              <span className="font-[900] text-[#0CA0A2]">مشاوره رایگان</span>
            </h1>
          </div>
        </div>
        <div>
          <form className="p-5 mx-auto" action="">
            {formData.map((data: string, idx: number) => {
              return (
                <input
                  key={idx}
                  className=" w-full block bg-[white] p-2 w-[40vw] py-[20px] mb-[3vh] mx-auto rounded-[8px] focus-border-color"
                  placeholder={data}
                  type="text"
                />
              );
            })}
            <button
              className="mt-[20px] mx-auto block bg-[#0CA0A2] hover:bg-[#067a7c] block text-[white] px-[16vw] py-[2vh] rounded-[10px]"
              type="submit"
            >
              دریافت مشاوره
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
