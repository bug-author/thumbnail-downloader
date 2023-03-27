import { useState } from 'react';
import { DownloadSection } from '../components/DownloadSection';
import NavBar from '../components/NavBar';
import {
  AiOutlineCloudDownload,
  AiOutlineUnlock,
  AiOutlineSmile,
} from 'react-icons/ai';
import About from '@/components/About';
import DMCA from '@/components/DMCA';

export default function Home() {
  const [search, setSearch] = useState('');
  const [ytimage, setYtimage] = useState(null);

  const extractVideoId = () => {
    const youtubeRegex =
      /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
    const idRegex = /v=([^&]+)/;
    const idRegex2 = /([^&]+)/;

    if (!youtubeRegex.test(search)) {
      alert('ID not valid');

      return null;
    }

    if (search.match(idRegex)) {
      const videoId = search.match(idRegex);
      if (!videoId || videoId.length < 2) {
        alert('ID not valid');
        return null;
      }

      setYtimage(`https://img.youtube.com/vi/${videoId[1]}/hqdefault.jpg`);

      return videoId[1];
    }
    if (search.match(idRegex2)) {
      const videoId = search.match(idRegex2);
      if (!videoId || videoId.length < 2) {
        alert('ID not valid');
        return null;
      }

      let videoId2 = videoId[1].replace('https://youtu.be/', '');

      setYtimage(`https://img.youtube.com/vi/${videoId2}/mqdefault.jpg`);

      return videoId2;
    }
  };

  return (
    <>
      {/* Home */}
      <section
        className='home w-full text-white'
        id='home'
      >
        <NavBar />
        <div
          className={
            ytimage === null
              ? 'sm:py-32 py-4 flex flex-col items-center justify-center mx-auto'
              : 'sm:py-12 py-3 flex flex-col items-center justify-center mx-auto'
          }
        >
          <h1 className='max-w-[1240px] px-2 mb-4 ld:text-5xl md:text-4xl sm:3xl text-2xl sm:mx-auto ml-6 font-extrabold text-center text-white'>
            YouTube Thumbnail downloader
          </h1>

          <div className='flex sm:flex-row flex-col items-center text-center'>
            <p className='px-4'>Free, Fast and Easy Image Downloader</p>
            <p className='sm:block hidden'>-</p>
            <p className='px-4'>Download Your Favorite Images Now!</p>
          </div>

          <div className='text-white max-w-[1240px] flex flex-col sm:flex-row items-center justify-center mx-auto sm:py-2 py-1 px-4'>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='p-3 lg:w-[40rem] md:w-[32rem] sm:w-[25rem] w-[17rem] border-2 rounded-md text-black outline-none border-none'
              type='text'
              name='search'
              placeholder='Paste YouTube video URL'
            />
            <button
              onClick={extractVideoId}
              className='bg-[#FF2E00] hover:bg-[#eb360d] ml-2 p-3 w-[200px] rounded-lg sm:my-6 my-4 text-black font-bold'
            >
              Search
            </button>
          </div>

          <div className=' mx-auto max-w-[1240px]  sm:mt-2 md:mt-12 mt-[0.2rem]'>
            <DownloadSection ytimage={ytimage} />
          </div>

          {ytimage === null && (
            <div className='w-full  md:mt-[4rem] lg:mt-[6.5rem] sm:mt-[8rem] mt-[8.8rem]'>
              <div className='max-w-[1240px] mx-auto sm:text-xl text-sm font-bold md:text-2xl flex items-center justify-center  sm:gap-10 gap-2 px-1 '>
                <div className='grid grid-rows-2 text-center  items-center justify-center'>
                  <AiOutlineCloudDownload
                    color='FF2E00'
                    className='flex mx-auto'
                    size={50}
                  />
                  <p>High-speed downloading</p>
                </div>

                <div className='grid grid-rows-2 text-center items-center justify-center'>
                  <AiOutlineSmile
                    color='FF2E00'
                    className='flex mx-auto'
                    size={50}
                  />
                  <p>No registration required</p>
                </div>

                <div className='grid grid-rows-2 text-center items-center justify-center'>
                  <AiOutlineUnlock
                    color='FF2E00'
                    className='flex mx-auto'
                    size={50}
                  />
                  <p>Secure downloading</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <About />

      <DMCA />
    </>
  );
}
