import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/loginFormSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleChange = (e) => {
    const val = e.target.value;
    setEmail(val);

    if (val === "" || validateEmail(val)) {
      setError("");
    } else {
      setError("Пожалуйста, введите корректный e-mail");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Невалидный e-mail, попробуйте еще раз");
      return;
    }
    dispatch(login(email));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
    >
      <h2 className="text-2xl mb-4 text-center">Войти</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        onBlur={() => {
          if (email && !validateEmail(email)) {
            setError("Неверный e-mail");
          }
        }}
        className={`
          w-full border rounded px-3 py-2 mb-1
          focus:outline-none focus:ring
          ${error ? "border-red-500 focus:ring-red-200" : ""}
        `}
      />
      {error && (
        <p className="text-red-500 text-sm mb-2">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={!!error || !email}
        className="w-full bg-blue-500 text-white py-2 rounded disabled:opacity-50"
      >
        Login
      </button>
    </form>
  );
}