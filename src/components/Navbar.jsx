import { Link } from "react-router-dom";
import Dribbble from "../assets/dribbble.jpg";
const Navbar = () => {
  return (
    <div className="px-10 py-6">
      <Link to="/">
        <img src={Dribbble} className="w-[90px] h-[60px] cursor-pointer" />
      </Link>
    </div>
  );
};

export default Navbar;
