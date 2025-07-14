import React from "react";

function NewsLetter() {
  return (
    <div className="bg-neutral-900 flex justify-center items-center p-10 gap-4">
      <div>
        <img src="/Images/Layer2.png" width={150} />
      </div>

      <div>
        <h6 className="uppercase text-white font-medium text-xl">
          Sign up for our newsletter
        </h6>
        <p className="text-neutral-300 text-xs">
          Stay in the loop with everything you need to know.
        </p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="border-1 rounded-lg p-1 px-2 flex items-center w-60 bg-white">
            <input
              type="email"
              className="rounded-md text-xs p-1 w-full focus:border-0 "
              placeholder="Enter your email"
            ></input>
          </div>
          <div>
            <button className="cursor-pointer bg-amber-300 text-neutral-800 text-xs px-3 p-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
        <p className="text-neutral-400 mt-1" style={{fontSize:'8px'}}>
          We care about your data in our <span className="text-amber-300">privacy policy</span>
        </p>
      </div>
    </div>
  );
}

export default NewsLetter;
