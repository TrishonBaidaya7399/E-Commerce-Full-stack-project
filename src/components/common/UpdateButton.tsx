"use client";

import { useFormStatus } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="
        bg-lama 
        text-white 
        p-2 
        rounded-md 
        text-center
        disabled:bg-pink-200 `
        disabled:cursor-not-allowed 
        max-w-96"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update"}
    </button>
  );
};

export default UpdateButton;
