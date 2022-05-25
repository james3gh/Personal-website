import React from "react";
import "./Header.css";
import TypeWriterEffect from "react-typewriter-effect";

const Header = () => {
  return (
    <div id="header-img">
      <div>
        <TypeWriterEffect
          textStyle={{
            display: "inline",
            color: "blueviolet",
          }}
          hideCursorAfterText={true}
          multiText={[" I am JAMES THOMAS", " I am a Web Developer"]}
          multiTextDelay={1000}
          typeSpeed={80}
        />
        {/* <Typewriter
                  words={["JAMES THOMAS", "a Web Developer"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /> */}

        <h3>This is my Portfolio Website</h3>
      </div>
    </div>
  );
};

export default Header;
