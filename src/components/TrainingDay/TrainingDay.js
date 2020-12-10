import React, {Fragment} from "react";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

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


function TrainingDay() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleExerciseChange = (event) => {
        setAge(event.target.value);
    }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        reps: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


        return (
        <Fragment>
            <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" component="h3" align="center">
                        1 тренировочный день
                    </Typography>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="exercise-select-helper-label">Движение 1</InputLabel>
                        <Select
                            labelId="exercise-select-helper-label"
                            id="exercise-select-helper"
                            value={age}
                            onChange={handleExerciseChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>1ое упражнение</FormHelperText>
                    </FormControl>
                    <div>
                        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                            <Input
                                id="standard-adornment-weight"
                                value={values.weight}
                                onChange={handleChange('weight')}
                                endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text">Повторный максимум</FormHelperText>
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                            <Input
                                id="standard-adornment-reps"
                                value={values.reps}
                                onChange={handleChange('reps')}
                                startAdornment={<InputAdornment position="start">×</InputAdornment>}
                                aria-describedby="standard-reps-helper-text"
                                inputProps={{
                                    'aria-label': 'reps',
                                }}
                            />
                            <FormHelperText id="standard-wreps-helper-text">Кол-во повторений</FormHelperText>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-helper-label">Тяжёлое</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                onChange={handleExerciseChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>Характер упражнения</FormHelperText>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-helper-label">55</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                onChange={handleExerciseChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>Процент корректировки</FormHelperText>
                        </FormControl>
                    </div>
                    <Button variant="contained">Добавить движение</Button>
                </Paper>
            </Grid>
        </Fragment>
    )
}

export default TrainingDay;
