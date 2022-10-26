import { Link } from "react-router-dom";

export const Footer = ({agentName}) => {
  return (
    <footer className="p-8 bg-neutral-200">
      <div className=" md:flex md:justify-around text-md font-bold">
        <div>
          <i className="fa-solid fa-phone mr-5 text-yellow-600"></i> +370 634 22
          222
        </div>
        <div className="my-3 md:my-0">
          <i className="fa-solid fa-envelope mr-5 text-yellow-600"></i>
          {agentName}@gmail.com
        </div>
        <Link to="https://www.facebook.com">
          <i className="fa-brands fa-facebook text-blue-700 text-xl"></i>
        </Link>
      </div>
    </footer>
  );
};