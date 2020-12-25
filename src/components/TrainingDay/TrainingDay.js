import React, { Fragment, useState } from "react";
import Exercise from "./Exercise";
import axios from "axios";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function TrainingDay() {
  const [exercisesNumber, setNumber] = React.useState([]);

  const addExercise = () => {
    setNumber([...exercisesNumber, {}]);
  };

  const deleteExercise = (index) => {
    setNumber(
      [...exercisesNumber].filter((elem, i) => {
        return i !== index;
      })
    );
  };

  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3" align="center">
            1 тренировочный день
          </Typography>

          {exercisesNumber.map((exercise, i) => {
            return (
              <Fragment key={`exercise_${i}`}>
                <Exercise number={i + 1} />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteExercise(i)}
                >
                  {" "}
                  Удалить{" "}
                </Button>
              </Fragment>
            );
          })}

          <hr />
          <Button variant="contained" onClick={addExercise}>
            Добавить движение
          </Button>
        </Paper>
      </Grid>
    </Fragment>
  );
}

export default TrainingDay;
