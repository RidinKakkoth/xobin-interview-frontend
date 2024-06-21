

import './FlowingLogos.css';

const FlowingLogos = () => {
  const logos = [
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967210/xobin%20interview/logo8_gzzea7.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967210/xobin%20interview/logo6_s6tzma.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967211/xobin%20interview/logo13_ddztom.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967211/xobin%20interview/logo14_cjrwih.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967211/xobin%20interview/logo12_bizbuc.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967210/xobin%20interview/logo11_vnseni.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967210/xobin%20interview/logo2_o2xvun.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967210/xobin%20interview/logo1_oodol4.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967210/xobin%20interview/logo5_wpkapz.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967210/xobin%20interview/logo4_thtgj6.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967210/xobin%20interview/logo3_duwifu.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967210/xobin%20interview/logo7_rfseap.png",
    "https://res.cloudinary.com/ddymh3cnk/image/upload/v1718967210/xobin%20interview/logo10_kmjjpt.png",
    
  ];

  return (
<section className='flex flex-col gap-10 my-10 mt-20'>
    <div>
        <h1 className='text-[#3C403D] text-[24px] md:text-[32px] text-center font-bold w-[90%] md:w-[60%] mx-auto '>HR Teams at over 5000 companies,both big and small,are moving to Skill based hiring with Xobin</h1>
    </div>
<div className="flowing-logos w-[80%]  py-5 flex flex-col mx-auto gap-5 ">
      <div className="logos-layer">
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo} alt="logo" className="logos" />
        ))}
      </div>
      <div className="logos-layer">
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo} alt="logo" className="logos" />
        ))}
      </div>
    </div>
</section>
  );

};

export default FlowingLogos;
