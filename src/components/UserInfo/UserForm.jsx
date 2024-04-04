import { MdKeyboardArrowRight } from "react-icons/md";
import { TbCameraPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const UserForm = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome! Let&apos;s create your profile
        </h1>
        <p className="text-gray-500 mb-8">
          Let other get to know you better! You can do these later
        </p>
        <h2 className="text-xl font-bold mb-3">Add an avatar</h2>
        <div className="flex items-center space-x-4 mt-4">
          <div className="w-[160px] h-[160px] border-2  border-dashed  rounded-full mr-5 flex items-center justify-center cursor-pointer">
            <TbCameraPlus className="text-gray-600 text-xl" />
          </div>
          <div className="flex flex-col justify-center ">
            <button className="rounded-lg px-3 text-sm py-2 border font-semibold  mb-5 mr-5">
              Choose Image
            </button>
            <p className="text-sm text-gray-400 font-semibold flex items-center justify-center cursor-pointer">
              <MdKeyboardArrowRight /> Or choose one of our defaults
            </p>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-3 mt-10">Add your location</h2>
        <input
          className="outline-none py-2 mb-7 border-b"
          placeholder="Enter a location"
        />
        <Link to="/work-info">
          <button className="bg-pink-500 text-white font-bold p-3 rounded-lg  w-[200px] hover:bg-pink-400 transition duration-150 ease-in-out">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserForm;
