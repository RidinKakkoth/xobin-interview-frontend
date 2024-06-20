
const Card = () => {

    const cardData=[
        {
            icon:"https://res.cloudinary.com/ddymh3cnk/image/upload/v1718908164/xobin%20interview/hc1_no0buk.png",
            title:"Setup a Video Interview",
            description:"Build the digital interview customized for your job role. Use Xobin’s library of questions or add questions contextual to your company roles."
        },
        {
            icon:"https://res.cloudinary.com/ddymh3cnk/image/upload/v1718908165/xobin%20interview/hc2_uxrwul.png",
            title:"Share with Job Applicants",
            description:"Send out your video interview tests to applicants via email to individual candidates, bulk invite or post them on a job board. Set up deadlines and notifications."
        },
        {
            icon:"https://res.cloudinary.com/ddymh3cnk/image/upload/v1718908165/xobin%20interview/hc3_mcpmpn.png",
            title:"Evaluate Video Responses",
            description:"Watch and re-watch candidate responses. Rate them using a pre-set interview scorecard or use AI-powered transcription to evaluate candidates."
        },
        {
            icon:"https://res.cloudinary.com/ddymh3cnk/image/upload/v1718908165/xobin%20interview/hc4_crfvs9.png",
            title:"Collaborate and Review",
            description:"Review, shortlist, and share notes about your applicant video responses within your team. Make consensus-driven hiring decisions."
        },
    ]

    return (
<div className="flex flex-wrap justify-center lg:justify-between py-10">
{
        cardData.map((item,index)=>(
            <div className="max-w-[250px] h-auto flex flex-col  items-center text-center gap-5 " key={index}>
                <img src={item.icon} alt="" />
                <h3 className="font-semibold text-[#3C403D] text-2xl">{item.title}</h3>
                <p className="text-lg text-[#565656]">{item.description}</p>
            </div>
        ))
    }
</div>
  )
}

export default Card
