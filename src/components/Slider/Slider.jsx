
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import { useEffect, useState } from 'react';

const SlickSlider = () => {
  const slidesData = [
    { image: 'https://res.cloudinary.com/ddymh3cnk/image/upload/v1718948293/xobin%20interview/sl1_lcgvlx.png', title: '7 Reasons To Use Pre-Employment Tests', desc: "Pre-employment tests are a tool used to screen applicants. Just like universities use specially designed tests to screen students..." },
    { image: 'https://res.cloudinary.com/ddymh3cnk/image/upload/v1718948293/xobin%20interview/sl2_fnehqc.png', title: 'Benefits and Limitations of Pre-employment Tests', desc: "The pre-employment tests primarily showcase the aptitude and job skills of the applicant. The tests are able to quantify the hard skills of the applicant." },
    { image: 'https://res.cloudinary.com/ddymh3cnk/image/upload/v1718948293/xobin%20interview/sl3_x31yim.png', title: 'Pre-Employment Testing: Ultimate Guide', desc: "Pre-employment testing also known as pre-employment screening is the process of assessing job seekers by measuring their skills and core traits." },
    { image: 'https://res.cloudinary.com/ddymh3cnk/image/upload/v1718948293/xobin%20interview/sl4_xb2kxy.png', title: 'Pre-employment Testing for Startups', desc: "Pre-employment testing is a critical part of the startup hiring process as it helps you evaluate candidates’ skills and abilities." },
    { image: 'https://res.cloudinary.com/ddymh3cnk/image/upload/v1718948293/xobin%20interview/sl5_gkcobj.png', title: 'Pre-employment Testing for HR Roles', desc: "The basic idea behind pre-employment testing is to identify the best candidates and make hiring decisions faster, easier, and completely bias-free." },
    { image: 'https://res.cloudinary.com/ddymh3cnk/image/upload/v1718948293/xobin%20interview/sl6_qutbmo.png', title: 'Types of Pre-employment Assessments', desc: "we explore the different types of pre-employment tests and assessments. There is no ideal one-size-fits-all test. Each test works differently..." },
  ];
  const [responsiveSettings, setResponsiveSettings] = useState({
    slidesToShow: 3, // Default: Show 3 slides
    slidesToScroll: 1,
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) { // Less than md: Show 1 slide
        setResponsiveSettings({
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      } else if (screenWidth < 992) { // Less than lg: Show 2 slides
        setResponsiveSettings({
          slidesToShow: 2,
          slidesToScroll: 1,
        });
      } else {
        setResponsiveSettings({
          slidesToShow: 3, // Default: Show 3 slides
          slidesToScroll: 1,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Slider className="w-[380px] md:w-[800px] lg:w-[1200px] h-auto custom-slider" {...responsiveSettings}>
      {slidesData.map((slide, index) => (
        <div className='pl-4 pb-5' key={index}>
          <div className='h-[460px] w-[350px] rounded-2xl shadow-md'>
            <img className="w-full object-cover rounded-t-2xl" src={slide.image} alt={slide.title} />
            <div className='flex flex-col justify-between flex-grow p-5'>
              <div>
                <h2 className="text-xl font-semibold mb-4">{slide.title}</h2>
                <p className="text-base text-bluegrey max-w-[300px]">{slide.desc}</p>
              </div>
              <a href="#" className="mt-4 text-xobin_blue font-semibold">Read More...</a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;