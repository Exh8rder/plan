import React, { Fragment, useReducer } from "react";
import axios from 'axios';
import TrainingDay from "../TrainingDay/TrainingDay";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import {connect, useDispatch, useSelector} from "react-redux";

function PlanCreator(props) {

    const dispatch = useDispatch();
    const week = useSelector(state => state.week);

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

              {week.map((day, i) => {
                  return (
                      <Grid item xs={12} sm={4} key={`day_${i}`}>
                          <Paper className={classes.paper}>
                              <Typography variant="h5" component="h3" align="center">
                                  {i + 1} тренировочный день
                              </Typography>
                              <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={() => dispatch(subDay(i))}
                              >
                                  Удалить день
                              </Button>
                              <Fragment>
                                  <TrainingDay dayNumber = {i}/>
                              </Fragment>
                          </Paper>
                      </Grid>
                  );
              })}

              <Button variant="contained" color="primary" className={classes.button} onClick={()=> dispatch(addDay())}>
                  +
              </Button>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}


const addDay = () => ({type: 'ADD_DAY'})
const subDay = (number) => ({type: 'SUB_DAY', dayNumber: number})



export default PlanCreator;
