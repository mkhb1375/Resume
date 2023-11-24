import Body from "./ui/Body";
import Video from "./ui/Video";
import ProsContainer from "./ui/ProsContainer";
import ServicesContainer from "./ui/ServicesContainer";
import RemoteManagement from "./ui/RemoteManagement";
import CommentsSlider from "./ui/CommentsSlider";
import Customers from "./ui/Customers";
import Articles from "./ui/Articles";
import ContactUs from "./ui/ContactUs";
import Footer from "./ui/Footer";
import Cookies from "js-cookie";
import { useEffect } from "react";
import Purpose from "./ui/Purpose";

export default function Main() {
  const secret = Cookies.get("secret") ? Cookies.get("secret") : null;
  let enabled = true;
  useEffect(() => {
    if (secret && enabled) {
      console.log(secret);
      enabled = false;
    }
  }, []);

  return (
    <div>
      <Body />
      <Video />
      <ProsContainer />
      <Purpose />
      <ServicesContainer />
      <RemoteManagement />
      <CommentsSlider />
      <Customers />
      <Articles />
      <ContactUs />
      <Footer />
    </div>
  );
}
