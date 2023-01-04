import React from 'react'
import styles from '../styles/Cities.module.css'

export default function Cities({cities}) {

  return (
    <div className={styles.container}>
      {/* <label>Cities</label> */}
      <div className={styles.list_container}>
        <ul className={styles.list}>
          {cities?.map((c) => (
            <li key={c.id}>{c.name}, {c.region}, {c.country}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}