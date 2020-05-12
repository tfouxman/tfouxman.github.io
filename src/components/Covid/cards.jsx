import React from "react";
import styled from "styled-components";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

const Styles = styled.div`
  & {
    margin: 50px 0;
  }

  .card {
    margin: 0 2% !important;
  }

  @media (max-width: 700px) {
    .card {
      margin: 2% 0 !important;
    }
  }

  .infected {
    border-bottom: 10px solid rgba(0, 0, 255, 0.5);
  }

  .recovered {
    border-bottom: 10px solid rgba(0, 255, 0, 0.5);
  }

  .deaths {
    border-bottom: 10px solid rgba(255, 0, 0, 0.5);
  }
`;

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <Styles>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={11} md={3} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              Updated on
              <br />
              {new Date(lastUpdate).toDateString()}
              <br />
              at {new Date(lastUpdate).toLocaleTimeString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={11} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              Updated on
              <br />
              {new Date(lastUpdate).toDateString()}
              <br />
              at {new Date(lastUpdate).toLocaleTimeString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={11} md={3} className="card deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              Updated on
              <br />
              {new Date(lastUpdate).toDateString()}
              <br />
              at {new Date(lastUpdate).toLocaleTimeString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths from COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Styles>
  );
};

export default Cards;
