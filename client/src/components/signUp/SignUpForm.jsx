import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/", user);

      if (response.status === 201) {
        console.log(response.data);
        setUser({ name: "", username: "", email: "", password: "" });
        navigate("/user-info");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

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
        {error && <p className="text-red-500">{error}</p>}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex space-x-7  mb-8">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-lg text-black font-bold mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="p-3 rounded-md mb-5 bg-slate-200 outline-none"
                placeholder="Name"
                value={user.name}
                onChange={handleChange}
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
                name="username"
                type="text"
                className="p-3 rounded-md mb-5 bg-slate-200 outline-none"
                placeholder="Username"
                value={user.username}
                onChange={handleChange}
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
              name="email"
              type="email"
              className="p-3 rounded-md mb-5 bg-slate-200 outline-none"
              placeholder="johndoe@email.com"
              value={user.email}
              onChange={handleChange}
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
              name="password"
              type="password"
              className="p-3 rounded-md mb-5 bg-slate-200 outline-none"
              placeholder="6+ characters"
              value={user.password}
              onChange={handleChange}
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
          <button
            type="submit"
            className="bg-pink-500 text-white font-bold p-3 rounded-lg mt-5 w-[200px] hover:bg-pink-400 transition duration-150 ease-in-out"
          >
            Create Account
          </button>
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
