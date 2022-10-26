import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = ({ title }) => {
  const NavMeniuList = [
    {
        id: "1",
        link: <NavLink to="/properties">NT Objektai</NavLink>,
      },
    {
      id: "2",
      link: <NavLink to="/about">Apie</NavLink>,
    },
    {
      id: "3",
      link: <NavLink to="/contacts">Susisiekite</NavLink>,
    },

    {
        id: "4",
        link: <NavLink to="feedback">Atsiliepimai</NavLink>,
      },
  ];
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="bg-neutral-900 py-6 lg:px-12">
        <div className="flex lg:flex-row  flex-col lg:mx-20 md:flex-row lg:items-center">
          <div className="flex justify-between w-full pl-6">
            <div>
              <Link to="/">
                <span className="flex items-center self-center text-xl lg:text-3xl font-bold text-white uppercase">
                  {title}
                </span>
              </Link>
            </div>
            {/* Hamburger Meniu */}

            <div className="md:hidden ">
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
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
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`flex justify-self-center md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="text-white flex flex-col md:flex-row w-full justify-center p-6 gap-3 md:gap-8">
              {NavMeniuList.map((item) => (
                <li key={item.id}>
                  <div className="hover:text-yellow-600 hover:underline min-w-max font-medium">
                    {item.link}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};