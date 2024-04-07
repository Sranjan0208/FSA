const EmailVerify = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20 space-y-6 text-center">
      <h1 className="text-2xl font-bold">Please verify your email...</h1>
      <p className="font-semibold text-gray-500 ">
        Please verify your email address. We&apos; sent a confirmation email to:
      </p>
      <p className="  font-bold">account@refero.design</p>
      <p className="font-semibold text-gray-500">
        Click the confirmation link in that email to begin using Dribbble.
      </p>
      <p className="font-semibold text-gray-500">
        Didn&apos;t receive the email? Check your Spam folder, it may have been
        caught by a filter. If <br /> you still don&apos;t see it, you can{" "}
        <a href="#" className="text-pink-500">
          resend the confirmation email.
        </a>{" "}
      </p>
      <p className="text-gray-500 font-semibold">
        Wrong email address?{" "}
        <a href="#" className="text-pink-500">
          Change it.
        </a>
      </p>
    </div>
  );
};

export default EmailVerify;
