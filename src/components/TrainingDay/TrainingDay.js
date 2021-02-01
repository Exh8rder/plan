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

function TrainingDay(props) {
  const [exercisesNumber, setNumber] = React.useState([]);
    // console.log(props.dayNumber)
  // const addExercise = () => {
  //   setNumber([...exercisesNumber, {}]);
  //     console.log(exercisesNumber)
  //     props.addExercise();
  // };

  // const deleteExercise = (index) => {
  //   setNumber(
  //     [...exercisesNumber].filter((elem, i) => {
  //       return i !== index;
  //     })
  //   );
  // };

  const classes = useStyles();

  return (
    <Fragment>

      {props.day[props.dayNumber].map((exercise, i) => {
        return (
          <Fragment key={`exercise_${i}`}>
            <Exercise number={i + 1} />
            <Button
              variant="contained"
              color="secondary"
              // onClick={() => deleteExercise(i)}
            >
              {" "}
              Удалить{" "}
            </Button>
          </Fragment>
        );
      })}

      <hr />
      <Button variant="contained" onClick={() => props.addExercise(props.dayNumber)}>
        Добавить движение
      </Button>
    </Fragment>
  );
}


function mapStateToProps(state) {
    return {
        day: state.day
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addExercise: number => dispatch({type: 'ADD_EXERCISE' , payload: number}),
        subExercise: number => dispatch({type: 'SUB_EXERCISE', payload: number})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingDay);


