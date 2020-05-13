import React, { useEffect } from "react";
import Main from "./components/Main";
import TopHeader from "./components/TopHeader";

const App = () => {
  useEffect(() => {
    document.title = "Dianastagram";
  }, []);

  return (
    <div>
      <TopHeader />
      <Main />
    </div>
  );
};

export default App;
