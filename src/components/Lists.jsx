import React from 'react'
import { AiOutlineLogin, AiOutlineFile,  AiOutlineGithub, AiOutlineApi, AiOutlineStar } from 'react-icons/ai'
import '../App.css'

const Lists = ({data}) => {
  return (
    <div className='lists'>
        <div className='list'>
            <AiOutlineApi className='icons pink'/>
            <h3 className='text-box'>{data.public_repos} <span className='text-light'>Repositories</span></h3>
        </div>
        <div className='list'>
            <AiOutlineGithub className='icons green'/>
            <h3 className='text-box'>{data.followers} <span className='text-light'>Followers</span></h3>
        </div>
        <div className='list'>
            <AiOutlineGithub className='icons blue'/>
            <h3 className='text-box'>{data.following}<span className='text-light'>Following</span></h3>
        </div>
        <div className='list'>
            <AiOutlineStar className='icons gold'/>
            <h3 className='text-box'>{data.public_gists} <span className='text-light'>Gist</span></h3>
        </div>
    </div>
  )
}

export default Lists