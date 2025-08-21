import useMediaQuery from "@mui/material/useMediaQuery";
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
import goldsnake1 from "./images/goldsnake1.jpeg";
import goldsnake2 from "./images/goldsnake2.jpeg";
import { RSVPForm } from "./components/rsvp/Form";
import { useEffect, useState } from "react";
import { useFirebase } from "./components/firebase/FirebaseContext";

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
  const { getRSVPStatus } = useFirebase();
  const [hasRSVP, setHasRSVP] = useState(() => localStorage.getItem("rsvp"));

  useEffect(() => {
    if (!hasRSVP) {
      return;
    }
    getRSVPStatus(hasRSVP).then((status) => {
      if (!status) {
        setHasRSVP(null);
      }
    });
  }, [hasRSVP]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          margin: "auto",
          verticalAlign: "middle",
          backgroundImage: `url(${goldsnake1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      ></div>
      <div className="card" style={{ width: matches ? "800px" : "90%" }}>
      <h2 className="about-headers" style={{ textAlign: "center", width: "100%", marginLeft: "0" }}>A Backyard Birthday Show</h2> 
        <img
          style={{
            // position: "absolute",
            left: "0",
            top: "0",
            // transform: "translate(-50%, -50%)",
            width: "100%",
          }}
          src={goldsnake2}
          alt="people enjoying a party"
        />
        
        <p>
          {" "}
          <br />
          <b>Location:</b> Kami's Backyard <br/> 10209 N Oswego Ave, Portland, OR 97203
        </p>
        <p>
          {" "}
          <br />
          <b>Date:</b> Saturday August 30th 2025
        </p>
        <p>
          {" "}
          <br />
          <b>Time:</b> 6:00pm PST
        </p>
        <p>
          {" "}
          <br />
          <b>Food:</b> <a
                  href="https://public.fotmwings.com/menus/fotm_interstate_menu.pdf"
                  target="_blank"
                >Fire on the Mountain catering
        </a>(vegan options available)
        </p>
        <p>
          {" "}
          <br />
          <b>Dress code:</b> Play dress up with me! Whatever that means to you. Bonus
          points for all things frilly, shimmery, snakey, or gold.
          It's really up to interpretation, but if you need to be pushed in a direction, you can use <a href="https://pin.it/1I3bKnrr0/" target="_blank">this board</a> as a guide.
        </p>
        <p>
          {" "}
          <br />
          <b>Entertainment:</b> <br/>
          <ul>
            <li>Kaitlyn Saul - comedy</li>
            <li>Hannah Carter - comedy</li>
            
          </ul>
          Other performances still being finalized ;)
        </p>
        <br />
        <p>
        <b>Details:</b> KAMBAM is BACK. With a theme centered around Kami's snake engagement
          ring, come to Kami's favorite place (her backyard) and have a great
          night of art, friendship, and entertainement.
          {/* <br />
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
          <br /> <br /> Dog friendly(if Bezi has met them) */}
          {/* <p>
          {" "}
          <br />
          <b>Music:</b> We are so excited to be joined by musical talent such as <a target='blank' href="https://www.instagram.com/jewelridersband/"><b>Jewel Riders</b></a> and <a target='blank' href="https://instagram.com/mr.boy_pdx"><b>Mr.Boy</b></a> this year!
        </p> */}
        </p>
      </div>
      <div
        className="card"
        style={{
          textAlign: "left",
          width: matches ? "800px" : "90%",
          margin: "20px auto",
        }}
      >
        <h2 className="about-headers" style={{ textAlign: "center" }}>
          Agenda
        </h2>
        <div style={{ display: matches ? "flex" : "block", margin: "auto" }}>
          <p style={{ marginBottom: "20px", marginLeft: "20px" }}>
            <b>6:00pm:</b> <br />
            doors open - sign the card, take a photo, do some screen printing
          </p>
          <p style={{ marginBottom: "20px", marginLeft: "20px" }}>
            <b>7:00pm:</b> <br />
            Group photo and Show begins - Kami will welcome everyone and then introduce the non musical acts. <br/>
            <b>?:??pm:</b> <br />
            When the non musical acts are done, we will take a short break and then start the music.
          </p>
     
        </div>
      </div>
      <div
        className="card"
        style={{ width: matches ? "800px" : "90%", textAlign: "left" }}
      >
        <h2 className="about-headers" style={{ textAlign: "center" }}>
          what else??
        </h2>
        <ul style={{ textAlign: "left" }}>
          <li style={{ marginBottom: "10px" }}>
            take a photo at our Kambam photo booth.
          </li>
          <li style={{ marginBottom: "10px" }}>BYOB.</li>
          <li style={{ marginBottom: "10px" }}>pre-rolls provided.</li>
          <li style={{ marginBottom: "10px" }}>On site screen printing</li>
        </ul>
      </div>

      <div
        className="card"
        style={{
          width: matches ? "800px" : "90%",
          textAlign: "left",
          margin: "20px auto",
        }}
      >
        <h2 className="about-headers" style={{ textAlign: "center" }}>
          RSVP for Benefits!
        </h2>

        {hasRSVP ? <RSVPConfirmation /> : <RSVPForm setHasRSVP={setHasRSVP} />}
      </div>
    </>
  );
};

const RSVPConfirmation = () => {
  return (
    <div>
      <p>Thank you for your RSVP! We look forward to celebrating with you.</p>
      <p>If you have any questions, feel free to reach out.</p>
    </div>
  );
};
