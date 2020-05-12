import React, { useState, useEffect } from "react";
import { fetchDailyData } from "./api";
import { Line, Bar } from "react-chartjs-2";
import styled from "styled-components";

const Styles = styled.div`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
  }

  @media (max-width: 700px) {
    & {
      width: 100%;
    }
  }

  .footer p {
    text-align: center;
  }

  .footer {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
`;

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  if (!confirmed) return "Loading...";

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <Styles>
      {country ? barChart : lineChart}
      <div className="footer">
        <p>
          The source of the API used is{" "}
          <a target=" " href="https://github.com/mathdroid/covid-19-api">
            here
          </a>
          .
        </p>
        <p>
          The repo used for reference is{" "}
          <a
            target=" "
            href="https://github.com/adrianhajdin/project_corona_tracker"
          >
            here
          </a>
          .
        </p>
      </div>
    </Styles>
  );
};

export default Chart;
