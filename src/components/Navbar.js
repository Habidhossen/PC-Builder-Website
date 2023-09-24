import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  // declare state for handling navigation bar
  const [state, setState] = useState(false);

  // declare state for handling navigation bar dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // handle dropdown open and close
  let timeoutId;

  const openDropdown = () => {
    clearTimeout(timeoutId);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Adjust the delay as needed
  };

  // categories data
  const categories = [
    { name: "CPU / Processor", slug: "cpu" },
    { name: "Motherboard", slug: "motherboard" },
    { name: "RAM", slug: "ram" },
    { name: "Power Supply Unit", slug: "psu" },
    { name: "Storage Device", slug: "storage" },
    { name: "Monitor", slug: "monitor" },
    { name: "GPU", slug: "gpu" },
    { name: "Mouse", slug: "mouse" },
    { name: "Keyboard", slug: "keyboard" },
  ];

  return (
    <nav className="bg-white backdrop-blur-md bg-opacity-60 fixed top-0 left-0 right-0 z-10 text-sm">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-2xl font-black text-transparent bg-gradient-to-l from-[#ff7d1e] to-[#fd40e5] bg-clip-text">
              dreamPC.
            </h1>
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
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 lg:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {/* dropdown */}
            <div
              className="relative group z-10"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button className="hover:text-[#ff7d1e] p-2 rounded flex items-center justify-between gap-2">
                <span>Categories</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transition-transform transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
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
              <ul
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } w-36 space-y-4 px-3 py-2 absolute top-full left-0 mt-1 border rounded-lg shadow-md bg-white`}
              >
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={`/category/${category.slug}`}
                      className="hover:text-[#ff7d1e]"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* button */}
            <li>
              <Link
                href="/pc-builder"
                className="w-full px-8 py-3 mt-6 text-sm font-semibold text-white bg-gradient-to-r from-[#ff7d1e] to-[#fd40e5] hover:bg-gradient-to-l from-[#ff7d1e] to-[#fd40e5] rounded-lg lg:w-auto"
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
