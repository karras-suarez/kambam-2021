import React from "react";
import { Formik, Field } from "formik";
import emailjs from "@emailjs/browser";
// @ts-ignore
import goldsnake1 from "../../images/goldsnake1.png";
import { useFirebase } from "../firebase/FirebaseContext";
emailjs.init({
  publicKey: "dtqcYsRfEEsn5bTLU",
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
          localStorage.setItem("rsvp", response.key ?? "");
          // @ts-expect-error env exists
          if (import.meta.env.MODE === "development") {
            return;
          }

          const res = await emailjs.send(serviceId, templateId, {
            name,
            email,
            answer: message,
          });

          console.log("Email sent successfully:", res);
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
            <div>Who are you!</div>
            <label>
              <Field
                name="name"
                type="text"
                required
                placeholder="Ian McButtlick"
              />
            </label>
          </div>

          <div>
            Provide your email to receive any updates we might need to send
          </div>
          <div>
            <label>
              <Field
                name="email"
                type="email"
                required
                placeholder="Ian@McButtlick.com"
              />
            </label>
          </div>

          <div>Do you have a favorite item from fire on the mountain?</div>
          <div>
            <label>
              <Field
                as="textarea"
                name="message"
                style={{ height: "50px", width: "100%" }}
                required
                placeholder="I'll eat anything, but I love the fire on the mountain wings!"
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};
