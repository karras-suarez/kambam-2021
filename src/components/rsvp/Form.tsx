import React from "react";
import { Formik, Field } from "formik";
import emailjs from "@emailjs/browser";
// @ts-ignore
import goldsnake1 from "../../images/goldsnake1.png";
import { useFirebase } from "../firebase/FirebaseContext";
emailjs.init({
  // @ts-ignore
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
});

export const RSVPForm = ({ setHasRSVP }) => {
  const { postRSVP } = useFirebase();
  // @ts-ignore
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  // @ts-ignore
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={async (values, action) => {
        const { name, email, message } = values;
        try {
          const response = await postRSVP({ name, email, answer: message });

          setHasRSVP(response.key);

          // @ts-expect-error env exists
          if (import.meta.env.MODE === "development") {
            return;
          }

          const res = await emailjs.send(serviceId, templateId, {
            name,
            email,
            answer: message,
          });
          localStorage.setItem("rsvp", response.key ?? "");
        } catch (error) {
          console.error("Error submitting RSVP:", error);
          alert(
            "There was an error submitting your RSVP. Please try again later."
          );
        } finally {
          action.setSubmitting(false);
          action.resetForm();
        }
      }}
    >
      {({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            margin: "20px auto",
            gap: "10px",
          }}
        >
          <div>
            <div>
              <b>Name:</b>
            </div>
            <label>
              <Field
                name="name"
                type="text"
                required
                placeholder="Buttlick Buttlicker"
              />
            </label>
          </div>
          <div>
            <b>email:</b>
          </div>
          <div>
            <label>
              <Field
                name="email"
                type="email"
                required
                placeholder="Buttlick@Buttlicker.com"
              />
            </label>
          </div>
          <br />
          <div>
            <b>Please use the next area to let us know:</b>{" "}
            <ul className="questions">
         
              <li>
                If you would like to sign up for stage time. Comedy? Poetry?
                Music? powerpoint?
              </li>
              <li>Are you bringing anybody?</li>
              <li>Anything else you would like to add!</li>
            </ul>
          </div>

          <div>
            <label>
              <Field
                as="textarea"
                name="message"
                style={{ height: "50px", width: "100%" }}
                required
                placeholder="I don't know anything, but I'm coming!"
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};
