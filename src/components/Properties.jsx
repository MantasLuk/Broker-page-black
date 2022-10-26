import { Link } from "react-router-dom";

export const Properties = ({ propList }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <h2 className="my-12 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        NT Objektai
      </h2>
      <p className="m-12 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        cupiditate? Perspiciatis voluptates possimus laudantium ducimus!
      </p>

      <section className="grid md:grid-cols-2 px-8 gap-5 justify-center h-[720px] overflow-x-auto">
        {propList.map((property) => (
          <div
            key={property.id}
            className=" bg-white rounded-lg shadow-lg border border-gray-300"
          >
            <img
              className="rounded-t-lg object-contain"
              src={property.propImg}
              alt="pic of property"
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {property.propName}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {property.location}
              </p>
              <div className="flex flex-col gap-3">
                <div>
                  <i className="fa-solid fa-location-dot mr-3"></i>
                  {property.location}
                </div>
                <div>
                  <i className="fa-solid fa-vector-square mr-3"></i>
                  {property.area}
                </div>
                <div>
                  <i className="fa-solid fa-tag mr-3"></i>
                  {property.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="flex justify-center my-12">
        <Link to="properties" onClick={scrollToTop}>
          <button className="py-3 px-12 text-sm font-medium text-center text-yellow-600 rounded-3xl bg-neutral-900  ">
          <i className="fa-solid fa-arrow-right mr-3"></i>Visi NT Objektai
          </button>
        </Link>
      </div>
    </div>
  );
};