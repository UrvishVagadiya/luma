import { RiGeminiFill } from 'react-icons/ri';
import { MdOutlineArrowOutward } from 'react-icons/md';
const Navbar = () => {
  const d = new Date();

  const time = d.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const tz =
    d
      .toTimeString()
      .match(/GMT[+-]\d{2}\d{2}/)?.[0]
      ?.replace(/(\d{2})(\d{2})$/, '$1:$2') || '';

  return (
    <div className=" flex items-center justify-between p-4">
      <div className="cursor-pointer text-[18px] text-gray-400">
        <RiGeminiFill className="transition-transform duration-300 hover:text-foreground" />
      </div>
      <div className="flex items-center gap-4">
        <div className="text-[14px] text-gray-400 uppercase">
          {time} {tz}
        </div>
<<<<<<< Updated upstream
        <div className="group flex cursor-pointer items-center gap-1 text-gray-400 hover:text-[#656467]">
          <div className="text-[14px] capitalize">
=======
        <div className="group flex cursor-pointer items-center gap-1 text-gray-400 hover:text-foreground">
          <div className="text-[14px] font-semibold capitalize">
>>>>>>> Stashed changes
            explore events{' '}
          </div>
          <div className="transform transition-transform duration-300 group-hover:-translate-y-px">
            <MdOutlineArrowOutward />
          </div>
        </div>
        <div className="">
          <button className="flex cursor-pointer items-center justify-center rounded-full bg-nav-btn-bg px-3 py-1 text-[14px] text-nav-btn-text  duration-300 hover:bg-nav-btn-hover-bg hover:text-nav-btn-hover-text">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
