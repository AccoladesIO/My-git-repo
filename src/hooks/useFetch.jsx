import { useEffect, useState } from 'react'


export const useFetch = () => {
    const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const url = 'https://api.github.com/users/accoladesio';

  const fetchData = async () => {
    // enable loading state while fetching data
    setLoading(true)

    // waiting for response from Api Call
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    // disable loading state once data is fetched
    setLoading(false)
    setData(result)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {loading, data}
}