import React from "react";
import Image from "next/image";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[896px] flex items-center  min-h-[560px] border">
        <div className="w-1/2  border border-red-600 relative">
          <Image
            src="/login-office.webp"
            alt=""
            fill
            objectFit="w-full h-full"
          />
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default AuthLayout;
