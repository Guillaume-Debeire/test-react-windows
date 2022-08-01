import React, { useEffect, useRef, useState } from "react";

import quotes from "src/data/quotes";
import Header from "src/components/Header";
import Body from "src/components/Body";
import styled from "styled-components";

const DivContainer = styled.div`
  height: 300vh;
  width: 100%;
`;
const Div = styled.div`
  width: 300px;
  height: 100px;
  box-shadow: auto;
  background-color: coral;
  margin: 30rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
function moveShadowBis(elem, scroll) {
  console.log(scroll);
  elem.style.boxShadow = `0px ${-20 + scroll / 15}px ${
    30 - scroll / 10
  }px 4px rgba(0, 0, 0)`;
}

function moveShadow(elem, scroll) {
  console.log(scroll);
  elem.style.boxShadow = `0px ${scroll / 15 - 20}px ${
    -30 + scroll / 10
  }px 4px rgba(0, 0, 0)`;
}

const App = () => {
  const divRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const handleScroll = () => {
    const position = window.scrollY;
    // setScrollPosition(position);
    if (position < 300) {
      moveShadowBis(divRef.current, position);
    } else {
      moveShadow(divRef.current, position);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition);

  return (
    <div className="app">
      {/* <Header /> */}
      <DivContainer>
        {/* <Body quotes={quotes} /> */}
        <Div ref={divRef}>Coucou les p'tits potes</Div>
      </DivContainer>
    </div>
  );
};

export default App;
