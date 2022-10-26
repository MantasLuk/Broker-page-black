import { Contacts } from "../components/Contacts";
import { FooterNav } from "../components/FooterNav";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";
import { Properties } from "../components/Properties";
import { Feedback } from "../components/Feedback";

export const IndexPage = () => {
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
      <NavBar title={"Nekilnojamojo turto brokeris"} />
      <Hero agentName={"Billy B. White"}/>
      <Footer agentName={"BillyBWhite"}/>
      <Properties propList={PropCardInfo}/>
      <Contacts agentName={"BillyBWhite"}/>
      <Feedback/>
      <FooterNav agentName={"Billy B. White"}/>
   
    </>
  );
};
