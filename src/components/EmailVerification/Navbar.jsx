import { Link } from "react-router-dom";
import Dribbble from "../../assets/dribbble.jpg";
import { PiBriefcaseBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="px-3 pt-3 pb-2 flex justify-between border-b">
      <div className="flex items-center space-x-6">
        <Link to="/">
          <img src={Dribbble} className="w-[90px] h-[60px] cursor-pointer" />
        </Link>
        <a className="text-sm font-bold text-gray-500">Inspiration</a>
        <a className="text-sm font-bold text-gray-500">Find Work</a>
        <a className="text-sm font-bold text-gray-500">Learn Design</a>
        <a className="text-sm font-bold text-gray-500">Go Pro</a>
        <a className="text-sm font-bold text-gray-500">Hire Designers</a>
      </div>

      <div className="flex items-center space-x-6">
        <input
          type="text"
          className="py-2 px-3  rounded-md bg-slate-200 outline-none w-36 text-sm"
          placeholder="Search"
        />
        <PiBriefcaseBold className="text-gray-500 w-6 h-6 cursor-pointer" />
        <div className="rounded-full bg-gray-800 w-10 h-10 cursor-pointer"></div>
        <button className="bg-pink-500 py-2 px-4 text-sm text-white rounded-md font-bold hover:bg-pink-400 transition duration-150 ease-in-out">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Navbar;
