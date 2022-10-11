import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Filter = ({ setFilterKey }) => {
  //Function for getting the value from the select input for filtering the movies.
  const setKey = (e) => {
    setFilterKey(e.target.value);
  };

  return (
    <div>
      <form>
        <select
          onChange={setKey}
          name='movie-filter'
          id='filter'
          className='w-40 bg-gray-600 py-2 text-white'>
          <option className='py-2 text-white' value='All'>
            All
          </option>
          <option className='py-2 text-white' value='2022'>
            2022
          </option>
          <option className='py-2 text-white' value='2020'>
            2020
          </option>
          <option className='py-2 text-white' value='2021'>
            2021
          </option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
