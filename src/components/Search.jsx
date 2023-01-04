import React, { useRef, useState } from 'react'
import useGetCities from '../hooks/useGetCities'
import styles from '../styles/Search.module.css'
import Cities from './Cities'

import { BiSearchAlt } from "react-icons/bi";

export default function Search() {

  const [text, setText] = useState('')
  const [isLoading, cities] = useGetCities({text})

  const searchInput = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    setText(searchInput.current.value)
    console.log(searchInput.current.value);
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label>Search location</label>
        <div>
          <input type="text" ref={searchInput} />
          <button><BiSearchAlt className={styles.search_icon}/></button>
        </div>
      </form>
      <Cities cities={cities}/>
    </>
  );
}