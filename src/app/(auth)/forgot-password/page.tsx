"use client";
import React from "react";
import { Input, Button, Typography, Card } from "antd";
import Link from "next/link";

const { Text } = Typography;

const ForgotPassword = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[430px]">
        <Card className="shadow-lg">
          <p className="mb-5 text-base">
            Don't worry, we'll send you an email to reset your password.
          </p>
          <Input
            style={{
              marginBottom: 16,
            }}
            size="large"
            placeholder="Email"
          />
          <Button type="primary" size="large" className="w-full">
            Reset Password
          </Button>
          <div className="flex justify-between mt-4">
            <Text>
              Don't have an account?
              <Link href="/login"> Log in</Link>
            </Text>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
