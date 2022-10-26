import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { divIcon } from "leaflet";
import { useRef } from "react";

export const PropertyList = ({ propList }) => {
  const mapPinsEl = useRef([]);

  const mainMarkerColour = "#F85757";

  const markerHtmlStyles = `
  background-color: ${mainMarkerColour};
  width: 2rem;
  height: 2rem;
  display: block;
  left: -1rem;
  top: -2rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`;

  const mainIcon = divIcon({
    iconAnchor: [0, 0],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${markerHtmlStyles}" />`,
  });
  return (
    <>
      <h2 className="my-12 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        NT Objektai
      </h2>
      <p className="mb-12 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        cupiditate? Perspiciatis voluptates possimus laudantium ducimus!
      </p>

      <div className="w-full h-[100vh] flex mb-16">
        <section className=" w-full md:w-1/2 grid md:grid-cols-2  p-5 gap-5 overflow-y-scroll">
          {propList.map((property, index) => (
            <div className=" bg-white rounded-lg  shadow-lg border border-gray-300 ">
              <img
                className="rounded-t-lg"
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

        <div className="w-1/2 px-10 hidden md:block z-0">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>

      {/* <div className="w-1/2 px-10 sm:hidden md:block z-0">
          <MapContainer
            center={[10, -20]}
            zoom={2}
            scrollWheelZoom={false}
            className="h-full rounded "
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {propList.map((property, index) => (
              <Marker
                key={property.id}
                ref={(el) => (mapPinsEl.current[index] = el)}
                position={[
                  property.location.position[0],
                  property.location.position[1],
                ]}
                icon={mainIcon}
                eventHandlers={{
                  mouseover: (event) => event.mainMarkerColourtarget.openPopup(),
                  mouseout: (event) => event.target.closePopup(),
                }}
              >
                <Popup>
                  <div className="flex flex-col">
                    <img
                      className="h-40 object-cover rounded-t "
                      src={property.photos[0]}
                      alt="pic of property"
                    />

                    <div className="mx-3">
                      <div className="font-bold text-sm my-2  text-main-black">
                        {property.main_parameters[2]?.value}
                      </div>
                      <div className="font-bold text-xs mb-2 text-main-black">
                        {property.title}
                      </div>
                      <div>
                        {property.parameters
                          .filter((el) => el.title === "Details")
                          .map((el) =>
                            el.fields.slice(0, 3).map((e) => (
                              <div className="infoBubble" key={e.title}>
                                <span className="text-main-gray">
                                  {e.title} :{" "}
                                </span>
                                {e.value}
                              </div>
                            ))
                          )}
                        <hr />
                      </div>

                      <div className="my-2 text-xs text-main-gray">
                        {property.main_parameters[0]?.value}
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div> */}
    </>
  );
};
