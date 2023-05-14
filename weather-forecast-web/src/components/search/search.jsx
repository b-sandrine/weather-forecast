/* eslint-disable react/prop-types */
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";
// eslint-disable-next-line no-unused-vars
import React from "react";
const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState(null);

  function handleOnChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  const loadOptions =  async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      )
      const responseJson = await response.json();
      console.log(responseJson.data)
      const options = responseJson.data.map((item) => ({
        value: `${item.latitude} ${item.longitude}`,
        label: `${item.name} , ${item.countryCode}`,
      }));
      return {
        options,
        hasMore: false, // Set this to true if there are more options to load
      };
    } catch (err) {
      console.log(err);
      return {
        options: [],
        hasMore: false,
      };
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className="search--box"
    />
  );
};

export default Search;
