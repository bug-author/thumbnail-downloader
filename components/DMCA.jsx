import React from 'react';

const DMCA = () => {
  return (
    <section id='dmca'>
      <div className='w-full bg-black text-white'>
        <div className='max-w-[1240px] mx-auto justify-center items-center px-16 py-10'>
          <h1 className='text-5xl font-bold text-center'>DMCA</h1>
          <p className='my-5'>
            You are solely responsible for the data (e.g. URLs) that you send to
            the Youtube Thumbnail image service. Please be aware that illegal
            exchanges of recordings and protected works, as well as hacking, can
            harm artistic creation. It is also important to respect the laws
            regarding intellectual and artistic property, as failure to do so
            can lead to legal action.
          </p>

          <p className='my-5'>
            The Youtube Thumbnail image service is intended for personal use
            (i.e. "fair use") to download Youtube video thumbnails. Any further
            use of the downloaded content, including making it publicly
            accessible or using it for commercial purposes, must be agreed upon
            with the holder of the respective content's rights. You are fully
            responsible for all actions related to the data transmitted by the
            Youtube Thumbnail image service. The service provider only acts as a
            technical service provider and does not grant any rights to the
            contents.
          </p>

          <p className='my-5'>
            It is your responsibility to ensure the legitimacy of your use of
            the Youtube Thumbnail image service. The legality of using this
            service may vary depending on the laws of your country. The service
            provider is not liable for any permissibility issues related to
            downloading content through the service.
          </p>

          <p className='my-5'>
            The Youtube Thumbnail image service is a free service and does not
            offer any guarantees of any kind. The service provider reserves the
            right to change or discontinue any of the services at any time.
            Legal proceedings, if applicable, shall take place in the
            appropriate venue. If you have any issues, please contact the
            service provider.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DMCA;
