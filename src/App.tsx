import React, { useEffect } from "react";
import Main from "./components/Main";
import TopHeader from "./components/TopHeader";
import styled from "styled-components";

const FixedHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
const App = () => {
  useEffect(() => {
    document.title = "Dianastagram";
  }, []);

  return (
    <div>
      <FixedHeaderWrapper>
        <TopHeader />
      </FixedHeaderWrapper>
      <Main />
    </div>
  );
};

export default App;
