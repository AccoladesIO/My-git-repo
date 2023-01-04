import React from 'react'
import RepoList from './components/RepoList'
import Lists from './components/Lists'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Users from './components/Users'
import Footer from './components/Footer'
import { useFetch } from './hooks/useFetch'

const Home = () => {

  const {data, loading} = useFetch()
  
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