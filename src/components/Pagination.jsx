import React, { useState } from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = () => {
    if (currentPage == 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };
  const nextPage = () => {
    if (currentPage == 6) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="flex bg-purple-500 mt-10 p-5 justify-center">
      <div className="flex gap-3">
        <button class="cursor-pointer outline-1 outline-offset-1 outline-white group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200 duration-500" onClick={() => previousPage()}>
          <div class="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
            Previous
          </div>
          <div class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
            >
              <path
                d="M6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.70711 8H12.5C12.7761 8 13 7.77614 13 7.5C13 7.22386 12.7761 7 12.5 7H3.70711L6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>

        <button class="cursor-pointer outline-1 outline-offset-1 outline-white group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200 duration-500" onClick={() => nextPage()}>
          <div class="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
            Next
          </div>
          <div class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>

      </div>

      <ul
        className="flex items-center mx-4 gap-2"
        style={{
          fontSize: "14px",
        }}
      >
        {Array(6)
          .fill()
          .map((_, index) => (
            <li key={index}>
              <button
                className={`px-1 rounded cursor-pointer ${
                  currentPage === index + 1
                    ? "bg-amber-300"
                    : "bg-neutral-100 text-neutral-800 hover:bg-transparent hover:border hover:text-white"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Pagination;
