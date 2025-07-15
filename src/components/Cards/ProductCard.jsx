import React from "react";

function ProductCard({ title, image }) {
  return (
    <div className="text-start flex flex-col items-start ">
      <div className="product_image group bg-amber-100 rounded-xl w-full h-60 flex justify-center items-center cursor-pointer">
        <img
          src={`/Images/Products/product${image}.png`}
          width={150}
          className="ease-in-out duration-200 group-hover:rotate-6 group-hover:scale-120 transform transition-transform"
        />
      </div>
      <h6 className="font-bold uppercase text-xs mt-2">{title}</h6>
      <p className="my-2 text-gray-700" style={{ fontSize: "10px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
        maximus tortor.
      </p>
      <div className="flex items-center justify-between w-full">
        <p className="font-medium" style={{ fontSize: "14px" }}>
          $100.99
        </p>

        <button class="cursor-pointer group relative inline-flex items-center justify-center overflow-hidden rounded-md outline-2 outline-amber-400 font-medium text-xs">
          <div class="inline-flex translate-x-0 items-center justify-center text-amber-400 p-1 bg-white px-4 transition group-hover:-translate-x-[150%]">
            BUY NOW
          </div>
          <div class="absolute inline-flex w-full translate-x-[100%] items-center justify-center p-1 bg-amber-400 px-4 text-neutral-50 transition duration-300 group-hover:translate-x-0">
            BUY NOW
          </div>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
