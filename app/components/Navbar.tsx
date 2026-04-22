"use client";
import { useEffect, useState } from 'react';
import { RiGeminiFill } from 'react-icons/ri';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Link from 'next/link';

const Navbar = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    
    updateTime(); 
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = time ? time.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }) : "";

  const tz = time ? time.toTimeString().match(/GMT[+-]\d{2}\d{2}/)?.[0]?.replace(/(\d{2})(\d{2})$/, '$1:$2') : "";

  return (
    <div className="flex items-center justify-between p-4">
      <Link href="/" className="text-[18px] text-gray-400">
        <RiGeminiFill className="hover:text-foreground transition-transform duration-300" />
      </Link>
      
      <div className="flex items-center gap-4">
        <div className="text-[14px] text-gray-400 uppercase font-mono min-w-45">
          {time ? (
            `${timeString} ${tz}`
          ) : (
            <span className="invisible">00:00:00 GMT+05:30</span>
          )}
        </div>

        <div className=" flex  items-center gap-1">
           <div className="group hover:text-foreground cursor-pointer flex  items-center gap-1 text-gray-400">
             <Link href="/explore" className="text-[14px] font-semibold capitalize">
               explore events
             </Link>
             <div className="transform transition-transform duration-300 group-hover:-translate-y-px">
               <MdOutlineArrowOutward />
             </div>
          </div>
          <button className="ml-2 bg-nav-btn-bg text-nav-btn-text hover:bg-nav-btn-hover-bg hover:text-nav-btn-hover-text flex items-center justify-center rounded-full px-3 py-1 text-[14px] duration-300">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;