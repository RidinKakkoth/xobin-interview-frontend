import Card from "./Card";

const HomeC = () => {
  return (
    <section>
      <div className="flex h-auto px-5 md:px-0 flex-col w-full items-center justify-center ">
        <h1 className="text-[#333333] text-center text-[32px] font-bold">
          How does Xobin’s One-way Video Interview work?
        </h1>
        <p className="text-[#565656] mt-2 text-[20px] text-center max-w-[860px] ">
          From Test Creation to Candidate Evaluation. The Xobin Platform
          facilitates Recruiters and Hiring Managers through the complete
          assessment process.
        </p>
        <div className=" lg:w-[1220px]">
          <Card />
        </div>
        <div>
          <h1 className="text-[#333333] mt-12 text-center text-[28px] md:text-[32px] font-bold">
            Our On-demand Video Interviews Drive Real Results
          </h1>
          <p className="text-[#565656] mt-3  md:text-[19px] text-center max-w-[950px] ">
            Hiring Remotely? Make it simple for candidates to apply, regardless
            of their location or time zone, by adjusting to the online world of
            today. When an applicant provides a video interview clip, distant
            hiring teams can easily select the right talent for your
            organization.
          </p>

          <div className="hidden md:flex justify-around py-10">
            <i className="text-[#38B565] text-xl ri-checkbox-circle-fill">
              <span className="text-[#565656]">&nbsp; Candidate Friendly</span>
            </i>
            <i className="text-[#38B565] text-xl ri-checkbox-circle-fill">
              <span className="text-[#565656]">&nbsp; No Setup </span>
            </i>
            <i className="text-[#38B565] text-xl ri-checkbox-circle-fill">
              <span className="text-[#565656]">&nbsp; Tangible Results </span>
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeC;
