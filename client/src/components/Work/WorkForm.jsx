import { Link } from "react-router-dom";
import Work from "../../assets/work.png";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png";

const WorkForm = () => {
  const workTypes = [
    {
      image: Work,
      worktype: "I'm a designer looking to share my work",
    },
    {
      image: Work2,
      worktype: "I'm looking to hire a designer",
    },
    {
      image: Work3,
      worktype: "I'm looking for design inspiration",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-extrabold mb-4">
        What brings you to dribbble ?
      </h1>
      <p className="text-sm font-semibold text-gray-600 mb-16">
        Select the options that best describes you. Don&apos;t worry, you can
        explore other options later.
      </p>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {workTypes.map((workType, index) => (
          <div
            className="border rounded-lg flex flex-col items-center justify-center p-5"
            key={index}
          >
            <img src={workType.image} className="w-[250px] h-[150px] m-5" />
            <p className="font-bold m-3">{workType.worktype}</p>
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="custom-style1"
            >
              <input
                name="type"
                type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/10 bg-gray-900/5 p-0 text-pink-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-600 checked:before:bg-gray-900 hover:before:opacity-0"
                id="custom-style1"
              />
              <span className="absolute text-pink-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full scale-105"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
        ))}
      </div>
      <p className="font-bold mb-5">Anything else? You can select multiple</p>
      <Link to="/email-verify">
        <button className="bg-pink-500 text-white font-bold p-3 rounded-lg  w-[200px] hover:bg-pink-400 transition duration-150 ease-in-out">
          Finish
        </button>
      </Link>
      <p className="text-gray-400 font-semibold text-xs mt-2">
        or Press RETURN
      </p>
    </div>
  );
};

export default WorkForm;
