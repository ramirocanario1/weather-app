import React from 'react'
import useGetWeather from '../hooks/useGetWeather';
import styles from '../styles/Weather.module.css'

export default function Weather({ selectedCityName }) {

  const [isLoading, data] = useGetWeather(selectedCityName)

  return (
    <main>
      
    </main>
  );
}