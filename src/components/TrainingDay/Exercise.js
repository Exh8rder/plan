import React, { Fragment, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import clsx from "clsx";
import Input from "@material-ui/core/Input/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core";
import {connect, useDispatch, useSelector} from "react-redux";
import {HANDLE_EXERCISE_FIELD_CHANGE} from "../../redux/actionTypes";
import {handleExerciseChangeAction} from "../../redux/actions";

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

  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: "10ch",
  },
}));

const exercises = [
  { id: "squat", name: "Присед на спине", type: "pull" },
  { id: "benchPress", name: "Жим лёжа", type: "push" },
  { id: "deadLift", name: "Становая", type: "pull" },
];

const exercisesFeature = [
  { id: "light", name: "Лёгкое" },
  { id: "middle", name: "Среднее" },
  { id: "hard", name: "Тяжёлое" },
];

function Exercise(props) {
    const classes = useStyles();

    const dispatch = useDispatch();
    const week = useSelector(state => state.week);

    const handleInputChange = (event, prop) => {
        const { value } = event.target;
        dispatch(handleExerciseChange(prop, value, props.exerciseNumber, props.dayNumber));

    }

    const currentExerciseState = week[props.dayNumber][props.exerciseNumber];

    return (
        <Fragment>
          <div>
            <hr />
            <FormControl className={classes.formControl}>
              <Select
                labelId="exercise-select-helper"
                id="exercise-select"
                value={currentExerciseState.exercise}
                onChange={(event)=>handleInputChange(event, "exercise" )}
              >
                {exercises.map((exercise, i) => {
                  return (
                    <MenuItem value={exercise.id} key={exercise.id + i}>
                      {exercise.name}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>Упражнение {props.exerciseNumber+1}</FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl
              className={clsx(
                classes.margin,
                classes.withoutLabel,
                classes.textField
              )}
            >
              <Input
                id="exercise-weight"
                value={currentExerciseState.max}
                onChange={(event)=>handleInputChange(event, "max" )}
                endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                aria-describedby="exercise-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
              <FormHelperText id="exercise-weight-helper-text">
                Повторный максимум
              </FormHelperText>
            </FormControl>
            <FormControl
              className={clsx(
                classes.margin,
                classes.withoutLabel,
                classes.textField
              )}
            >
              <Input
                id="exercise-reps"
                value={currentExerciseState.reps}
                onChange={(event)=>handleInputChange(event, "reps" )}
                startAdornment={<InputAdornment position="start">×</InputAdornment>}
                aria-describedby="exercise-reps-helper-text"
                inputProps={{
                  "aria-label": "reps",
                }}
              />
              <FormHelperText id="exercise-reps-helper-text">
                Кол-во повторений
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              {/*<InputLabel id="exercise-feature-helper-label">Тяжёлое</InputLabel>*/}
              <Select
                labelId="exercise-feature-helper-label"
                id="exercise-feature"
                value={currentExerciseState.feature}
                onChange={(event)=>handleInputChange(event, "feature" )}
              >
                {exercisesFeature.map((feature, i) => {
                  return (
                    <MenuItem value={feature.id} key={feature.id + i}>
                      {feature.name}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>Характер упражнения</FormHelperText>
            </FormControl>
          </div>
          <div>

              <FormControl
                  className={clsx(
                      classes.margin,
                      classes.withoutLabel,
                      classes.textField
                  )}
              >
                  <Input
                      id="exercise-adjustment"
                      value={currentExerciseState.adjustment}
                      onChange={(event)=>handleInputChange(event, "adjustment" )}
                      endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                      aria-describedby="exercise-adjustment-helper-text"
                      inputProps={{
                          "aria-label": "adjustment",
                      }}
                  />
                  <FormHelperText id="exercise-adjustment-helper-text">
                      Процент корректировки (0.1 - 1.0)
                  </FormHelperText>
              </FormControl>
          </div>
        </Fragment>
    );
}


const handleExerciseChange = (prop, number, exerciseNumber, dayNumber) => (handleExerciseChangeAction(prop, number, exerciseNumber, dayNumber))


export default Exercise;


