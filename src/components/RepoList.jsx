import React from 'react'
import { useEffect, useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import '../App.css'
import Pagination from './Pagination'

const RepoList = () => {

  const [repo, setRepo] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)


  const fetchData = async () => {
    
    const url_repo = 'https://api.github.com/users/accoladesio/repos'

    const response = await fetch(url_repo);
    const repo = await response.json();
    console.log(repo[1].owner)
    // console.log(repo);

    setRepo(repo)
    // disable loading state once data is fetched
    // console.log(repo)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage
  const currentRepo = repo.slice(firstPostIndex, lastPostIndex)

  return (
    <article className='info repo'>
        <h3 className='title'>Repositories</h3>

        {currentRepo.map((list, i) => {
          console.log(list);
          return(
        <div className='repo-list' key={i}>
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