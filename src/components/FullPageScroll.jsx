import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import NavBar from "./Navbar";
import Title from "./Title";

const FullPageScroll = () => {
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={{ SectionStyle, backgroundColor: "black" }}>
          <NavBar />
          <br></br>
          <Title />
        </FullpageSection>

        <FullpageSection style={{ ...SectionStyle, backgroundColor: "white" }}>
          <h1>About Me</h1>
        </FullpageSection>

        <FullpageSection style={{ ...SectionStyle, backgroundColor: "black" }}>
          <h1 style={{ color: "#FFFFFF" }}>Resume</h1>
        </FullpageSection>

        <FullpageSection style={{ ...SectionStyle, backgroundColor: "white" }}>
          <h1 style={{ color: "#000000" }}>Projects</h1>
        </FullpageSection>

        <FullpageSection style={{ ...SectionStyle, backgroundColor: "black" }}>
          <h1 style={{ color: "#FFFFFF" }}>Blog</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
