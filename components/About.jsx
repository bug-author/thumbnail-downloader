import React from 'react';
import {
  AiOutlineCloudDownload,
  AiOutlineUnlock,
  AiOutlineSmile,
} from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <div className='w-full '>
        <div className='max-w-[1240px] mx-auto justify-center items-center sm:grid sm:grid-cols-3 py-20 px-12'>
          <div className='mx-auto p-4 col-span-2 flex flex-col justify-center items-center'>
            <h1 className=' sm:text-4xl text-3xl font-extrabold'>
              High-speed downloading
            </h1>
            <p>
              Experience lightning fast downloading with our High-Speed Download
              feature. Say goodbye to long wait times and slow downloads. With
              our state-of-the-art technology, you can download your favorite
              images in no time, allowing you to save time and get more done.
              Say hello to a seamless and efficient downloading experience,
              every time.
            </p>
          </div>
          <div className='text-[10rem] flex items-center justify-center'>
            <AiOutlineCloudDownload color='FF2E00' />
          </div>
        </div>
      </div>

      <div className='w-full bg-[#FF2E00]'>
        <div className='max-w-[1240px] mx-auto justify-center items-center sm:grid sm:grid-cols-3 py-28 px-16'>
          <div className='text-[10rem] flex justify-center items-center'>
            <AiOutlineSmile color='ffffff' />
          </div>

          <div className='mx-auto p-4 col-span-2 flex flex-col justify-center items-center text-white'>
            <h1 className='text-4xl font-extrabold'>
              No-Registration Required
            </h1>
            <p>
              Say goodbye to the hassle of registering for an account just to
              download images. Our website is designed to provide an effortless
              and convenient experience to our users. With our 'No Registration
              Required' feature, you can directly download images without any
              added steps. Simply search, preview and download - it's that easy!
            </p>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='max-w-[1240px] mx-auto justify-center items-center sm:grid sm:grid-cols-3 py-20 px-16'>
          <div className='mx-auto p-4 col-span-2 flex flex-col justify-center items-center'>
            <h1 className='sm:text-4xl text-3xl font-extrabold'>
              Secure Downloading
            </h1>
            <p>
              Your security is our top priority. With our Secure Download
              feature, you can be assured that your downloading experience is
              safe and secure. Our website is protected with the latest security
              protocols, ensuring that your personal information and downloaded
              images are protected from any malicious attacks. Enjoy a
              worry-free downloading experience with our secure platform.
            </p>
          </div>

          <div className='text-[10rem] flex justify-center items-center'>
            <AiOutlineUnlock color='FF2E00' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
