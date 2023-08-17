import kambam from "./images/KAMBAM2023 LOGO.png";
import moon from "./images/moon and stars.png"
import blob1 from "./images/blob 1.png"
import blob2 from "./images/blob 2.png"
export const Home = () => {
  return (
    <>
      <div className="movement">
      <img src={blob1} alt="hey" className="blob1" />
      <img src={blob2} alt="hey" className="blob2" />
      <img src={moon} alt="hey" className="moon" />
      </div>
      <div className="intro">
      <p>You're invited to </p>
      <h1>KAMBAM2023</h1>
        <img src={kambam} alt="hey" className="kambam" />
        <h2>
          meet me in dreamland
        </h2>
        
      </div>
    </>
  );
};
