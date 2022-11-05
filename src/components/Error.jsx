import React from 'react'
import { useNavigate } from 'react-router'

const Error = () => {

    
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/')
  }
  return (
    <section className='error-page-wrap'>

    <article className='error-page'>
        <p className='error-msg'>404 Error</p>
        <h1 className='heading-main err'>
           Oppss!! We could not process your request at this time.
        </h1>
        <h2 className='heading-alt'>
            The page you are looking for might have been deleted or moved to a new URL.
        </h2>
        <button type='button' onClick={handleClick} className='fill'>Return Home</button>
    </article>
    </section>
  )
}

export default Error