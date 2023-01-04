import { useEffect, useState } from "react";
import {API_KEY} from '../utils'

const BASE_URL = 'http://api.weatherapi.com/v1/search.json?key='

export default function useGetCities({text}) {
  const [isLoading, setIsLoading] = useState(false)
  const [cities, setCities] = useState([])

  useEffect(() => {
    console.log('Text changed')
    if (text?.length > 0) {
      setCities([])
      setIsLoading(true)
      fetch(`${BASE_URL}${API_KEY}&q=${text}`)
      .then(r => r.json())
      .then(r => {
        setCities(r)
        setIsLoading(false)
        console.log({r})
      })
    }
  }, [text])
  
  return [isLoading, cities]
}