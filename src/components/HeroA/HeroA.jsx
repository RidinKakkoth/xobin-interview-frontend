import images from "../../assets/images";

const HeroA = () => {
  return (
    <section>
      <div className="bg-gray-100 h-auto rounded-3xl mt-20 mx-auto py-10  max-w-[1300px] ">
        <h1 className="text-3xl md:text-4xl font-semibold   px-16 ">
          What’s an Automated Video Interview ?
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div className="left w-full lg:w-[60%] px-16 py-5 h-auto">
            <p className="text-xl max-w-[90%]">
              An Automated Video Interview(AVI), also known as an on-demand
              video interview, is a method of interviewing where a candidate
              responds to a series of preset screening questions via video
              format. The interviewer watches this video recording rather than
              connecting with the candidate in real-time
              <br />
              <br />
              Automated Video Interviews are all about convenience and
              flexibility. For both, the candidate and the hiring team.
              Telephonic Interviews and Round-1 Interviews take up a bulk of the
              time and effort. An automated Video Interview is similar to a
              traditional phone interview. But 20X faster and more convenient.
            </p>
            <div className="flex gap-5 mt-8">
              <button className="bg-xobin_blue  text-white px-6 py-2 rounded-md">
                Request Demo
              </button>
              <button className="bg-white  text-xobin_blue border border-xobin_blue px-6 py-2 rounded-md">
                View Pricing
              </button>
            </div>
          </div>
          <div className="right mx-auto lg:ml-0 lg:w-[40%] h-auto">
            <img
              className="max-w-full h-auto"
              src={images.demo}
              alt="demo call"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroA;
