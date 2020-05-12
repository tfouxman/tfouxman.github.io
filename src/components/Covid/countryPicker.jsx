import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styled from "styled-components";

import { fetchCountries } from "./api";

const Styles = styled.div`
  & {
    display: flex;
    justify-content: center;
    width: 30%;
    margin-bottom: 30px !important;
  }
`;

const CountryPicker = ({ onCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <Styles>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => onCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Styles>
  );
};

export default CountryPicker;
