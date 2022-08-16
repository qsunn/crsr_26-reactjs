import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [save, setSave] = useState(false);

  const inputClass =
    "bg-neutral-900 border border-neutral-600 rounded-[4px] p-[16px] text-sm w-full placeholder:text-neutral-400";
  const textBtnClass = "block text-sm text-blue-200";

  return (
    <div className="grid auto-rows-min place-items-center gap-[16px] text-white border border-neutral-600 rounded-[8px] p-[48px]">
      <div className="grid auto-rows-min place-items-center gap-[8px] mb-[8px]">
        <div className="inline-block rounded-full bg-rose-300 p-[12px]">
          <img
            src={process.env.PUBLIC_URL + "/images/padlock.png"}
            alt="padlock"
            width="24"
          />
        </div>
        <h1 className="text-xl">Sign In</h1>
      </div>
      <form className="grid auto-rows-min place-items-center gap-[16px] w-full">
        <input
          type="email"
          className={inputClass}
          placeholder="Email Address *"
        />
        <input
          type="password"
          className={inputClass}
          placeholder="Password *"
        />
        <div className="justify-self-start mb-[16px] text-sm flex items-center">
          <input
            type="checkbox"
            name="save"
            id="save"
            className="default:bg-neutral-900"
          />
          <label htmlFor="save" className="ml-[10px]">Remember me</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-300 text-black font-bold text-xs uppercase py-[8px] rounded-[4px]"
        >
          Sign In
        </button>
      </form>
      <div className="grid grid-cols-2 gap-[8px]">
        <button type="button" className={`${textBtnClass} justify-self-start`}>
          Forgot password?
        </button>

        <button type="button" className={`${textBtnClass} justify-self-end`}>
          <Link to="/crsr_26-reactjs/sign-up">
            Don't have an account? Sign Up
          </Link>
        </button>
      </div>
      <p className="mt-[48px] text-neutral-400 text-xs">
        Copyright &copy; Your Website 2020.
      </p>
    </div>
  );
}

export default SignIn;
