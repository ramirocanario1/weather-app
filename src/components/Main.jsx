import React, { useState } from 'react'
import Search from './Search'
import Weather from './Weather';

export default function Main() {
  const [selectedCityName, setSelectedCityName] = useState("");

  return (
    <>
      <Search selectedCityName={selectedCityName} setSelectedCityName={setSelectedCityName} />
      <Weather selectedCityName={selectedCityName} />
    </>
  );
}
