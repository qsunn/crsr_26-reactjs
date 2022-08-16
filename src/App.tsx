import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 grid place-items-center">
      <Routes>
        <Route
          path="/crsr_26-reactjs"
          element={<Navigate to="/crsr_26-reactjs/sign-in" />}
        />
        <Route path={"/crsr_26-reactjs/sign-in"} element={<SignIn />} />
        <Route path="/crsr_26-reactjs/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
