import kambam from "./images/kambam2025 Large.png"
import Sparkles from "./components/Sparkles"


export const Home = () => {
  return (
    <>
      <Sparkles count={25} color="#FFF" />
      <div className="movement">
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '25vh', // 1/4 of the viewport height
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 25%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0) 100%)',
          pointerEvents: 'none',
          zIndex: -10
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30vh', // 1/4 of the viewport height
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 25%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0) 100%)',
          pointerEvents: 'none',
          zIndex: -10
        }}
      />
        <img src={kambam} alt="hey" className="kambam" />
        <h2 style={{color: "#FFF",zIndex: 100, position: "relative", fontFamily: 'fira code'}}>
          The year of the engagement
        </h2>
      </div>
      <div className="intro">

      <h1>KAMBAM2025</h1>
        <h3 className="date">
          Saturday august 30th
        </h3>
        <a style={{ margin: "auto",color: "#000", position:"relative", zIndex:500, fontWeight: "bold", backgroundColor: "rgb(242 212 222)", padding: "10px 20px", borderRadius: "5px", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 1)", }} href="/about">DETAILS</a>
        
      </div>
    </>
  );
};
