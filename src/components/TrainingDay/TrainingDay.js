import React, { Fragment, useState } from "react";
import Exercise from "./Exercise";
import axios from "axios";
import {connect} from "react-redux";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap",
  },
}));

function TrainingDay() {
  const [exercisesNumber, setNumber] = React.useState([]);

  const addExercise = () => {
    setNumber([...exercisesNumber, {}]);
      console.log(exercisesNumber)
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
              Удалить движение{" "}
            </Button>
          </Fragment>
        );
      })}

      <hr />
      <Button variant="contained" onClick={addExercise}>
        Добавить движение
      </Button>
    </Fragment>
  );
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default TrainingDay;
