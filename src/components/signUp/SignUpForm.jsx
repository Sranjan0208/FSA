import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className=" w-[65%] ">
      <p className="flex justify-end items-center p-5 font-semibold">
        Already a Member?&nbsp;
        <a className="cursor-pointer text-purple-600">Sign In</a>
      </p>
      <div className="flex flex-col items-center">
        <p className="text-2xl font-extrabold mt-3 mb-7 ">
          Sign Up to Dribbble
        </p>
        <form className="flex flex-col">
          <div className="flex space-x-7  mb-8">
            <div className="flex flex-col">
              <label
                htmlFor="Name"
                className="text-lg text-black font-bold mb-2"
              >
                Name
              </label>
              <input
                id="Name"
                type="text"
                className="p-3 rounded-md mb-5 bg-slate-200 outline-none"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-lg text-black font-bold mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="p-3 rounded-md mb-5 bg-slate-200 outline-none"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="flex flex-col mb-10">
            <label
              htmlFor="email"
              className="text-lg text-black font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="p-3 rounded-md mb-5 bg-slate-200 outline-none"
              placeholder="johndoe@email.com"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label
              htmlFor="password"
              className="text-lg text-black font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="p-3 rounded-md mb-5 bg-slate-200 outline-none"
              placeholder="6+ characters"
            />
          </div>
          <div className="flex">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm">
              Creating an account means you&apos;re okay with our Terms of
              Service, <br /> Privacy Policy, and our default Notification
              Settings.
            </p>
          </div>
          <Link to="/user-info">
            <button className="bg-pink-500 text-white font-bold p-3 rounded-lg mt-5 w-[200px] hover:bg-pink-400 transition duration-150 ease-in-out">
              Create Account
            </button>
          </Link>
          <p className="text-sm mt-5">
            This site is protected by reCAPTCHA and the Google <br /> Privacy
            Policy and Terms of Service apply.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
