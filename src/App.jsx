import Picture1 from "./images/picture1.png";
import Picture2 from "./images/picture2.png";
import Picture3 from "./images/picture3.png";
import Picture4 from "./images/picture4.png";
function App() {
  return (
    <div className="section">
      <h1 className="title">Simple Image Slider</h1>
      <div className="container">
        <div className="image-container">
          <img src={Picture1} alt="" />
          <img src={Picture2} alt="" />
          <img src={Picture3} alt="" />
          <img src={Picture4} alt="" />
        </div>
        <div className="dot-container">
          <button onClick="dot(1)"></button>
          <button onClick="dot(2)"></button>
          <button onClick="dot(3)"></button>
          <button onClick="dot(4)"></button>
        </div>
        <button id="back" onClick="back()">
          back
        </button>
        <button id="next" onClick="next()">
          next
        </button>
      </div>
    </div>
  );
}

export default App;
