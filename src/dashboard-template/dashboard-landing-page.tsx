import { useEffect, useState } from "react";
import TemplateHeader from "./template-header";
import TemplateHome from "./template-home";

const DashboardLandingPage = () => {
  const [bgColor, setBgColor] = useState("#fff");

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      if (scrollHeight > 20) {
        setBgColor("#fff");
      } else {
        setBgColor("transparent");
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Runs only once on mount

  return (
    <>
      <TemplateHeader BgColor={bgColor} />
      <TemplateHome />
    </>
  );
};

export default DashboardLandingPage;
