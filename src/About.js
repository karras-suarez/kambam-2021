import useMediaQuery from '@mui/material/useMediaQuery';
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
  fourteen,
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
  fourteen,
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
        <h3>A Backyard Birthday and Campout</h3>
        <p>
          {" "}
          <br />
          <b>Date:</b> Sunday September 3rd (day before labor day is observed)
        </p>
        <p>
          Come dream in the backyard with friends, drinks, <br /> food and most
          of all, YOU.
          <br />
          <br />
          No presents necessary, just bring the gift that is yourself! There will be opportunity to tip the performers :)
          <br />
          <br />
          We will have live music, standup comedy, open mic, screen printing, cornhole and more! The pool will only be out if the weather is expected to be at least 80 that day. There is never enough food, so this year we are going to have a lot. Bring more if you like!
        </p>
        <p>
          Want to campout? Bring your tent or really whatever outside sleeping
          situation you desire! We have 2 fire pits, relaxing areas, and a big
          open yard area for you to find your personal space.
          <br /> <br /> Dog friendly(if Bezi has met them)
          <p>
          {" "}
          <br />
          <b>Ponk?</b> I am trying to set up a dark area so we can play with my latest project Ponk. More details on what this means at the party.
        </p>
        <p>
          {" "}
          <br />
          <b>show art?</b> If you have art you would like to show in the Ponk area, I'd love to display it for the day!
        </p>
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
          <p style={{ marginBottom: "20px", marginLeft: "20px" }}>
            <b>5pm:</b> <br />
            gather and chill
          </p>
          <p style={{ marginBottom: "20px", marginLeft: "20px" }}>
            <b>6pm:</b> <br />
            Shows begin
          </p>
          {/* <p style={{ marginBottom: "20px" }}>
            <b>6:30pm</b> <br />
            open mic for everyone <br />
            and all things. <br /> <br />
            (Adam Michel must be pre approve content) <br />
            <br /> just kidding <br />
            probably
          </p> */}
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
          <li>pre-rolls provided.</li>
          <li>Screen print your own dreamland items</li>
        </ul>
        <div
          style={{
            width: "calc(100% - 20px)",
            textAlign: "center",
            padding: "20px",
          }}
        >
          {/* <img
            style={{ margin: "auto", width: matches ? "300px" : "90%" }}
            src={bandana}
            alt="bandana design"
          /> */}
          <p>print example coming soon</p>
        </div>
      </div>
    </>
  );
};
