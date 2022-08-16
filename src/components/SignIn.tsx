function SignIn() {
  return (
    <div>
      <div>
        <div className="bg-pink p-[8px]">
          <img src={window.location.origin + '/images/padlock.png'} alt="padlock" />
        </div>
        <h1>Sign In</h1>
      </div>
      <form className="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type="submit">Sign In</button>
      </form>
      <div className="flex justify-between">
        <button type="button">Lorem, ipsum.</button>
        <button type="button">Lorem, ipsum.</button>
      </div>
    </div>
  );
}

export default SignIn;
