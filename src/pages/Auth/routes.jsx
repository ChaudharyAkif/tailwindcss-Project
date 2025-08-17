import React from "react";
import LoginForm from "./Login";
import RegisterForm from "./Register";
import { Route, Routes } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Routes>
    </>
  );
};

export default Auth;
