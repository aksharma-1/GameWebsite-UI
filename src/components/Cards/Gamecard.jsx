import React from "react";

function Gamecard({ title, image }) {
  return (
    <div className="text-start p-2 flex flex-col items-start relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <img
        src={`/Images/Cards/Component${image}.jpg`}
        width={"100%"}
        className="max-w-xs transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
      />
      <h6 className="font-bold uppercase text-xs mt-2">{title}</h6>
      <p className="my-2 text-gray-700" style={{ fontSize: "10px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
        maximus tortor.
      </p>
      <button class="cursor-pointer group text-xs relative inline-flex items-center justify-center overflow-hidden rounded-md outline-1 outline-amber-400 px-6 font-medium text-amber-400">
        <span>Know More</span>
        <div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Gamecard;
