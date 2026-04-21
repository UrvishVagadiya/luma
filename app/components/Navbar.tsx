import { RiGeminiFill } from "react-icons/ri";
import { MdOutlineArrowOutward } from "react-icons/md";
const Navbar = () => {
  const d = new Date();

  const time = d.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const tz =
    d
      .toTimeString()
      .match(/GMT[+-]\d{2}\d{2}/)?.[0]
      ?.replace(/(\d{2})(\d{2})$/, "$1:$2") || "";

  return (
    <div className="p-4  flex justify-between items-center">
      <div className="text-gray-400 text-[18px] cursor-pointer ">
        <RiGeminiFill className="hover:text-black transition-tranform duration-300 " />
      </div>
      <div className="flex gap-4 items-center">
        <div className="uppercase text-[14px] text-gray-400">
          {time} {tz}
        </div>
        <div className="flex gap-1 group cursor-pointer hover:text-[#656467]  items-center text-gray-400">
          <div className="capitalize text-[14px] font-semibold">
            explore events{" "}
          </div>
          <div className="transition-transform duration-300 transform  group-hover:-translate-y-px">
            <MdOutlineArrowOutward />
          </div>
        </div>
        <div className="">
          <button className="flex items-center cursor-pointer trasition-transform duration-300 hover:bg-[#656467] justify-center px-3 py-1 rounded-full text-[14px] bg-[#EEE9EA] hover:text-white text-gray-600 ">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
