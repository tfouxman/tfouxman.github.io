import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from ".";
import styled from "styled-components";
import { fetchData } from "./api";

const Styles = styled.div`
  & {
    background: #808595;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & img {
    width: 370px;
    margin-top: 50px;
  }

  @media (max-width: 700px) {
    & {
      padding: 0 10%;
    }

    & img {
      width: 100%;
    }
  }
`;

class Covid extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <Styles>
        <img src={require("../../assets/covid.png")} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker onCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </Styles>
    );
  }
}

export default Covid;
