
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = ({ onClick }) => {
  return (
    <div onClick={onClick} className="dropdown-menu   absolute mt-1 cursor-default  w-max bg-white shadow-custom  rounded-md z-10">
      <div className="grid grid-cols-4 gap-4 p-4">
        <div>
          <h3 className="font-bold  text-blue-600">Pre-Employment & Skill Testing</h3>
          <ul className='flex flex-col gap-5'>
            <li className="py-1">
              <Link to="/business-skill-assessments" className="flex items-center space-x-2">
                <span>💡</span>
                <span>Business Skill Assessments</span>
              </Link>
              <p className="text-sm text-gray-500">Evaluate Talent Efficiently</p>
            </li>
            <li className="py-1">
              <Link to="/coding-skill-assessments" className="flex items-center space-x-2">
                <span>💻</span>
                <span>Coding Skill Assessments</span>
              </Link>
              <p className="text-sm text-gray-500">Assess Coding Proficiency</p>
            </li>
            <li className="py-1">
              <Link to="/psychometric-testing" className="flex items-center space-x-2">
                <span>🧠</span>
                <span>Psychometric Testing Software</span>
              </Link>
              <p className="text-sm text-gray-500">Assess Behavioral Traits</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-blue-600">Assessment Library</h3>
          <ul className='flex flex-col gap-5'>
            <li className="py-1">
              <Link to="/skill-assessments" className="flex items-center space-x-2">
                <span>📄</span>
                <span>2000+ Skill Assessments</span>
              </Link>
              <p className="text-sm text-gray-500">2000+ Skill based assessments</p>
            </li>
            <li className="py-1">
              <Link to="/job-role-assessments" className="flex items-center space-x-2">
                <span>📝</span>
                <span>2000+ Job Role based assessments</span>
              </Link>
              <p className="text-sm text-gray-500">2500+ Job Role based assessments</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-blue-600">Recruitment Automation</h3>
          <ul className='flex flex-col gap-5'>
            <li className="py-1">
              <Link to="/xoforms" className="flex items-center space-x-2">
                <span>📝</span>
                <span>XoForms</span>
              </Link>
              <p className="text-sm text-gray-500">Streamline Application Process</p>
            </li>
            <li className="py-1">
              <Link to="/tracks" className="flex items-center space-x-2">
                <span>📈</span>
                <span>Tracks</span>
              </Link>
              <p className="text-sm text-gray-500">Streamlines Applicant Tracking</p>
            </li>
            <li className="py-1">
              <Link to="/integrations" className="flex items-center space-x-2">
                <span>🔄</span>
                <span>Integrations</span>
              </Link>
              <p className="text-sm text-gray-500">Seamless Integration</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-blue-600">AI</h3>
          <ul className='flex flex-col gap-5'>
            <li className="py-1">
              <Link to="/ai-evaluate" className="flex items-center space-x-2">
                <span>🔍</span>
                <span>AI Evaluate</span>
              </Link>
              <p className="text-sm text-gray-500">Automated Answer Evaluation</p>
            </li>
          </ul>
          <h3 className="mt-4 font-bold text-blue-600">Interviewing</h3>
          <ul className='flex flex-col gap-5'>
            <li className="py-1">
              <Link to="/request-demo" onClick={onClick} className="flex items-center space-x-2">
                <span>🎥</span>
                <span>Automated Video Interviews</span>
              </Link>
              <p className="text-sm text-gray-500">Simplify Candidate Screening</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
