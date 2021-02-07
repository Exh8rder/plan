import React, { Fragment, useState } from "react";
import axios from 'axios';
import TrainingDay from "../TrainingDay/TrainingDay";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import Exercise from "../TrainingDay/Exercise";
import Paper from "@material-ui/core/Paper/Paper";
import {connect} from "react-redux";

function PlanCreator(props) {

    // console.log('STATE', props);

    const [dayNumber, setDay] = React.useState([]);

    const addDay = () => {
        setDay([...dayNumber, {}]);
        props.onAdd();
        // console.log(dayNumber);
        // axios.post('https://fast-plan-400cb-default-rtdb.firebaseio.com/days.json', dayNumber);
    };

    const deleteDay = (index) => {
        setDay(
            [...dayNumber].filter((elem, i) => {
                return i !== index;
            })

        );
        // axios.post('https://fast-plan-400cb-default-rtdb.firebaseio.com/days.json', dayNumber);
    };

    const useStyles = makeStyles((theme) => ({

        paper: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary,
        },
        button: {
            margin: theme.spacing(2),
            // marginBottom: theme.spacing(2),
        },
        delButton: {
            margin: theme.spacing(2),
            position: 'absolute',

        }
    }));

    const classes = useStyles();

  return (
    <div>
      <Box>
        <Container style={{ backgroundColor: "#cfe8fc" }}>
          <Typography variant="h3" component="h2" align="center">
            Заполнение плана
          </Typography>
          <Grid container spacing={3}>

              {props.day.map((day, i) => {
                  return (
                      <Grid item xs={12} sm={4} key={`day_${i}`}>
                          <Paper className={classes.paper}>
                              <Typography variant="h5" component="h3" align="center">
                                  {i + 1} тренировочный день
                              </Typography>
                              <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={() => props.onSub(i)}
                              >
                                  {" "}
                                  Удалить день{" "}
                              </Button>
                              <Fragment>
                                  <TrainingDay dayNumber = {i}/>
                              </Fragment>
                          </Paper>
                      </Grid>
                  );
              })}

              <Button variant="contained" color="primary" className={classes.button} onClick={props.onAdd}>
                  +
              </Button>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

function mapStateToProps(state) {
    return {
        day: state.day
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({type: 'ADD'}),
        onSub: number => dispatch({type: 'SUB', payload: number})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanCreator);
