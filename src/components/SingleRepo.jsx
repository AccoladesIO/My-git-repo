import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineGithub, AiOutlineApi, AiOutlineStar } from 'react-icons/ai'
import { useNavigate } from 'react-router'

const SingleRepo = () => {

    const navigate = useNavigate()
    const handleClick = () =>{
      navigate('/repo')
   }


    const location = useLocation();
    let { list } = location.state
    console.log(list)
  return (
    <section className='home--section'>
      <div className='lists'>
        <div className='list'>
            <AiOutlineApi className='icons pink'/>
            <h3 className='text-box'>{list.forks} <span className='text-light'>Forks</span></h3>
        </div>
        <div className='list'>
            <AiOutlineGithub className='icons green'/>
            <h3 className='text-box'>{list.watchers} <span className='text-light'>Watchers</span></h3>
        </div>
        <div className='list'>
            <AiOutlineStar className='icons blue'/>
            <h3 className='text-box'>{list.stargazers_count}<span className='text-light'>Star Gazzers</span></h3>
        </div>
        <div className='list'>
            <AiOutlineGithub className='icons gold'/>
            <h3 className='text-box'>{list.size} <span className='text-light'>Size</span></h3>
        </div>
    </div>
    <article className='user user-info'>
      <h3><strong>Repo Id: </strong>{list.id}</h3>
      <h3><strong>Branch: </strong>{list.default_branch}</h3>
      <p><b>Name:</b> {list.name}</p>
      <h3><strong>Description: {list.description}</strong></h3>
      <h3>Visibility: {list.visibility}</h3>
      <p>Language: {list.language}</p>
      <p>Clone URL: <a href={list.clone_url}>{Link.clone_url}</a></p>
      <button type='button' onClick={handleClick} className='fill'>Return Back</button>
    </article>
    
    </section>
  )
}

export default SingleRepo