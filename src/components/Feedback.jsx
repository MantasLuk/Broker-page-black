export const Feedback = ({ propList }) => {
  return (
    <div className="my-12">
      <h2 className="my-12 text-4xl  uppercase tracking-tight font-extrabold text-center">
        Atsiliepimai
      </h2>
      <p className=" font-light text-center sm:text-xl  m-12 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        cupiditate? Perspiciatis voluptates
      </p>

      <section className="flex flex-wrap gap-5 justify-center" >
        <div className=" rounded-lg shadow-2xl border border-gray-300 md:w-[600px] w-full mx-4">
          <div className="p-8">
            <p className="mb-3 font-normal text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quasi dolores nisi, enim maxime quibusdam dolor sed. Repellendus
              possimus aut fugiat, beatae veniam sit dignissimos.
            </p>
            <h3 className="text-center mt-12 text-xl font-bold">John Brown</h3>
            <h3 className="text-center text-yellow-600">Agent Name</h3>
          </div>
        </div>
      </section>
    </div>
  );
};
