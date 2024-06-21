import images from "../../assets/images";

const HomeE = () => {
  return (
    <section>
      <div className="bg-[#fbf2ee] w-full py-14 hidden lg:flex justify-center items-center ">
        <div className="flex px-20 w-[80%]  justify-between items-center gap-5 ">
          <h1 className="w-[70%] text-[32px] font-bold text-[#333333]">
            Building trust with the most stringent data security measures in
            place{" "}
          </h1>
          <div className="flex gap-5">
            <img className="w-[85px] h-[85px]" src={images.gdpr} alt="" />
            <img className="max-w-[85px] " src={images.iso} alt="" />
          </div>
        </div>
      </div>
      <div className=" w-[90%] md:w-full flex  flex-col justify-center items-center my-20 mx-auto  ">
        <div className="text-center flex flex-col  gap-5">
          <h1 className=" text-[#333333] text-[28px] md:text-[32px] font-semibold ">
            The Best Pre-Employement Testing Software
          </h1>
          <p className="max-w-[790px] text-[#565656] text-[18px] md:text-[20px] px-10 ">
            Leading review platforms have recognised Xobin's Pre-employement
            Testing Software as the best Pre-employement Testing software.
          </p>
        </div>
        <div>
          <img
            src={
              "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718944048/xobin%20interview/p1_vl1teh.png"
            }
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HomeE;
