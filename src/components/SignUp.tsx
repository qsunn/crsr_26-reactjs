import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../user.model";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [promo, setPromo] = useState(false);

  const inputClass =
    "bg-neutral-900 border border-neutral-600 rounded-[4px] p-[16px] text-sm w-full placeholder:text-neutral-400";
  const textBtnClass = "block text-sm text-blue-200";

  const reset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPromo(false);
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const user: IUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      promo: promo,
      save: false
    };
    console.log(user);
    reset();
  };

  const firstNameHandler = (event: any) => {
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event: any) => {
    setLastName(event.target.value);
  };

  const emailHandler = (event: any) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
  };

  const checkboxHandler = () => {
    setPromo((prev) => !prev);
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
        <h1 className="text-xl">Sign Up</h1>
      </div>
      <form
        className="grid auto-rows-min place-items-center gap-[16px] w-full"
        id="form"
        onSubmit={(event) => submitHandler(event)}
      >
        <div className="grid grid-cols-2 gap-[16px]">
          <input
            type="text"
            className={inputClass}
            placeholder="First Name *"
            onChange={(event) => firstNameHandler(event)}
            value={firstName}
          />
          <input
            type="text"
            className={inputClass}
            placeholder="Last Name *"
            onChange={(event) => lastNameHandler(event)}
            value={lastName}
          />
        </div>
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
            id="promo"
            type="checkbox"
            checked={promo}
            onChange={checkboxHandler}
            className="w-[16px] h-[16px]"
          />
          <label
            htmlFor="promo"
            className="ml-[10px] text-sm text-neutral-400 dark:text-gray-300"
          >
            I want to receive inspiration, marketing
            <br /> promotions and updates via email.
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-300 text-black font-bold text-xs uppercase py-[8px] rounded-[4px]"
        >
          Sign Up
        </button>
      </form>
      <button type="button" className={`${textBtnClass} justify-self-end`}>
        <Link to="/crsr_26-reactjs/sign-in">
          Already have an account? Sign in
        </Link>
      </button>
      <p className="mt-[48px] text-neutral-400 text-xs">
        Copyright &copy; Your Website 2020.
      </p>
    </div>
  );
}

export default SignUp;
