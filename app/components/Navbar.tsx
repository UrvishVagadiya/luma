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
    <div className="flex items-center justify-between p-4">
      <div className="cursor-pointer text-[18px] text-gray-400">
        <RiGeminiFill className="hover:text-foreground transition-transform duration-300" />
      </div>
      <div className="flex items-center gap-4">
        <div className="text-[14px] text-gray-400 uppercase">
          {time} {tz}
        </div>
        <div className="group flex cursor-pointer items-center gap-1 text-gray-400 hover:text-[#656467]">
          <div className="text-[14px] capitalize">
            <div className="group hover:text-foreground flex cursor-pointer items-center gap-1 text-gray-400">
              <div className="text-[14px] font-semibold capitalize">
                explore events{' '}
              </div>
              <div className="transform transition-transform duration-300 group-hover:-translate-y-px">
                <MdOutlineArrowOutward />
              </div>
            </div>
            <div className="">
              <button className="bg-nav-btn-bg text-nav-btn-text hover:bg-nav-btn-hover-bg hover:text-nav-btn-hover-text flex cursor-pointer items-center justify-center rounded-full px-3 py-1 text-[14px] duration-300">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
