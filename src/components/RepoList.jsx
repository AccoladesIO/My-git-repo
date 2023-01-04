import React from 'react'
import { useEffect, useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import '../App.css'
import Pagination from './Pagination'
import { useFetchRepo } from '../hooks/useFetchRepo'

const RepoList = () => {
  const repo = useFetchRepo()

    const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)
 

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage
  const currentRepo = repo.slice(firstPostIndex, lastPostIndex)

  return (
    <article className='info repo'>
        <h3 className='title'>Repositories</h3>

        {currentRepo.map((list) => {
          console.log(list.id);
          return(
        <div className='repo-list' key={list.id}>
          <p><strong>Name:</strong> {list.name}</p>
          <p>{list.language}</p>
          <p>{list.stargazers_count} <AiOutlineStar className='icons small gold'/></p>
        </div>

          )

        })}
        <Pagination 
         totalPost={repo.length}
         postPerPage={postPerPage}
         setCurrentPage={setCurrentPage}
         currentPage={currentPage}
        />
    </article>
  )
}

export default RepoList