import React, {Fragment, useState} from "react";
import axios from "axios"

import Typography from "@material-ui/core/Typography";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import {withMobileDialog} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
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
        width: '10ch',
    },

}));


function valuetext(value) {
    return `залупа`;
}

const exercises = [
    { id: 'squat', name: 'Присед на спине', type: 'pull' },
    { id: 'benchPress', name: 'Жим лёжа', type: 'push' },
    { id: 'deadLift', name: 'Становая', type: 'pull'  }
]

const exercisesFeature = [
    { id: 'light', name: 'Лёгкое' },
    { id: 'middle', name: 'Среднее' },
    { id: 'hard', name: 'Тяжёлое' }
]


function TrainingDay() {
    const classes = useStyles();

    const [day, setDay] = React.useState({
        exercise: '',
        max: '',
        reps: '',
        feature: '',
        adjustment: 0.5,
    });

    const handleDayChange = (prop) => (event) => {
        setDay({ ...day, [prop]: event.target.value || event.target.newValue });
        console.log(day)
    };

    const createDayHandler = event => {
        event.perventDefault();
        axios.post('https://fast-plan-400cb-default-rtdb.firebaseio.com/Days.json')
    }

    const pupa = event => {
        console.log(event.target.input)
    }


        return (
        <Fragment>
            <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" component="h3" align="center">
                        1 тренировочный день
                    </Typography>
                    <div>
                        <hr/>
                        <FormControl className={classes.formControl}>
                            {/*<InputLabel id="exercise-select-helper">Движение 1</InputLabel>*/}
                            <Select
                                labelId="exercise-select-helper"
                                id="exercise-select"
                                value={day.exercise}
                                onChange={handleDayChange('exercise')}
                            >
                                {exercises.map((exercise, i) => {
                                    return (
                                        <MenuItem value={exercise.id} key={exercise.id+i}>{exercise.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            <FormHelperText>1ое упражнение</FormHelperText>
                            <Button variant="contained" color="secondary">
                                Удалить
                            </Button>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                            <Input
                                id="exercise-weight"
                                value={day.max}
                                onChange={handleDayChange('max')}
                                endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                                aria-describedby="exercise-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                            <FormHelperText id="exercise-weight-helper-text">Повторный максимум</FormHelperText>
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                            <Input
                                id="exercise-reps"
                                value={day.reps}
                                onChange={handleDayChange('reps')}
                                startAdornment={<InputAdornment position="start">×</InputAdornment>}
                                aria-describedby="exercise-reps-helper-text"
                                inputProps={{
                                    'aria-label': 'reps',
                                }}
                            />
                            <FormHelperText id="exercise-reps-helper-text">Кол-во повторений</FormHelperText>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            {/*<InputLabel id="exercise-feature-helper-label">Тяжёлое</InputLabel>*/}
                            <Select
                                labelId="exercise-feature-helper-label"
                                id="exercise-feature"
                                value={day.feature}
                                onChange={handleDayChange('feature')}
                            >
                                {exercisesFeature.map((feature, i) => {
                                    return (
                                        <MenuItem value={feature.id} key={feature.id+i}>{feature.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            <FormHelperText>Характер упражнения</FormHelperText>
                        </FormControl>
                    </div>
                    <div>
                         <Typography id="adjustment-slider" gutterBottom>
                             Процент корректировки
                         </Typography>
                         <Slider
                             defaultValue={day.adjustment}
                             aria-labelledby="adjustment-slider"
                             valueLabelDisplay="auto"
                             step={0.1}
                             marks
                             min={0.1}
                             max={1.0}
                             onChange={pupa}
                         />
                        <hr/>
                    </div>
                    <Button variant="contained">Добавить движение</Button>
                </Paper>
            </Grid>
        </Fragment>
    )
}

export default TrainingDay;
