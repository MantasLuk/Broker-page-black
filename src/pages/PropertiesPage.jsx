import { PropertyList } from "../components/PropertyList";
import { NavBar } from "../components/NavBar";
import { Contacts } from "../components/Contacts";

export const PropertiesPage = () => {
  const PropCardInfo = [
    {
      propImg: "https://source.unsplash.com/random",
      location: "2234 Basic Rd, NY",
      price: "5,550,000",
      propName: "Loft",
      propDescription: "About property",
      area: "5645 m2",
    },
    {
      propImg: "https://source.unsplash.com/random",
      location: "238 Nice Rd, San Francisco",
      price: "550,000",
      propName: "Apartment",
      propDescription: "About property",
      area: "565 m2",
    },
    {
      propImg: "https://source.unsplash.com/random",
      location: "223 Good Rd, NY",
      price: "555,000",
      propName: "Loft",
      propDescription: "About property",
      area: "645 m2",
    },
    {
      propImg: "https://source.unsplash.com/random",
      location: "2238 Loft Rd, San Francisco",
      price: "160,000",
      propName: "Small Loft",
      propDescription: "About property",
      area: "55 m2",
    },
  ];

  return (
    <>
      <NavBar title={"Billy B. White "} />
      <PropertyList propList={PropCardInfo} />
      <Contacts agentName={"BillyBWhite"} />
    </>
  );
};
