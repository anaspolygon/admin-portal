"use client";
import React, { useState } from "react";
import { Input, Button, Typography, Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Title } = Typography;

const SignupForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validatePassword = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };
  
  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  const handleLogin = () => {
    if (!name) {
      setNameError("Name is required");
    }
    if (!email) {
      setEmailError("Email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character"
      );
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required");
    } 
    if (!validateConfirmPassword(password, confirmPassword)) {
      setConfirmPasswordError("Passwords do not match");
    }
    if (
      password &&
      validatePassword(password) &&
      confirmPassword &&
      validateConfirmPassword(password, confirmPassword)
    ) {
      // Perform login logic
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="w-[500px]">
      <Card className="shadow-lg">
        <Title level={2}>Create an account</Title>
        <Input onChange={(e)=> {
          setName(e.target.value)
          setNameError("")
          }} size="large" placeholder="Name" />
        {nameError && <p className="text-red-500 mt-2">{nameError}</p>}
        <Input
          size="large"
          placeholder="Email"
          onChange={(e)=> {
            setEmail(e.target.value)
            setEmailError("")
          }}
          style={{
            marginTop: 16,
            marginBottom:16
          }}
        />
         {emailError && <p className="text-red-500 mb-2">{emailError}</p>}
        <Input.Password  onChange={(e)=> {
          setPassword(e.target.value)
          setPasswordError("")
        }}  className="mb-4" size="large" placeholder="Password" />
        {passwordError && <p className="text-red-500 mb-2">{passwordError}</p>}
        <Input.Password
          className="mb-2"
          size="large"
          placeholder="Confrim password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError("");
          }}
        />
        {confirmPasswordError && (
          <p className="text-red-500 mb-2">{confirmPasswordError}</p>
        )}
        <Button
          onClick={() => handleLogin()}
          type="primary"
          size="large"
          className="w-full mt-2"
        >
          Sign Up
        </Button>
        <div className="flex justify-between mt-4">
          <Link href="/login">Already member? Login</Link>
          <Link href="/forgot-password" className="text-black">
            Forgot your password?
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignupForm;
