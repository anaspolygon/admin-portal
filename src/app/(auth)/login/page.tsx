import AuthLayout from "@/app/components/AuthLayout";
import LoginForm from "@/app/components/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* <AuthLayout /> */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
