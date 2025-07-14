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
    <div className="flex bg-purple-500 my-10 p-5 justify-center">
      <div className="flex gap-3">
        <button
          className="cursor-pointer text-white p-1 font-medium outline-1 px-3 outline-offset-1 outline-white rounded-lg"
          style={{ fontSize: "10px" }}
          onClick={() => previousPage()}
        >
          PREVIOUS
        </button>
        <button
          className="cursor-pointer text-xs p-1 font-medium bg-amber-300 px-3 o rounded-lg shadow-lg shadow-amber-500/5"
          style={{ fontSize: "10px" }}
          onClick={() => nextPage()}
        >
          NEXT
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
            <li>
              <button
                className={`px-1 rounded cursor-pointer ${
                  currentPage === index + 1
                    ? "bg-white"
                    : "bg-neutral-400 text-neutral-800"
                }`}
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
