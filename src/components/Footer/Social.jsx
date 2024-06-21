
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import images from '../../assets/images';

const Social = ({ title }) => {



  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold mb-2">{title}</h1>

      <div className="flex gap-8 py-5">
        <FontAwesomeIcon icon={faLinkedinIn} size="2xl" style={{ color: "#285ab4", }} />
        <FontAwesomeIcon icon={faFacebookF} size="2xl" style={{ color: "#285ab4", }} />
        <FontAwesomeIcon icon={faYoutube} size="2xl" style={{ color: "#285ab4", }} />
        <FontAwesomeIcon icon={faTwitter} size="2xl" style={{ color: "#285ab4", }} />
      </div>
      <hr className='border-1 border-gray-300' />
      <div className='flex'>
        <div className='flex flex-col gap-5 border-r-2 mt-5 px-5'>
          <img className='w-[100px]' src={images.g2} alt="" />
          <img className='w-[100px]' src={images.capterra} alt="" />
        </div>
        <div className='flex flex-col px-5 mt-5 gap-5'>
          <img className='w-[50px]' src={images.gdpr} alt="" />
          <img className='w-[50px]' src={images.iso} alt="" />

        </div>
      </div>

    </div>
  )
}

export default Social
