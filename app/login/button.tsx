import React from "react";
import Spinner from "./spinner";

interface ButtonProps {
  isLoading: boolean;
  enabled: boolean;
  callback: () => void;
}

export default function Button({ isLoading, enabled, callback }: ButtonProps) {
  return (
    <div className="">
      <div className="absolute opacity-0">
        <Spinner />
      </div>
      <button
        type="submit"
        disabled={isLoading || !enabled}
        className={`${
          isLoading || !enabled ? "bg-[gray] " : "bg-[#4960F9] relative "
        } text-[white] 
        text-center mx-auto block mt-[6vh] px-14 py-4 rounded-[20px]`}
        onClick={callback}
      >
        {isLoading && <Spinner />}
        {!isLoading && <p>تايید شماره تلفن</p>}
      </button>
    </div>
  );
}
