import React from "react";

function ProductCard({ title, image }) {
  return (
    <div className="text-start flex flex-col items-start ">
      <div className="product_image bg-amber-100 rounded-xl w-full h-60 flex justify-center items-center">
        <img src={`/Images/Products/product${image}.png`} width={150}/>
      </div>
      <h6 className="font-bold uppercase text-xs mt-2">{title}</h6>
      <p className="my-2 text-gray-700" style={{ fontSize: "10px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
        maximus tortor.
      </p>
      <div className="flex items-center justify-between w-full">
        <p className="font-medium" style={{fontSize:'14px'}}>$100.99</p>
        <button
          className="text-amber-400 rounded font-bold cursor-pointer outline-1 p-1 outline-amber-400"
          style={{ fontSize: "10px" }}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
