
const ServiceList = ({title,service}) => {
  return (
    
    <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        {
            service.map((item,index)=>(

                <ul key={index}>
                    <li className="cursor-pointer  text-[#565656]">{item}</li>
                </ul>
            ))
        }
    </div>

  )
}

export default ServiceList
