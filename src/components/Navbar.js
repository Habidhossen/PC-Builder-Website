import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  // declare state for handling navigation bar
  const [state, setState] = useState(false);

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-2xl font-bold text-indigo-600">PC.</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {/* dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-500 p-2 rounded flex items-center justify-between gap-2">
                <span>Categories</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="hidden w-36 space-y-4 px-3 py-2 absolute top-full left-0 mt-1 bg-white border rounded-lg shadow-md group-hover:block">
                <li>
                  <Link href="/" className="hover:text-blue-500">
                    CPU / Processor
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-500">
                    Motherboard
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-500">
                    RAM
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-500">
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-500">
                    Storage Device
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-500">
                    Monitor
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-500">
                    GPU
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-500">
                    Mouse
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-500">
                    Keyboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* button */}
            <li>
              <Link
                href="pc-builder"
                className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
              >
                PC Builder
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
