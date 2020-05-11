import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import TopHeader from "./components/TopHeader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // ComponentDidMount
  useEffect(() => {
    document.title = "Dianastagram";
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      <TopHeader />
      <Main />
    </div>
  );
};

export default App;
