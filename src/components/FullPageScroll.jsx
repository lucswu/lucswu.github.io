import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import NavBar from "./navbar";
import Typist from "react-typist";
import "../Typist.css";
import sec2 from "../img/sec2.jpg";
import { containerClasses } from "@mui/material";

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
        <FullpageSection style={{ SectionStyle }}>
          <NavBar />
          <br></br>
          <Typist>
            <h1>Hi! I'm Lucas Wu!</h1>
          </Typist>
        </FullpageSection>

        <FullpageSection
          style={{ ...SectionStyle, backgroundImage: `url(${sec2})` }}
        >
          <h1>Section 2</h1>
        </FullpageSection>

        <FullpageSection style={{ SectionStyle }}>
          <h1>Section 2</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
