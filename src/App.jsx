import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import LoggedInView from "./components/LoggedInView";

export default function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {isLoggedIn ? <LoggedInView /> : <LoginForm />}
    </div>
  );
}