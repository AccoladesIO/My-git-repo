import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink as Link } from "react-router-dom";
import { AiOutlineBlock, AiOutlineLink, AiOutlineStar, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'
import Navbar from './Navbar'
import Loading from './Loading';
import Pagination from './Pagination';
import Footer from './Footer';

const Repo = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const [repo, setRepo] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(5)


    const fetchData = async () => {


        setLoading(true)

        // waiting for response from Api Call
        const res = await fetch('https://api.github.com/users/accoladesio');
        const result = await res.json();
        console.log(result);

        // disable loading state once data is fetched
        setLoading(false)
        setData(result)


        const url_repo = 'https://api.github.com/users/accoladesio/repos'

        const response = await fetch(url_repo);
        const repo = await response.json();


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


                    {currentRepo.map((list, i) => {
                        console.log(list);
                        const format = list.private === false ? 'Public' : 'Private'
                        return (
                            <div className='repo-list' >
                                <span>
                                    <h2>{list.name}</h2>
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
                </aside>
            </main>
            <Footer />
        </section>
    )
}

export default Repo