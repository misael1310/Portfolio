import classNames from "classnames";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const linkClass =
    "block py-2 px-3 text-ebony rounded md:bg-transparent md:p-0";
  return (
    <nav className="max-w-screen-xl m-auto bg-timberwolf">
      <div className="flex flex-wrap items-center justify-end md:h-20 pt-8 md:pt-0 px-6">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={classNames("w-full md:block md:w-auto", {
            hidden: !isOpen,
          })}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 items-center">
            <li>
              <a href="/" className={linkClass} aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/" className={linkClass}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block px-6 py-1 text-ebony rounded-3xl md:bg-transparent border-ebony dark:border "
              >
                About me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
