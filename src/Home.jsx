import React from 'react'
import { useEffect, useState } from 'react'
import RepoList from './components/RepoList'
import Lists from './components/Lists'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Users from './components/Users'
import Footer from './components/Footer'

const Home = () => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)

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

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }


  return (
    <section className='home--section'>
        <Navbar data={data}/>
        <Lists data={data}/>
        <section className='user-section'>
            <Users data={data}/>
            <RepoList data={data}/>
        </section>
        <Footer />
    </section>
  )
}

export default Home