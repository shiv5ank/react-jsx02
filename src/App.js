import logo from "./logo/airbnb.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          The Evolution of
          <br />
          Airbnb's Frontend
        </h1>
        <p>@spikebrehm</p>
        <div className="logo-container">
          <img src={logo} alt="" height={64}></img>
          <h4>airbnb</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
