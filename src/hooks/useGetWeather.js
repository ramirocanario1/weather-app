import { useEffect, useState } from "react";
import {API_KEY} from '../utils'

const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json?key='

export default function useGetWeather(cityName) {

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    if (cityName?.length > 0) {
      setData({})
      setIsLoading(true)
      fetch(`${BASE_URL}${API_KEY}&q=${cityName}&days=7&aqi=no&alerts=no&lang=es`)
      .then(r => r.json())
      .then(r => {
        setData(r)
        setIsLoading(false)
        console.log({r})
      })
    }
  }, [cityName])
  
  return [isLoading, data]
}