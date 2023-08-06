import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';
import { useFirebase } from './components/firebase/FirebaseContext';
import { format } from './utils';

export const Discussion = () => {
  const [question, setQuestion] = useState('');
  const [dbQuestions, setdbQuestions] = useState([]);
  const { getQuestions, postQuestion, listen } = useFirebase();

  const onSubmit = () => {
    postQuestion(question)
      .then(() => listen(format, setdbQuestions))
      .then(() => setQuestion(''))
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getQuestions()
      .then((data) => format(data))
      .then((q) => setdbQuestions(q));
  }, [getQuestions]);

  return (
    <>
      <h2 style={{ fontSize: '5vmin' }}>Ask Anonymous Questions</h2>
      <Grid container direction='column' justifyContent='center' spacing={2}>
        <Grid item>
          <TextField
            variant='outlined'
            style={{
              width: '80%',
              border: '2px solid #1c3664',
              borderRadius: '6px',
              backgroundColor: 'white',
            }}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Grid>

        <Grid item style={{ color: 'white' }}>
          <Button
            variant='contained'
            color='inherit'
            style={{ backgroundColor: '#1c3664' }}
            onClick={() => onSubmit()}
          >
            submit
          </Button>
        </Grid>
      </Grid>
      <Grid container direction='column' justifyContent='center' spacing={2}>
        <Grid item>
          {dbQuestions.map(({ question, answer, id }) => {
            return (
              <React.Fragment key={`${id} ${question}`}>
                <div
                  className='card'
                  style={{
                    width: '300px',
                    margin: '40px',
                    display: 'inline-block',
                  }}
                >
                  <Typography key={id} variant='subtitle1'>
                    <Typography style={{ display: 'inline', marginRight: '10px', fontSize: '1.17em' }}>
                      Q:
                    </Typography>
                    {question}
                  </Typography>

                  <Typography key={`${id} ${answer}`} variant='subtitle1'>
                    {answer && (
                      <>
                        <hr />
                        <Typography style={{ display: 'inline', marginRight: '10px',  fontSize: '1.17em' }}>
                          A:
                        </Typography>
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
