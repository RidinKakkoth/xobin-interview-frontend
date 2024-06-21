

import { InlineWidget } from 'react-calendly';

const CalendlyPage = () => {
  return (
    <div className="calendly-page flex justify-center items-center min-h-screen bg-gray-100">
      <div className="calendly-widget bg-white p-5 rounded-lg shadow-md w-full max-w-4xl">
        <InlineWidget 
          url="https://calendly.com/ridin-ksr/30min" // temporarly added url here have to do it dynamically
          styles={{
            height: '800px',
            width: '100%',
          }} 
        />
      </div>
    </div>
  );
};

export default CalendlyPage;
