"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";
import { notFound } from "next/navigation";

const OrderPage = async ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const wixClient = await wixClientServer();
  let order;
  try {
    order = await wixClient.orders.getOrder(id);
  } catch (error) {
    console.error(error);
    return notFound();
  }
  console.log({ OrderDetails: order });
  return (
    <div className="h-[calc(100vh - 180px)] flex flex-col items-center justify-center">
      <h2 className="text-gray-800 font-bold text-4xl text-center ">
        Oder Details
      </h2>
      <div className="orderDetails_form flex flex-col gap-4 mt-12">
        <div className="flex flex-row gap-3">
          <span className="font-medium text-gray-800">Order Id: </span>
          <span className="font-medium text-gray-700">{order?._id}</span>
        </div>
        <div className="flex flex-row gap-3">
          <span className="font-medium text-gray-800">Receiver Name: </span>
          <span className="font-medium text-gray-700">
            {order?.billingInfo?.contactDetails?.firstName}{" "}
            {order?.billingInfo?.contactDetails?.lastName}
          </span>
        </div>
        <div className="flex flex-row gap-3">
          <span className="font-medium text-gray-800">Receiver Email: </span>
          <span className="font-medium text-gray-700">
            {order?.buyerInfo?.email}
          </span>
        </div>
        <div className="flex flex-row gap-3">
          <span className="font-medium text-gray-800">Price: </span>
          <span className="font-medium text-gray-700">
            {order?.priceSummary?.subtotal?.formattedAmount}
          </span>
        </div>
        <div className="flex flex-row gap-3">
          <span className="font-medium text-gray-800">Payment Status: </span>
          <span className="font-medium text-gray-700">
            {order?.paymentStatus}
          </span>
        </div>
        <div className="flex flex-row gap-3">
          <span className="font-medium text-gray-800">Order Status: </span>
          <span className="font-medium text-gray-700">{order?.status}</span>
        </div>
        <div className="flex flex-row gap-3">
          <span className="font-medium text-gray-800">Delivery Address: </span>
          <span className="font-medium text-gray-700">
            {order?.billingInfo?.address?.addressLine1}{" "}
            {order?.billingInfo?.address?.addressLine2},{" "}
            {order?.billingInfo?.address?.city},{" "}
            {order?.billingInfo?.address?.country},{" "}
            {order?.billingInfo?.address?.postalCode}
          </span>
        </div>
      </div>
      <Link href="/" className="underline mt-10 text-blue-500 text-md">
        Have a problem? Contact us
      </Link>
    </div>
  );
};

export default OrderPage;
