import React from 'react'
import { NavLink as Link, Outlet } from "react-router-dom";
import { AiOutlineBlock, AiOutlineLink, AiOutlineStar, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'
import Loading from './Loading';
import Pagination from './Pagination';
import Footer from './Footer';
import { useFetch } from '../hooks/useFetch';
import { useFetchRepo } from '../hooks/useFetchRepo';
import { usePaginate } from '../hooks/usePaginate';

const Repo = () => {
    const {data, loading} = useFetch()
    const  {repo} = useFetchRepo()
    const  {setCurrentPage, currentRepo, postPerPage, currentPage, setPostPerPage} = usePaginate()
   


if (loading){
    return(
        <main>
            <Loading></Loading>
        </main>
    )
}

    return (
        <section>
            <nav className='navbar'>
                <div>
                    <img src={data.avatar_url} alt={data.login} />
                </div>
                <h2>
                    <span className='text-light'>Welcome,</span> {data.login}
                </h2>
                <div className="links">
                    <Link to="/" className='link'>
                        Overview
                    </Link>
                    <Link to="/repo" className='link'>
                        Repos
                    </Link>
                </div>

            </nav>

            <main>
                <aside>
                    <article className='flex-start'>
                        <img src={data.avatar_url} />
                        <h3>{data.name}</h3>
                        <h5><AiOutlineGithub className='icons small gold'/> {data.login}</h5>
                        <p>{data.bio} </p>
                        <p className='text-light'><AiOutlineTwitter className='icons blue' /> {data.twitter_username}</p>
                        <p><AiOutlineBlock className='icons blue' />{data.location}</p>
                        <p><AiOutlineLink className='icons green' /><a href={data.html_url}>{data.html_url}</a></p>
                    </article>
                </aside>
                <aside>
                    <h1>Repositories</h1>
                    <Outlet />

                    {currentRepo.map((list) => {
                        console.log(list);
                        const format = list.private === false ? 'Public' : 'Private'
                        return (
                            <div className='repo-list' key={list.id}>
                                
                                <span>
                                <Link to={`/repo/${list.name + list.id}/`} state={{list: list}}>
                                    <h2>{list.name}</h2>
                                </Link>
                                    <p className='flex'>{list.language}</p>
                                </span>
                                <p className='format'>{format}</p>
                                <span>
                                    <p className='hidden'>{list.pushed_at}</p>
                                    <p>{list.stargazers_count} <AiOutlineStar className='icons small gold' /></p>
                                </span>
                            </div>
                        )

                    })}

                    <Pagination 
                    totalPost={repo.length}
                    postPerPage={postPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    />
            {/* <Outlet /> */}
                </aside>
            </main>
            <Footer />
        </section>
    )
}

export default Repo