import React, { useEffect, useRef, useState } from 'react'
import useGetCities from '../hooks/useGetCities'
import styles from '../styles/Search.module.css'
import Cities from './Cities'

import { BiSearchAlt } from "react-icons/bi";

export default function Search({ selectedCityName, setSelectedCityName }) {
  const [text, setText] = useState("");
  const [showCities, setShowCities] = useState(true)

  const [isLoading, cities] = useGetCities({ text });

  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.value = selectedCityName;
  }, [selectedCityName]);

  useEffect(() => {
    setShowCities(true)
  }, [cities])
  
  function handleSubmit(e) {
    e.preventDefault();
    setText(searchInput.current.value);
  }

  function renderCities() {
    if (showCities) {
      return (
        <Cities
          cities={cities}
          setSelectedCityName={setSelectedCityName}
          setShowCities={setShowCities}
        />
      );
    }
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label>Search location</label>
        <div>
          <input type="text" ref={searchInput} />
          <button>
            <BiSearchAlt className={styles.search_icon} />
          </button>
        </div>
      </form>
      {renderCities()}
    </>
  );
}