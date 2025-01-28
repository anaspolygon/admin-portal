"use client";
import React from "react";
import { Input, Button, Typography, Card } from "antd";
import Link from "next/link";

const { Title } = Typography;

const LoginForm = () => {
  return (
    <div className="w-[500px]">
      <Card className="shadow-lg">
        <Title level={2}>Login</Title>
        <Input size="large" placeholder="Email" />
        <Input.Password className="my-4" size="large" placeholder="Password" />
        <Button type="primary" size="large" className="w-full">
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
