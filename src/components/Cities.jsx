import React from 'react'
import styles from '../styles/Cities.module.css'

export default function Cities({ cities, setSelectedCityName, setShowCities }) {
  function handleClick(e) {
    setSelectedCityName(e.currentTarget.innerHTML);
    setShowCities(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.list_container}>
        <ul className={styles.list}>
          {cities?.map((c) => (
            <li key={c.id} onClick={handleClick}>
              {c.name}, {c.region}, {c.country}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}