"use client";
import { useSyncExternalStore } from "react";

const Hero = () => {
  const isDarkMode = useSyncExternalStore(
    (callback) => {
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      darkModeMediaQuery.addEventListener("change", callback);
      return () => darkModeMediaQuery.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    () => false
  );

  const videoSrc = isDarkMode
    ? "https://cdn.lu.ma/landing/phone-dark.webm"
    : "https://cdn.lu.ma/landing/phone-light.webm";

  return (
    <div className="flex justify-center mx-auto gap-20 mt-12">
      <div className="max-w-95 mt-24 px-4">
        <div className="w-19 h-7.5 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 724 264"><g fill="currentColor"><path d="M38.53 260.65H.43V27.86h38.1zM124.99 263.42c-42.25 0-66.48-22.96-66.48-63V89.33h38.1v108.28c0 23.61 8.7 32.39 32.12 32.39 30.35 0 42.73-14.54 42.73-50.17v-90.5h38.1v171.33h-36.54v-29.91c-4.99 22.98-27.12 32.67-48.03 32.67m347.2-2.77H434.4V149.87c0-22.5-7.01-30.87-25.88-30.87-24.28 0-37.11 14.45-37.11 41.79v99.86h-37.79V149.87c0-21.93-7.23-30.87-24.94-30.87-31.59 0-38.05 32.96-38.05 41.79v99.86h-38.1V89.33h36.54v29.96c6.49-21.02 27.02-33.71 47.72-33.71 20.69 0 38.09 7.9 45.64 33.71 10.13-26.76 28.35-33.71 50.15-33.71 37.88 0 59.61 18.88 59.61 51.81zm76.65 2.77c-52.62 0-61.55-33.45-61.55-50.52 0-20.1 8.83-38.21 27.93-45.55 8.41-3.11 16.52-5.43 24.84-7.1 7.33-1.47 18.64-3.03 26.91-4.17l2.73-.38c14.38-2 29.67-9.21 29.67-18.62 0-16-20.51-18.39-32.74-18.39-13.87 0-23.64 3.57-27.53 10.05-3.49 6.46-3.73 7.97-4.62 13.6l-.62 4.43h-38.1l.68-5.61c1.35-11.14 3.41-19.03 6.48-24.83 10.54-20.39 31.77-30.75 63.08-30.75 26.11 0 44.63 8.23 53.26 15.94 5.31 4.6 9.1 9.84 11.89 16.46 5.84 12.36 6.32 20.63 6.32 29.4v86.43c0 8.07.78 14.97 2.31 20.5l1.76 6.35h-38.91l-.7-4.19c-.5-2.96-.67-19.75-.88-26.23-8.99 23.61-28.27 33.18-52.21 33.18m50.53-93.72c-7.97 6.11-20.47 9.6-38.62 13.23-31.27 5.78-36.54 13.06-36.54 27.22 0 12.5 10.63 20.26 27.75 20.26 33.23 0 47.41-15.48 47.41-51.77zM723.57 64.19C688.46 64.19 660 35.73 660 .62c0 35.11-28.46 63.57-63.57 63.57 35.11 0 63.57 28.46 63.57 63.57 0-35.11 28.46-63.57 63.57-63.57"></path></g></svg>
        </div>
        <div className="text-[60px] leading-18 font-semibold">
          Delightful events
          <div className="bg-[radial-gradient(circle_at_0_0,#099ef1_0%,#6863f8_18.82%,#d84ffa_32.6%,#f058c5_52.83%,#ff4f90_68.03%,#ff6558_87.66%,#ff891f_100%)] bg-clip-text text-transparent">
            start here.
          </div>
        </div>        
        <div className="mt-6 text-xl text-gray-500 opacity-80">
          Set up an event page, invite friends and sell tickets. Host a memorable event today.
        </div>
        <button className='bg-foreground text-background px-4 py-2 rounded-[10px] mt-6 font-medium'>
          Create Your First Event
        </button>
      </div>

      <div className='w-155 h-165'>
        {/* key={videoSrc} forces the video to reload when source changes */}
        <video 
          key={videoSrc}
          autoPlay 
          loop 
          muted 
          playsInline
          src={videoSrc} 
          className='w-full h-auto rounded-xl bg-transparent' 
        />
      </div>
    </div>
  );
};

export default Hero;