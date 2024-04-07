import Dribbble from "../../assets/dribbble.jpg";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaDribbble,
} from "react-icons/fa6";
import { PiDribbbleLogoDuotone } from "react-icons/pi";

const Footer = () => {
  const items = [
    "Go Pro!",
    "Explore design work",
    "Design blog",
    "Overtime podcast",
    "Playoffs",
    "Weekly Warm-up",
    "Refer a friend",
    "Code of Conduct",
  ];

  return (
    <div className="bg-gray-200">
      <div className="p-10 grid grid-cols-6 gap-10">
        <div className="flex flex-col space-y-4">
          <img src={Dribbble} className="w-[90px] h-[30px] cursor-pointer" />
          <p className="text-sm">
            Dribbble is the world&apos;s leading <br /> community for creatives
            to share, grow, and get hired.
          </p>
          <div className="flex space-x-3">
            <FaDribbble className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaPinterest className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="font-semibold cursor-default">For Designers</h1>
          {items.map((item, index) => (
            <p key={index} className="text-sm cursor-pointer">
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col space-y-4 text-sm">
          <h1 className="font-semibold cursor-default">Hire designers</h1>
          <p className="cursor-pointer">Post a job opening</p>
          <p className="cursor-pointer">Post a freelance project</p>
          <p className="cursor-pointer">Search for designers</p>
          <h1 className="font-semibold cursor-default">Brands</h1>
          <p className="cursor-pointer">Advertise with us</p>
        </div>
        <div className="flex flex-col space-y-4 text-sm">
          <h1 className="font-semibold cursor-default">Company</h1>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Careers</p>
          <p className="cursor-pointer">Support</p>
          <p className="cursor-pointer">Media Kit</p>
          <p className="cursor-pointer">Testimonials</p>
          <p className="cursor-pointer">API</p>
          <p className="cursor-pointer">Terms of Service</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Cookie policy</p>
        </div>
        <div className="flex flex-col space-y-4 text-sm">
          <h1 className="font-semibold cursor-default">Directories</h1>
          <p className="cursor-pointer">Design jobs</p>
          <p className="cursor-pointer">Designers for hire</p>
          <p className="cursor-pointer">Feelance designers for hire</p>
          <p className="cursor-pointer">Tags</p>
          <p className="cursor-pointer">Places</p>
          <h1 className="font-semibold cursor-default">Design assets</h1>
          <p className="cursor-pointer">Dribbble Marketplace</p>
          <p className="cursor-pointer">Creative Market</p>
          <p className="cursor-pointer">Fontspring</p>
          <p className="cursor-pointer">Font Squirrel</p>
        </div>
        <div className="flex flex-col space-y-4 text-sm">
          <h1 className="font-semibold cursor-default">Design Resources</h1>
          <p className="cursor-pointer">Freelancing</p>
          <p className="cursor-pointer">Design Hiring</p>
          <p className="cursor-pointer">Design Portfolio</p>
          <p className="cursor-pointer">Design Education</p>
          <p className="cursor-pointer">Creative Process</p>
          <p className="cursor-pointer">Design Industry Trends</p>
        </div>
      </div>
      <div className="border border-t border-t-gray-300 mt-7 px-7  py-6 flex justify-between text-gray-500 mx-5">
        <p className="text-sm">© 2024 Dribbble. All rights reserved.</p>
        <p className="text-sm flex justify-center items-center space-x-1 ">
          <strong className="text-black">20,501,853 </strong> shots dribbbled
          <PiDribbbleLogoDuotone className="text-pink-600 w-7 h-7" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
