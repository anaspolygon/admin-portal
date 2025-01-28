"use client";
import React from "react";
import { Input, Button, Typography, Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Title } = Typography;

const SignupForm = () => {
  const router = useRouter();
  return (
    <div className="w-[500px]">
      <Card className="shadow-lg">
        <Title level={2}>Create an account</Title>
        <Input size="large" placeholder="Name" />
        <Input
          size="large"
          placeholder="Email"
          style={{
            marginTop: 16,
            marginBottom: 16,
          }}
        />
        <Input.Password className="mb-4" size="large" placeholder="Password" />
        <Input.Password
          className="mb-4"
          size="large"
          placeholder="Confrim password"
        />
        <Button
          onClick={() => router.push("/dashboard")}
          type="primary"
          size="large"
          className="w-full"
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
