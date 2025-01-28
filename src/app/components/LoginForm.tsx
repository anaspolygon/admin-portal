"use client";
import React from "react";
import { Input, Button, Typography, Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Title } = Typography;

const LoginForm = () => {
  const router = useRouter();
  return (
    <div className="w-[500px]">
      <Card className="shadow-lg">
        <Title level={2}>Login</Title>
        <Input size="large" placeholder="Email" />
        <Input.Password className="my-4" size="large" placeholder="Password" />
        <Button
          onClick={() => router.push("/dashboard")}
          type="primary"
          size="large"
          className="w-full"
        >
          Log in
        </Button>
        <div className="flex justify-between mt-4">
          <Link href="/signup">Create An Account</Link>
          <Link className="text-black" href="/forgot-password">
            Forgot your password?
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
