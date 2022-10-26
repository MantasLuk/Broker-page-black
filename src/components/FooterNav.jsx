import { Link, NavLink } from "react-router-dom";

export const FooterNav = ({ agentName }) => {
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
  return (
    <>
      <nav className="bg-neutral-900 py-6">
        <div className=" flex flex-col md:flex-row justify-between md:mx-32 ">
          <Link to="/">
            <div className=" p-4 text-center uppercase md:text-start text-xl font-bold text-white">
              {agentName}
            </div>
          </Link>

          <ul className="flex p-4 md:flex-row flex-col text-center text-sm font-medium text-white">
            {NavMeniuList.map((item) => (
              <li key={item.id}>
                <div className=" hover:underline hover:text-yellow-600 min-w-max p-4 md:py-0">
                  {item.link}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
