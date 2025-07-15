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
          <button className="cursor-pointer uppercase font-medium">
            Product
          </button>
        </li>
        <li>
          <button className="cursor-pointer uppercase font-medium">
            Features
          </button>
        </li>
        <li>
          <button className="cursor-pointer uppercase font-medium">
            Pricing
          </button>
        </li>
        <li>
          <button className="cursor-pointer uppercase font-medium">
            Reasoures
          </button>
        </li>
        <li>
          <button className="cursor-pointer uppercase font-medium">
            Careers
          </button>
        </li>
        <li>
          <button className="cursor-pointer uppercase font-medium">help</button>
        </li>
        <li className="col-span-3 sm:col-span-1">
          <button className="cursor-pointer uppercase font-medium">
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
