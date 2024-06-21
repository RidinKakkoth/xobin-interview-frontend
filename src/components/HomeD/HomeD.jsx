import images from "../../assets/images";

const HomeD = () => {
  return (
    <section>
      <div className=" max-w-[1050px] h-auto p-10 md:gap-12   flex flex-col items-center md:flex-row  justify-between text-center md:text-left   mx-auto">
        <div className=" max-w-[350px]  md:h-[210px] pb-14  px-8 md:pb-8 pt-3 flex flex-col gap-5 justify-center shadow-custom  ">
          <h1 className="text-[#E86013] text-[56px] font-bold ">
            81<span className="text-lg text-[#565656] font-bold"> %</span>
          </h1>
          <p className="text-lg text-[#565656] ">
            Decrease in time spent on each interview
          </p>
        </div>
        <div className="max-w-[350px]  md:h-[210px] pb-14  px-8 md:pb-8 pt-3 flex flex-col gap-5 justify-center shadow-custom ">
          <h1 className="text-[#f2ab3f] text-[56px] font-bold ">
            2<span className="text-lg text-[#565656] font-bold"> days</span>
          </h1>
          <p className="text-lg text-[#565656] ">
            Avg time to respond to video Interview
          </p>
        </div>
        <div className="max-w-[350px]  md:h-[210px] px-8 pb-8 pt-3 flex flex-col gap-5 justify-center shadow-custom ">
          <h1 className="text-[#9955F3] text-[56px] font-bold ">
            55<span className="text-lg text-[#565656] font-bold"> %</span>{" "}
          </h1>
          <p className="text-lg text-[#565656] ">
            Increase in candidate engagement rate
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-12 gap-14 ">
        <h1 className="max-w-[836px] text-center text-[#3C403D] px-10 md:px-0 text-[24px] md:text-[32px] font-bold ">
          Why Use Automated Video Interview Over Traditional Phone Interview?
        </h1>
        <img
          className=" w-[90%] md:w-auto max-w-full h-auto shadow-md"
          src={images.traditional}
          alt="traditonal phone hiring"
        />
      </div>
    </section>
  );
};

export default HomeD;
