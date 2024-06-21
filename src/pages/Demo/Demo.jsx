import "remixicon/fonts/remixicon.css";
import "./Demo.css";
import images from "../../assets/images";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const navigate = useNavigate();



  const [formData, setFormData] = useState({
    usertype: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    team: "",
    interests: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const updatedInterests = checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value);

        return { ...prevData, [name]: updatedInterests };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/schedule-demo");
  };

  return (
    <section className=" demo  flex justify-center items-center ">
      <div className="max-w-[1300px] h-auto pt-[80px] pb-[35px] ">
        <div className="h-auto w-full flex flex-col  lg:flex-row gap-10 lg:gap-0  justify-between  items-center ">
          <div className=" w-[80%] lg:w-full basis-[45%] gap-5   text-white  flex flex-col justify-center items-start p-5">
            <div className="flex flex-col gap-5 pr-10">
              <h2 className=" text-4xl font-bold">
                See How Xobin’s Skill Assessment Software Can Power Your Hiring
                Strategy
              </h2>
              <p className="text-xl">
                Let our digital experts show you how to leverage our platform to
                power your Pre-hire screening, training and recruitment
                automation:
              </p>
              <ul className="flex flex-col text-xl gap-4 ">
                <li>
                  <i
                    className="fas fa-check-square"
                    style={{ color: "#fff", fontSize: "20px" }}
                  ></i>
                  <strong>&nbsp;&nbsp; Hire Humans. Not Resumes</strong> <br />
                  Gain deeper insights into the job applicant’s skills.
                  Shortlist only the job fit candidates for subsequent
                  interview.{" "}
                </li>
                <li>
                  <i
                    className="fas fa-check-square"
                    style={{ color: "#fff", fontSize: "20px" }}
                  ></i>{" "}
                  <strong> &nbsp;&nbsp; Candidate Friendly Platform </strong>
                  <br />
                  No Trick Questions. An Intuitive test platform and question
                  library that tests candidate on competencies required for the
                  job.
                </li>
                <li>
                  <i
                    className="fas fa-check-square"
                    style={{ color: "#fff", fontSize: "20px" }}
                  ></i>{" "}
                  <strong> &nbsp;&nbsp; Customizable Assessments </strong>
                  <br />
                  Choose Pre-built Tests for over 800+ Skills and 1200+ Job
                  roles. Alternatively, customize assessments for your
                  organization and usecase.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">Badges of Appreciation</h1>
              <img src={images.badge} alt="" className="h-auto w-full" />
            </div>
          </div>

          <div className=" w-[80%] lg:w-full flex flex-col basis-[45%]  md:min-w-[500px] p-8 bg-white  rounded-md shadow-md">
            <form
              onSubmit={handleSubmit}
              className=" contact-form flex flex-col gap-5"
            >
              <div className=" flex flex-col gap-2 items-start ">
                <label>
                  I'm Looking at a solution for:{" "}
                  <span className="text-red-500">*</span>{" "}
                </label>
                <div className="   ">
                  <input
                    type="radio"
                    name="usertype"
                    checked={formData.usertype === "myself"}
                    onChange={handleChange}
                    value="myself"
                  />{" "}
                  Myself <br />
                  <input
                    type="radio"
                    name="usertype"
                    checked={formData.usertype === "organization"}
                    onChange={handleChange}
                    value="organization"
                  />{" "}
                  My Organization
                </div>
              </div>
              <div className="flex flex-col md:flex-row  gap-5 md:gap-16">
                <div className="flex flex-col ">
                  <label>
                    Name <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label>
                    Work Email <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@yahoo.com"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                <div className="flex flex-col">
                  <label>
                    Company Name <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="company name"
                    onChange={handleChange}
                    value={formData.company}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label>
                    Phone Number <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="phone number"
                    onChange={handleChange}
                    value={formData.phone}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label>
                  Which team do you belong to?{" "}
                  <span className="text-red-500">*</span>{" "}
                </label>
                <select
                  name="team"
                  className="py-2 w-[75%] lg:w-full"
                  onChange={handleChange}
                  value={formData.team}
                  required
                >
                  <option disabled value="">
                    Please Select
                  </option>
                  <option value="Management">
                    Management (CXO,SVP,VP,Head)
                  </option>
                  <option value="HR">HR and Recruitment Team</option>
                  <option value="Learnig">Learnig and Development</option>
                  <option value="Technology">Technology team</option>
                  <option value="Intern">Intern/Job seeker/Student</option>
                </select>
              </div>
              <div className="">
                <label className="">
                  I'd specifically like to look at{" "}
                  <span className="text-red-500">*</span>{" "}
                </label>
                <div className="flex flex-col mt-2 items-start gap-1">
                  <div>
                    {" "}
                    <input
                      type="checkbox"
                      name="interests"
                      checked={formData.interests.includes("aptitude")}
                      onChange={handleChange}
                      value="aptitude"
                    />{" "}
                    Aptitude Tests
                  </div>
                  <div>
                    {" "}
                    <input
                      type="checkbox"
                      name="interests"
                      checked={formData.interests.includes("coding")}
                      onChange={handleChange}
                      value="coding"
                    />{" "}
                    Coding Tests
                  </div>
                  <div>
                    {" "}
                    <input
                      type="checkbox"
                      name="interests"
                      checked={formData.interests.includes("psychometric")}
                      onChange={handleChange}
                      value="psychometric"
                    />{" "}
                    Psychometric Tests
                  </div>
                  <div>
                    {" "}
                    <input
                      type="checkbox"
                      name="interests"
                      checked={formData.interests.includes("role")}
                      onChange={handleChange}
                      value="role"
                    />{" "}
                    Role based Tests (HR, Finance, Marketing)
                  </div>
                  <div>
                    {" "}
                    <input
                      type="checkbox"
                      name="interests"
                      checked={formData.interests.includes("video")}
                      onChange={handleChange}
                      value="video"
                    />{" "}
                    Video Assessments & Interviews
                  </div>
                  <div>
                    {" "}
                    <input
                      type="checkbox"
                      name="interests"
                      checked={formData.interests.includes("all")}
                      onChange={handleChange}
                      value="all"
                    />{" "}
                    All the above
                  </div>
                </div>
              </div>
              <p>
                The contact information is necessary to communicate with you
                regarding our products and services. You may unsubscribe from
                these communications at any time. You can review our{" "}
                <span>
                  <a className="text-blue-900 underline" href="">
                    Terms of service
                  </a>
                </span>{" "}
                and our{" "}
                <span>
                  <a className="text-blue-900 underline" href="">
                    {" "}
                    Privacy Policy
                  </a>{" "}
                </span>{" "}
                .
              </p>
              <button
                type="submit"
                className="bg-xobin_blue py-2 my-5 rounded-md mx-auto md:ml-0 text-white w-[max(10vw,250px)]"
              >
                Check Available Slot For Live Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
