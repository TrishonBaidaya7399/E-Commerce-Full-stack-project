"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Confetti from "react-confetti";

type Props = {};

function SuccessPage({}: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("orderId");
  useEffect(() => {
    if (!orderId) {
      console.log("OrderId not found");
      return;
    }
    const timer = setTimeout(() => {
      router.push("/order/" + orderId);
    }, 5000);
    return () => clearTimeout(timer);
  }, [orderId, router]);
  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col gap-4 items-center justify-center">
      <Confetti width={2000} height={1000} />
      <h2 className="text-green-600 font-bold text-6xl text-center">
        Successful!
      </h2>
      <h3 className="font-medium text-xl text-center">
        We have sent the invoice to your email
      </h3>
      <h4 className="text-center">
        You are being redirected to the order page withing 5 seconds...
      </h4>
    </div>
  );
}

export default SuccessPage;
