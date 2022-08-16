import { useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../user.model";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [save, setSave] = useState(false);

  const inputClass =
    "bg-neutral-900 border border-neutral-600 rounded-[4px] p-[16px] text-sm w-full placeholder:text-neutral-400";
  const textBtnClass = "block text-sm text-blue-200";

  const reset = () => {
    setEmail('');
    setPassword('');
    setSave(false);
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const user: IUser = {
      firstName: '',
      lastName: '',
      email: email,
      password: password,
      promo: false,
      save: false
    };
    console.log(user);
    reset();
  };

  const emailHandler = (event: any) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
  };

  const checkboxHandler = () => {
    setSave((prev) => !prev);
  };

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
      <form className="grid auto-rows-min place-items-center gap-[16px] w-full" id="form" onSubmit={(event) => submitHandler(event)}>
        <input
          type="email"
          className={inputClass}
          placeholder="Email Address *"
          onChange={(event) => emailHandler(event)}
          value={email}
        />
        <input
          type="password"
          className={inputClass}
          placeholder="Password *"
          onChange={(event) => passwordHandler(event)}
          value={password}
        />
        <div className="justify-self-start mb-[16px] text-sm flex items-center">
          <input
            id="save"
            type="checkbox"
            checked={save}
            onChange={checkboxHandler}
            className="w-[16px] h-[16px]"
          />
          <label
            htmlFor="save"
            className="ml-[10px] text-sm text-neutral-400 dark:text-gray-300"
          >
            Remember me
          </label>
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
