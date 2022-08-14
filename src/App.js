import { useState, useEffect } from "react";
import Popup from "./components/Popup";
import './App.css'

function App() {

  const [buttonPopup, setButtonPopup] = useState(false)
  const [timedPopup, setTimedPopup] = useState(false)

  useEffect(() => {
      setTimeout(() => {
        setTimedPopup(true)
      }, 3000);
  }, [])
  

  return (
    <div className="App">
      <main>
        <h1>Simple React Popup</h1>
        <br/>
        <button onClick={() => setButtonPopup(!buttonPopup)}>Show Popup</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h2>Dela Ricch</h2>
          <h5>LinkedIn: Emmanuel Kpendo</h5>
          <h5>Twitter: @DelaRicch</h5>
          <h5>Instagram: @delaricch</h5>
          <h5>GitHub: @DelaRicch</h5>
        </Popup>

        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h2>Dela Ricch</h2>
          <h5>LinkedIn: Emmanuel Kpendo</h5>
          <h5>Twitter: @DelaRicch</h5>
          <h5>Instagram: @delaricch</h5>
          <h5>GitHub: @DelaRicch</h5>
        </Popup>
      </main>
    </div>
  );
}

export default App;
