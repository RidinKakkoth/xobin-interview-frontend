import images from "../../assets/images"
import {Link} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css';


const Header = () => {
  return (
    <section>
        <div className="flex   h-auto w-full ">
            <div  className="left flex flex-col px-5 md:px-20 lg:px-0  lg:w-[53%] justify-center items-center pb-[24px] gap-5  ">
                <h1 className=" md:w-[750px] lg:w-[550px]  text-[40px] md:text-[50px] font-semibold leading-[1]  mt-[25px] "><span className="text-xobin_blue">Automated Video Interviews :</span> Assess with precision, decide with confidence.</h1>
                <p className=" md:w-[750px] lg:w-[550px] text-lg md:text-xl ">You’ll never have to worry about scheduling telephone screening rounds again. Give all candidates an opportunity to shine with on-demand and automated video interviews.</p>
                <div className=" md:mr-auto lg:mr-[150px] mt-5  flex flex-col gap-5  items-start">
                <Link to='/request-demo'>
                   <button className=" bg-xobin_blue text-white px-4 py-3 rounded-md  font-semibold" >Book a meeting today <i className="ri-calendar-event-line"></i> </button>
                </Link>
                <img className="max-w-full" src={images.review} alt="img" />
                </div>
            </div>
            <div className="right hidden  lg:block  w-[47%]">
                <img className="h-auto w-full" src={images.header} alt="header" />
            </div>

        </div>
    </section>
  )
}

export default Header
