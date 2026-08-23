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
import kami from "./images/kami-yellow-mirror.JPG" 
import kami2 from "./images/kami-tiger.JPG" 
import kami3 from "./images/kami-nathan.jpg" 
import kami4 from "./images/kami-dags.jpg" 
import kami5 from "./images/kami-cat.jpeg" 
import kami6 from "./images/kami-video-bucket.jpeg" 
import kami7 from "./images/kami-looney.JPG" 
import kami8 from "./images/techie.JPG" 
import kami9 from "./images/kami-bucket-floral.JPG" 

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
export const Home = () => {
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      ></div>
      <div className="card" style={{ width: matches ? "1000px" : "90%" }}>
        <h1>KAMBAM 2026</h1>
        <h3>Join the Club</h3>
      {/* <h2 className="about-headers" style={{ textAlign: "center", width: "100%", marginLeft: "0", color:"#E8578A" }}>A Backyard Birthday Party</h2>  */}
        <img
          style={{
            // position: "absolute",
            left: "0",
            top: "0",
            // transform: "translate(-50%, -50%)",
            width: "100%",
          }}
          src={kami}
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
          <b>Date:</b> Saturday August 29th 2026
        </p>
        <p>
          {" "}
          <br />
          <b>Time:</b> 3:00pm PST
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
          <b>Fashion Inspo:</b>This year we are celebrating Techie Club launching Spatial Design Club and encouraging the Techie Club aesthetic! <span style={{backgroundColor: "#E0D4F5"}}>Aristic, Technical, Playful.</span> <a href="https://pin.it/1zsByg4BL" target="_blank">this board</a> as a guide.
        </p>
        <div style={{ display: matches ? "grid" : "block", margin: "auto", gridTemplateColumns: "1fr 1fr 1fr", width: "100%" }}>
          <img
          style={{
            // position: "absolute",
            left: "0",
            top: "0",
            // transform: "translate(-50%, -50%)",
            width: "100%",
          }}
          src={kami8}
          alt="people enjoying a party"
        />
          <img
          style={{
            // position: "absolute",
            left: "0",
            top: "0",
            // transform: "translate(-50%, -50%)",
            width: "100%",
          }}
          src={kami7}
          alt="people enjoying a party"
        />
          <img
          style={{
            // position: "absolute",
            left: "0",
            top: "0",
            // transform: "translate(-50%, -50%)",
            width: "100%",
          }}
          src={kami9}
          alt="people enjoying a party"
        />
        </div>
        <p>
          {" "}
          <br />
          <b>Entertainment:</b> <br/>
          None this year. We are doing backyard karaoke instead!! <br />
          But anyone who wants to use the mic to open mic things is more than welcome.
        </p>
        <br />
        <p>
        <b>Details:</b> Let's have a super chill Kambam and do some karaoke in the backyard. Anyone able to help us set this up??
        We are also gonna spend a tiny bit of time playing with Spatial Design Club and creating content Kami can use for the website, social media, and when she applies for grants.

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
        <img
          style={{
            // position: "absolute",
            left: "0",
            top: "0",
            // transform: "translate(-50%, -50%)",
            width: "900px",
          }}
          src={kami6}
          alt="people enjoying a party"
        />
      </div>
      <div
        className="card"
        style={{
          textAlign: "left",
          width: matches ? "1000px" : "90%",
          margin: "20px auto",
          backgroundColor: "#FDE8F0"
        }}
      >
        <h2 className="about-headers" style={{ textAlign: "center" }}>
          Agenda
        </h2>
        <div style={{ display: matches ? "grid" : "block", margin: "auto", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <p style={{ marginBottom: "20px", marginLeft: "20px" }}>
            <b>3:00pm:</b> doors open  <br /><br />
            sign the card, take a photo, do some screen printing
          </p>
          <p style={{ marginBottom: "20px", marginLeft: "20px" }}>
            <b>4:00pm:</b> Group photo & Spatial Design Club content time<br /><br />
            Bringing your computer is not required, but it is helpful.<br /><br />
           </p><p style={{ marginBottom: "20px", marginLeft: "20px" }}>
            <b>Later:</b> Karaoke!!!
          </p>
     
        </div>
        <img
          style={{
            // position: "absolute",
            left: "0",
            top: "0",
            // transform: "translate(-50%, -50%)",
            width: "900px",
          }}
          src={kami5}
          alt="people enjoying a party"
        />
      </div>
      <div
        className="card"
        style={{ width: matches ? "1000px" : "90%", textAlign: "left", backgroundColor: "#E0D4F5" }}
      >
         <div style={{width: "40%", display: "inline-block", marginLeft: "80px"}}>
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
          <li style={{ marginBottom: "10px" }}>Bring your tent if you want to spend the night</li>
        </ul>
        </div>
        <img
          style={{
            // position: "absolute",
            left: "0",
            top: "0",
            // transform: "translate(-50%, -50%)",
            width: "40%",
            verticalAlign: "top",
          }}
          src={kami4}
          alt="people enjoying a party"
        />
      </div>

      <div
        className="card"
        style={{
          width: matches ? "1000px" : "90%",
          textAlign: "left",
          margin: "20px auto",
          verticalAlign: "top"
        }}
      >
         <img
          style={{
            // position: "absolute",
            left: "0",
            top: "0",
            // transform: "translate(-50%, -50%)",
            width: "40%",
            verticalAlign: "top",
          }}
          src={kami3}
          alt="people enjoying a party"
        />
        <div style={{width: "40%", display: "inline-block", marginLeft: "80px"}}>
        <h2 className="about-headers" style={{ textAlign: "center", display: "inline-block" }}>
          RSVP for Benefits!
        </h2>

        {hasRSVP ? <RSVPConfirmation /> : <RSVPForm setHasRSVP={setHasRSVP} />}
          
        </div>
      </div>
       <img
          style={{
            // position: "absolute",
            left: "0",
            top: "0",
            // transform: "translate(-50%, -50%)",
            width: "1000px",
          }}
          src={kami2}
          alt="people enjoying a party"
        />
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
