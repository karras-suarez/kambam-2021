import kambam from "./images/kambam2022_title.svg";
import {
  CloudsBackground,
  CloudsBackgroundMob,
} from "./components/CloudsBackground";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <div className="movement">
        <div className="clouds-container">
          {matches ? <CloudsBackground /> : <CloudsBackgroundMob />}
        </div>
        <div className="clouds-container2">
          {matches ? <CloudsBackground /> : <CloudsBackgroundMob />}
        </div>
      </div>
      <div className="intro">
      <p>You're invited to </p>
        <img src={kambam} alt="hey" className="kambam" />
        <h1>
          ENTER THE COWABUNGAVERSE
        </h1>
        
      </div>
    </>
  );
};
