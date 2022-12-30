import React, { useState } from "react";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import "../Typist.css";
import { useSpring, animated, config } from "react-spring";
import Res from "../Res2.pdf";

import down from "../img/Arrow-down.svg";

export default function Title() {
  const [flip, set] = useState(false);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
    delay: 200,
    config: config.molasses,
    loop: true,
    reverse: flip,
    onRest: () => set(!flip),
  });

  return (
    <React.Fragment>
      <Typist>
        <span
          style={{
            fontSize: "7vw",
            fontWeight: "700",
            position: "absolute",
            top: "50vh",
            left: "5%",
            color: "#333333",
          }}
        >
          Hi, there!
          <Typist.Delay ms={500} /> I'm Lucas Wu.
        </span>
        <span
          style={{
            fontSize: "1vw",
            fontWeight: "100",
            position: "absolute",
            top: "75vh",
            left: "5%",
            color: "#333333",
            margin: "0",
          }}
        >
          <Typist.Delay ms={500} />
          <h1>
            Check out my projects <Link to="/Projects">here</Link>.
          </h1>
          <h1>
            View my resume{" "}
            <a href={Res} without rel="noopener noreferrer" target="_blank">
              here
            </a>
            .
          </h1>
        </span>
      </Typist>
      <animated.div style={props}>
        <img
          className="center"
          style={{
            position: "absolute",
            top: "88vh",
            width: "10vw",
            left: "45vw",
          }}
          src={down}
          alt="down"
        />
      </animated.div>
    </React.Fragment>
  );
}
