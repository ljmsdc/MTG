import { useState, useEffect } from "react";
import Splash from "./views/Splash";
import Deck from "./views/Deck";

function App() {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setScreen(1);
    }, 3000);
  }, []);

  return (
    <>
      {screen == 0 && <Splash />}
      {screen == 1 && <Deck />}
    </>
  );
}

export default App;
