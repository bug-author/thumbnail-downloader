import React, { useEffect, useState } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';

export const DownloadSection = ({ ytimage }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [img, setImg] = useState('');

  const handleDownload = () => {
    // Handle download logic
    const link = document.createElement('a');
    link.href = img;
    link.download = 'thumbnail.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (ytimage) {
      setIsLoaded(true);
      setImg(ytimage);
    }
  }, [ytimage]);

  return (
    <>
      {isLoaded && (
        <div
          onClick={handleDownload}
          className='mt-40 sm:px-6 md:gap-4 text-white grid md:grid-cols-2 grid-rows-2'
        >
          <img
            className='flex mx-auto pl-3 rounded-lg md:max-w-[450px] sm:max-w-[350px] max-w-[250px]'
            src={img}
            alt='img'
          />
          <div className='sm:gap-6 gap-[0.5rem] flex md:flex-col md:items-stretch items-center justify-center flex-row mx-auto text-base sm:text-xl md-text-2xl lg:md-text-3xl'>
            <div className='border-white border-2 rounded-lg p-3 hover:bg-gray-900 cursor-pointer items-center justify-center flex flex-col'>
              <span className='text-center'>Download</span>
              <MdDownloadForOffline className='text-[#FF2E00]' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
