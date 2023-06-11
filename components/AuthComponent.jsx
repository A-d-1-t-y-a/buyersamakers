import { memo } from "react";

function AuthUIComponent({ title, buttonTitle,onClick, children, belowButton }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div>
        <p className="text-center text-4xl sm:text-5xl font-bold text-white py-3 px-4 rounded-xl titleRotationAnimation">
          Makers and Buyers
        </p>
        <div className="flex flex-col items-center gap-5 bg-white rounded-2xl px-7 py-5 mt-5">
          <p className="text-slate-500 text-3xl font-medium">{title}</p>
          {children}
          <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-red-500 hover:to-teal-500 transition-all duration-1000 ease-in delay-150  rounded-3xl py-2 px-8 font-medium text-white text-lg w-full" onClick={onClick}>
            {buttonTitle}
          </button>
          {belowButton}
        </div>
      </div>
    </div>
  );
}

export default memo(AuthUIComponent);
