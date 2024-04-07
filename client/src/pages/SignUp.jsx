import Computer from "../assets/computer.png";
import SignUpForm from "../components/signUp/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-[#f4d489] w-[35%] flex flex-col justify-between h-full">
        <div className="py-10 px-7 flex-grow">
          <p className="font-extrabold text-3xl text-[#835023]">
            Discover the world&apos;s top <br />
            Designers & Creatives.
          </p>
          <img
            src={Computer}
            alt="computer interface"
            height={500}
            className="mt-20"
          />
        </div>
        <p className="text-sm text-[#835023] pb-5 px-7">Art by Peter Tarka</p>
      </div>

      <SignUpForm />
    </div>
  );
};

export default SignUp;
