import React, { useEffect, useState } from "react";
import "./App.css";
import Icon from "components/Icon";
const heart0 = require("./images/heart.svg");
const heart1 = require("./images/heart-2.svg");
const heart3 = require("./images/heart-3.svg");
const heart2 = require("./images/heart-4.svg");

const Block = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        height: "100px",
        justifyContent: "center",
        width: "100px",
      }}
    >
      {children}
    </div>
  );
};

const images = [
  heart0.default,
  heart2.default,
  heart1.default,
  heart3.default,
  heart1.default,
  heart2.default,
  heart0.default,
  heart3.default,
  // heart1.default,
  // heart0.default,
];

function App() {
  const [posPercent, setPosPercent] = useState(1);

  const getBlocks = (num: number): JSX.Element[] => {
    const blocks: JSX.Element[] = [];
    let altRot = false;
    const rotPos = posPercent;
    const rotNeg = posPercent * -1;
    // console.log("rotate", rotPos);
    for (let i = 0; i < num; i++) {
      blocks.push(
        <Block>
          <Icon
            rotate={altRot ? rotNeg : rotPos}
            image={images[i % images.length]}
          />
        </Block>
      );
      altRot = !altRot;
    }
    return blocks;
  };

  useEffect(() => {
    const scrollFunction = (e: Event) => {
      const nextRot =
        Math.floor((window.scrollY / window.outerHeight) * 100) + 1;
      setPosPercent(nextRot);
    };
    window.addEventListener("scroll", scrollFunction);
    setPosPercent(0);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <div
      className="App"
      style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "24px 16px 16px",
      }}
    >
      <span className="title">For My Valentine</span>
      <br></br>
      <span className="title">Irene!</span>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingBottom: "16px",
          paddingTop: "24px",
        }}
      >
        {getBlocks(126)}
      </div>
      <span>
        I love you! ❤️
      </span>
    </div>
  );
}

export default App;
