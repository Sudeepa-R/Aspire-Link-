import { useEffect, useState } from "react";
import TemplateHeader from "./template-header";
import TemplateHome from "./template-home";

const DashboardLandingPage = () => {
  const [bgColor, setBgColor] = useState("transparent");

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
      <div style={{ position: "fixed", top: 0, zIndex: 999, width: "100%" }}>
        <TemplateHeader BgColor={bgColor} />
      </div>
      <TemplateHome />
    </>
  );
};

export default DashboardLandingPage;
