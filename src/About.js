import useMediaQuery from "@material-ui/core/useMediaQuery";
import bandana from "./images/bandana preview-2022.svg";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen
} from "./images/birthday-photos";

const random = Math.floor(Math.random() * 13);
const numbers = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen
];
export const About = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>

      <div
        style={{
          position: "relative",
          height: "400px",
          width: matches ? "600px" : "100%",
          overflow: "hidden",
          margin: matches ? "20px auto" : "auto",
          verticalAlign: "middle",
        }}
      >
        <img
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
          }}
          src={numbers[random]}
          alt="people enjoying a party"
        />
      </div>
      <div className="card" style={{ width: matches ? "600px" : "90%" }}>
        <h2>A Backyard Birthday and Campout</h2>
        <p>
          {" "}
          <br />
          <b>Date:</b> Saturday September 3rd
        </p>
        <p>
          Come chill in the backyard with friends, drinks, <br /> pizza and most of all, YOU.
          <br /> 
          <br /> 
          Badminton will be up, cornhole might be brought by friends(?), and the pool will be available for the bold and drunk. Bring your bikinis, trunks, and speedos.
        </p>
        <p>
          Want to campout? Bring your tent or really whatever outside sleeping situation you desire! 
          We have 2 fire pits, relaxing areas, and a big open yard area for you to find your personal space.<br /> <br />  Dog friendly(if Bezi has met them)
        </p>
        
      </div>
      <div
        className="card"
        style={{
          textAlign: "left",
          width: matches ? "600px" : "90%",
          margin: "20px auto",
        }}
      >
        
        <h3 style={{ textAlign: "center" }}>Agenda</h3>
        <div style={{ display: matches ? "flex" : "block", margin: "auto" }}>
          <p style={{ marginBottom: "20px" }}>
            <b>4pm:</b> <br />
            gather and chill
          </p>
          <p style={{ marginBottom: "20px" }}>
            <b>6pm:</b> <br />
            Pizza is ordered from 48 North
          </p>
          <p style={{ marginBottom: "20px" }}>
            <b>6:30pm</b> <br />
            open mic for everyone <br />and all things. <br /> <br />
            (Adam Michel must be pre approve content) <br /><br /> just kidding <br />probably
          </p>
          
        </div>
        
      </div>
      <div
        className="card"
        style={{ width: matches ? "600px" : "90%", textAlign: "left" }}
      >
        <h3 style={{ textAlign: "center" }}>what else to expect??</h3>
        <ul style={{ textAlign: "left" }}>
          <li>take a photo at our Kambam photo booth.</li>
          <li>BYOB.</li>
          <li>
            Screen print your own COWABUNGA bandana!
          </li>
        </ul>
        <div
          style={{
            width: "calc(100% - 20px)",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <img
            style={{ margin: "auto", width: matches ? "300px" : "90%" }}
            src={bandana}
            alt="bandana design"
          />
          <p>bandana example</p>
        </div>
      </div>
    </>
  );
};
