import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import agent from "../assets/agent.jpg";

export const Hero = ({ agentName }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <section>
      <div className=" text-white text-center lg:text-left bg-neutral-900">
        <div className=" flex flex-col-reverse lg:flex-row m-auto justify-center lg:gap-24 md:mx-12 ">
          <div className="lg:max-w-[500px] mx-4 flex justify-center flex-col">
            <div className="w-100 flex justify-center">
              <h3 className="lg:text-[5rem] text-[3rem] uppercase leading-none tracking-widest font-bold my-8 ">
                {agentName}
              </h3>
            </div>

            <div className={`${width < breakpoint ? "block" : "hidden"}`}>
              <div className="flex justify-center mb-0">
                <img  src={agent} alt="Agent pic" />
              </div>
            </div>

            <div className="">
              <div className=" text-yellow-600 font-medium text-start my-4 ">
                <Link to="/">
                  <i className="fa-solid fa-arrow-right mr-3"></i>Rodyti daugiau
                </Link>
              </div>
              <div className="  mb-10 mt-4 text-justify font-medium">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam ea autem dolores quos vitae ex sunt deserunt libero
                  ipsum? Voluptates nobis tempora fugiat perspiciatis
                </p>
              </div>
              <div className=" text-justify mb-12">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam ea autem dolores quos vitae ex sunt deserunt libero
                  ipsum? Voluptates nobis tempora fugiat perspiciatis qui
                  suscipit omnis adipisci obcaecati, distinctio repellat aliquid
                  aliquam autem? Est, voluptatibus? Libero a, eaque totam
                  doloremque odit, quae ipsam tempore, quasi doloribus quo
                  repellendus voluptatibus.
                </p>
              </div>
            </div>
          </div>
          <div className={`${width > breakpoint ? "block" : "hidden"}`}>
            <div className=" m-2 mb-0">
              <img
              className="min-h-[89vh] w-auto"
                src={agent}
                alt="Agent pic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
