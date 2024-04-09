import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbCameraPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tutorial");
    data.append("cloud_name", "deiyuhmow");
    fetch("https://api.cloudinary.com/v1_1/deiyuhmow/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        setFileName("");
      })
      .catch((err) => console.log(err));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/work-info");
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome! Let&apos;s create your profile
        </h1>
        <p className="text-gray-500 mb-8">
          Let others get to know you better! You can do these later
        </p>

        <div className="flex items-center space-x-4 mt-4">
          <label
            htmlFor="upload"
            className="relative w-[160px] h-[160px] border-2 border-dashed rounded-full mr-5 flex items-center justify-center cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {url ? (
                <img
                  src={url}
                  alt="Uploaded"
                  className="w-[160px] h-[160px] object-cover"
                />
              ) : (
                <TbCameraPlus className="text-gray-600 text-xl" />
              )}
            </div>
            <input
              id="upload"
              type="file"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            />
          </label>
          <div className="flex flex-col justify-center">
            <button
              onClick={uploadImage}
              className="rounded-lg px-3 text-sm py-2 border font-semibold mb-5 mr-5 hover:bg-gray-200 transition duration-150 ease-in-out"
            >
              Choose Image
            </button>
            {fileName && (
              <p className="text-sm text-gray-400 mb-2">{fileName}</p>
            )}
            <p className="text-sm text-gray-400 font-semibold flex items-center justify-center cursor-pointer">
              <MdKeyboardArrowRight /> Or choose one of our defaults
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold mb-3 mt-10">Add your location</h2>
          <input
            className="outline-none py-2 mb-7 border-b"
            placeholder="Enter a location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <button
            type="submit"
            className="bg-pink-500 text-white font-bold p-3 rounded-lg w-[200px] hover:bg-pink-400 transition duration-150 ease-in-out"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
