import { useNavigate } from "react-router-dom";
import heroData from "../../assets/heroData";

const HomeB = () => {

  const navigate=useNavigate()
  return (
    <section>
      <div className="py-10 w-full max-w-[1300px] flex flex-col items-center justify-center mx-auto h-auto">
        <h1 className="text-[#333333] py-10 text-center  text-[32px] font-bold">
          Why Xobin for Automated Video Interview ?
        </h1>

       {heroData.map((item,index)=>(
        <>
         <div key={index} style={{backgroundImage:`${item.backround}`}} className="flex h-auto w-[95%] lg:w-full mb-10 rounded-[40px] p-14">
          <div className="md:w-[50%]  h-auto flex flex-col gap-5 ">
            <h1 className="text-[#333333] text-center md:text-left text-3xl md:text-4xl font-semibold">{item.title}</h1>
            <p className="text-lg md:text-xl text-[#565656]">
              {item.description}
            </p>
            <div className="flex  text-bluegrey md:text-lg">
                <div className="flex items-center gap-4 flex-1">
                    <img className="w-10" src={item.icon_1} alt="" />
                    <p>{item.icon_1_text} </p>
                </div>
                <div  className="flex flex-1 items-center gap-4"> <img className="w-10" src={item.icon_2} alt="" /> <p>{item.icon_2_text}</p></div>
            </div>
            <div className="flex text-bluegrey md:text-lg">
                <div className="flex flex-1 items-center gap-4">
                <img className="w-10" src={item.icon_3} alt="" />
                    <p>{item.icon_3_text}</p>
                </div>
                <div className="flex flex-1 items-center gap-4">
                <img className="w-10" src={item.icon_4} alt="" />
                    <p>{item.icon_4_text}</p></div>
            </div>
            
            <div className="flex justify-center md:justify-start gap-5  mt-8">
              <button style={{ backgroundColor: item.color, color: 'white' }} className=" px-6 py-2 rounded-md">
                Learn More
              </button>
              <button  style={{
                    borderColor: item.color,
                    color: item.color,
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                  onClick={()=>navigate('/request-demo')}
                  className="bg-white   px-6 py-2 rounded-md">
              Request Demo
              </button>
            </div>
          </div>
          <div className="hidden md:block w-[50%]  h-auto">
            <img
              src={item.img}
              className="w-[90%] mt-[15px] ml-auto  h-auto"
              alt="brand"
            />
          </div>
        </div>

        </>
       ))}
      </div>
    </section>
  );
};

export default HomeB;
