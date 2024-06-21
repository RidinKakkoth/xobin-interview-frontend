import Foot from "./Foot";
import ServiceList from "./ServiceList";
import Social from "./Social";

const Footer = () => {
  const company = [
    "Meet the Team",
    "Our Features",
    "Contact Us",
    "Product Demo",
    "Careers Hiring!",
  ];
  const products = [
    "Pre-employment Testing ",
    "Skill Assessment Software",
    "Video Interviews Software",
    "Campus Recruitment Software",
    "Coding Test Platform",
    "Psychometric Testing Software",
    "Automated Video Interview",
    "Xoforms",
  ];

  const compare = [
    "Xobin vs HackerEarth",
    "Xobin vs HackerRank",
    "Xobin vs Vervoe",
    "Xobin vs CriteriaCorp",
    "Xobin vs TestGorilla",
    "Xobin vs Mettl",
    "Xobin vs Testdome",
    "Xobin vs iMocha",
  ];

  const resources = [
    "HR Glossary",
    "Blogs",
    "Video and Insights",
    "Ebooks",
    "Skill Test Portfolio",
    "Job Test Portfolio",
    "Job Description Templates",
    "Guide to Bulk Hiring",
  ];

  return (
    <footer className="bg-[#F7F8EF] pt-10 mt-10">
      <div className=" grid grid-cols-3 gap-6 lg:gap-0 lg:grid-cols-5 mx-auto text-center lg:text-left lg:max-w-[1300px] h-auto  ">
        <ServiceList title={"COMPANY"} service={company} />
        <ServiceList title={"PRODUCTS"} service={products} />
        <ServiceList title={"COMPARE"} service={compare} />
        <ServiceList title={"RESOURCES"} service={resources} />
        <Social title={"SOCIAL"} />
      </div>

      <hr className="border-1 border-gray-300 w-[80vw] mx-auto mt-10" />

      <Foot />
    </footer>
  );
};

export default Footer;
