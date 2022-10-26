import { Link } from "react-router-dom";
import agent from "../assets/agent.jpg";

export const About = ({ agentName }) => {
  return (
    <section className="">
      <div className="text-center lg:text-left">
        <div className=" m-auto justify-center lg:gap-24 md:mx-12">
          <div className=" flex justify-center flex-col md:flex-row  ">
           
           <div className=" xl:bg-neutral-100 bg-black">
            <div className="flex justify-center md:justify-end mb-0 h-[70vh]">
              <img 
              className="object-contain "
                src={agent}
                alt="Agent pic"
              />
            </div>

            <div className=" flex flex-col text-md font-bold px-4 py-8 text-left bg-neutral-100">
              <div>
                <i className="fa-solid fa-phone mr-5 text-yellow-600"></i> +370
                634 22 222
              </div>
              <div className="my-3">
                <i className="fa-solid fa-envelope mr-5 text-yellow-600"></i>
                {agentName}@gmail.com
              </div>
              <Link to="https://www.facebook.com">
                <i className="fa-brands fa-facebook text-blue-700 text-xl"></i>
              </Link>
            </div>
            </div>
           

            <div className="md:w-[600px] w-auto md:ml-12 ml-2 px-4">
              <div className="  mb-10 mt-4 text-justify font-medium">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div className=" text-justify">
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
              <div className=" text-justify">
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
        </div>
      </div>
    </section>
  );
};
