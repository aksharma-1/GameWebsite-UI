import React from "react";

function Footer() {
  return (
    <div className="bg-gray-900 text-white p-10 flex flex-col justify-center items-center gap-4">
      <img src="/Images/logo2.png" width={120} />
      <ul
        className="grid grid-cols-3 sm:grid-cols-7 gap-8 place-items-center justify-items-center"
        style={{ fontSize: "12px" }}
      >
        <li>
          <button className="cursor-pointer uppercase font-medium hover:scale-110 duration-300 ease-in-out">
            Product
          </button>
        </li>
        <li>
          <button className="cursor-pointer uppercase font-medium hover:scale-110 duration-300 ease-in-out">
            Features
          </button>
        </li>
        <li>
          <button className="cursor-pointer uppercase font-medium hover:scale-110 duration-300 ease-in-out">
            Pricing
          </button>
        </li>
        <li>
          <button className="cursor-pointer uppercase font-medium hover:scale-110 duration-300 ease-in-out">
            Reasoures
          </button>
        </li>
        <li>
          <button className="cursor-pointer uppercase font-medium hover:scale-110 duration-300 ease-in-out">
            Careers
          </button>
        </li>
        <li>
          <button className="cursor-pointer uppercase font-medium hover:scale-110 duration-300 ease-in-out">help</button>
        </li>
        <li className="col-span-3 sm:col-span-1">
          <button className="cursor-pointer uppercase font-medium hover:scale-110 duration-300 ease-in-out">
            Privacy
          </button>
        </li>
      </ul>

      <p className="capitalize text-xs">
        designed by new tech fusion cyber tech
      </p>
    </div>
  );
}

export default Footer;
