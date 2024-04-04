import Computer from "../assets/computer.png";
import SignUpForm from "../components/signUp/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex h-[100%] absolute">
      <div className="bg-[#f4d489] w-[35%] ">
        <div className="py-10 px-7 flex flex-col  ">
          <p className="font-extrabold text-3xl text-[#835023] ">
            Discover the world&apos;s top <br />
            Designers & Creatives.
          </p>
          <img
            src={Computer}
            alt="computer interface"
            height={500}
            className="mt-20 "
          />
          <p className="text-sm text-[#835023]  bottom-3 absolute">
            Art by Peter Tarka
          </p>
        </div>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
