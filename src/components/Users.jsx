import React from 'react'
import { AiOutlineBlock, AiOutlineLink, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import '../App.css'

const Users = ({data}) => {
  return (
    <article className='info users'>
        <h3 className='title'>User</h3>

        <header>
          <div>
            <img src={data.avatar_url} alt={data.login} />
          </div>
          <div className='text-box'>
            <h3>
              {data.name} <br />
              <p className='text-light'><AiOutlineTwitter className='icons blue'/> {data.twitter_username}</p>
            </h3>
          </div>
        </header>
        <article className='user-info'>
          <h3 className='text-light'>{data.bio}</h3>
          <p><AiOutlineBlock className='icons blue small'/>{data.location}</p>
          <p><AiOutlineLink className='icons green small'/><a href={data.html_url}>{data.html_url}</a></p>
          <p><AiOutlineMail className='icons pink small'/>{data.email}</p>
        </article>
    </article>
  )
}

export default Users