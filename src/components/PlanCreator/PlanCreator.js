import React from "react";
// import axios from 'axios';
import TrainingDay from "../TrainingDay/TrainingDay";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

function PlanCreator() {
  return (
    <div>
      <Box>
        <Container style={{ backgroundColor: "#cfe8fc" }}>
          <Typography variant="h3" component="h2" align="center">
            Заполнение плана
          </Typography>
          <Grid container spacing={3}>
            <TrainingDay />
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default PlanCreator;
