import React, { useEffect, useState } from "react";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import { useFirebase } from "./components/firebase/FirebaseContext";
import { format } from "./utils";

export const Discussion = () => {
  const [question, setQuestion] = useState("");
  const [dbQuestions, setdbQuestions] = useState([]);
  const firebase = useFirebase();

  const onSubmit = () => {
    const payload = {
      question,
      answer: "",
    };
    firebase.questions().push(payload);
    setQuestion("");
  };

  useEffect(() => {
    firebase.getQuestions().on("value", (snapshot) => {
      const data = snapshot.val();
      const formatedData = format(data);
      setdbQuestions(formatedData);
    });

    return () => {
      firebase.getQuestions().off();
    };
  }, [firebase]);

  return (
    <>
      <h2 style={{ fontSize: "5vmin" }}>Ask Anonymous Questions</h2>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item>
          <TextField
            variant="outlined"
            style={{
              width: "80%",
              border: "2px solid #1c3664",
              borderRadius: "6px",
              backgroundColor: "white",
            }}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Grid>

        <Grid item style={{ color: "white" }}>
          <Button
            variant="contained"
            color="inherit"
            style={{ backgroundColor: "#1c3664" }}
            onClick={() => onSubmit()}
          >
            submit
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item>
          {dbQuestions.map(({ question, answer, id }) => {
            return (
              <React.Fragment key={`${id} ${question}`}>
                <div
                  className="card"
                  style={{
                    width: "300px",
                    margin: "40px",
                    display: "inline-block",
                  }}
                >
                  <Typography key={id} variant="subtitle1">
                    <h3 style={{ display: "inline", marginRight: "10px" }}>
                      Q:
                    </h3>
                    {question}
                  </Typography>

                  <Typography key={`${id} ${answer}`} variant="subtitle1">
                    {answer && (
                      <>
                        <hr />
                        <h3 style={{ display: "inline", marginRight: "10px" }}>
                          A:
                        </h3>
                        {answer}
                      </>
                    )}
                  </Typography>
                </div>
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};