import { useNavigate } from "react-router-dom"
import SlickSlider from "../Slider/Slider"

const HomeF = () => {

  const navigate=useNavigate()

  return (
    <section>
      <div className="hidden md:block w-full h-auto">
        <div style={{background:"linear-gradient(360deg, hsla(229, 61%, 49%, 1) 34%, hsla(213, 67%, 51%, 1) 60%)"}} className="max-w-[1180px] md:w-[90%] lg:w-full  py-9 flex flex-col justify-center items-center gap-6 mx-auto mb-20 rounded-md ">
          <h1 className="text-2xl text-center  md:text-4xl font-bold text-white">Speeden up recruitment with Automated Interviews.</h1>
          <p className="text-white text-xl">Preset once. Use multiple times. Let applicants record answer anytime.</p>
          <div className="flex gap-5">
            <button onClick={()=>{navigate('/request-demo')}} className="px-5 py-3 bg-white rounded-md text-xobin_blue font-semibold">Try Automated Video Interview</button>
            <button className="text-white border border-white-1 py-3 px-5 rounded-md font-semibold">Request for Call Back</button>
          </div>
        </div>

      </div>
      <div className="flex flex-col justify-center relative  bg-white  h-auto items-center gap-10">
        <h1 className="text-2xl md:text-4xl text-[#3C403D] font-bold w-[60%] text-center mb-5">Articles Related To Pre-Employement Testing Software</h1>
        <div className="max-w-[1200px] flex  justify-center items-center">
            <SlickSlider/>
        </div>
      </div>
    </section>
  )
}

export default HomeF
