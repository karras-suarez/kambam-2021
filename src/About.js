import useMediaQuery from "@material-ui/core/useMediaQuery";
import kambam from "./images/kambam_hashtag.svg";
import bandana from "./images/bandana preview.svg";
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
      <img src={kambam} alt="kambam logo" className="kambam" />
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
        <h2>A Backyard Birthday</h2>
        <p>
          You're invited to Kami's 32nd birthday and backyard campout!
        </p>
        <p>
          This year there will <b>not</b> be games for safety reasons, but I
          think I have a nice solution to utilize the prize table this year.
        </p>
        <p>
          Also note, I am trying to gather food for all the dietary restrictions
          i am aware of: veg, lactose intolerant, and gluten free. But I am
          struggling and would some suggestions or contributions to the food
          table
        </p>
        <p>
          {" "}
          <br />
          <b>Location:</b> 7927 N Olympia st
          <br />
          <br />
          <b>Date:</b> Sunday September 5th
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
            <b>6:15pm</b> <br />
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
          <li>Play cornhole with friends.</li>
          <li>
            get your own 'Bird in Spaceship' onsite screen printed bandana!
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
