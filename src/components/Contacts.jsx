
export const Contacts = ({agentName}) => {
  return (
    <>
      <section className="bg-neutral-900 text-white">
        <div className="py-8 lg:py-16">
          <h2 className="mb-12 text-4xl uppercase tracking-tight font-extrabold text-center">
            Kontaktai
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl mx-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            cupiditate? Perspiciatis voluptates possimus laudantium ducimus!
          </p>
          <div className="lg:grid grid-cols-[400px_minmax(400px,_800px)] gap-5 md:mx-24 flex flex-col justify-center ">
            <div className="flex md:justify-center items-start p-8 ">
              <div className=" flex flex-col text-md font-bold text-start">
                <div>
                  <i className="fa-solid fa-phone mr-5 text-yellow-600"></i>
                  +370 634 22 222
                </div>
                <div className="my-8 ">
                  <i className="fa-solid fa-envelope mr-5 text-yellow-600"></i>
                  {agentName}@gmail.com
                </div>
              </div>
            </div>

            <form action="#" className="space-y-8 px-6">
              <div className="grid md:grid-cols-2 gap-10 grid-cols-1">
                <div>
                  <label className="text-gray-400">Vardas</label>
                  <input
                    type="text"
                    id="subject"
                    className="border border-gray-300 shadow-sm rounded-md w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-400">Pavarde</label>
                  <input
                    type="text"
                    id="subject"
                    className="border border-gray-300 shadow-sm rounded-md w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 grid-cols-1">
                <div>
                  <label className="text-gray-400">Elektroninis pastas</label>
                  <input
                    type="email"
                    id="subject"
                    className="border border-gray-300 shadow-sm rounded-md w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-400">Telefonas</label>
                  <input
                    type="tel"
                    id="subject"
                    className="border border-gray-300 shadow-sm rounded-md w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                 
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Jusu zinute
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div className="flex justify-center ">
                <button
                  type="submit"
                  className="py-3 px-12 text-sm  font-medium text-center rounded-3xl bg-yellow-600  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <i className="fa-solid fa-arrow-right mr-3"></i>Susisiekite
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
