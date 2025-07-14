import React from "react";

function Gamecard({ title, image }) {
  return (
    <div className="text-start flex flex-col items-start">
      <img src={`/Images/Cards/Component${image}.jpg`} width={"100%"} />
      <h6 className="font-bold uppercase text-xs mt-2">{title}</h6>
      <p className="my-2 text-gray-700" style={{ fontSize: "10px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
        maximus tortor.
      </p>
      <button className="text-amber-400 text-xs font-bold cursor-pointer">
        Know More
      </button>
    </div>
  );
}

export default Gamecard;
