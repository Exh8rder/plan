import React, { Fragment } from "react";
import Exercise from "./Exercise";
import {connect, useDispatch, useSelector} from "react-redux";

import Button from "@material-ui/core/Button";
import {ADD_EXERCISE, SUB_EXERCISE} from "../../redux/actionTypes";
import {addExerciseAction, subExerciseAction} from "../../redux/actions";

function TrainingDay(props) {

    const dispatch = useDispatch();
    const week = useSelector(state => state.week);

  return (
    <Fragment>

      {week[props.dayNumber].map((exercise, i) => {
        return (
          <Fragment key={`exercise_${i}`}>
            <Exercise exerciseNumber={i} dayNumber={props.dayNumber} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch(subExercise(i, props.dayNumber))}
            >
              Удалить
            </Button>
          </Fragment>
        );
      })}

      <hr />
      <Button variant="contained" onClick={() => dispatch(addExercise(props.dayNumber))}>
        Добавить движение
      </Button>
    </Fragment>
  );
}


const addExercise = (number) => (addExerciseAction(number))
const subExercise = (number, dayNumber) => (subExerciseAction(number, dayNumber))

export default TrainingDay;


