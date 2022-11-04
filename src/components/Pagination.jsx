import React from 'react'

const Pagination = ({ totalPost, postPerPage, setCurrentPage, currentPage }) => {
    // get arrays of page numbers
    let pages = []

    // work dynamically 
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className='btn-wrapper'>
            {currentPage !== 1 && <button onClick={() => setCurrentPage(currentPage - 1)} className='fill'> prev</button>}
            {pages.map((page, i) => {

                const switchPage = () => {
                    setCurrentPage(page)
                    // console.log(page)
                }
                const style = page === currentPage ? 'fill active' : 'fill'
                return (
                    <>
                        <button key={i} className={style} onClick={switchPage} type='button'>{page}</button>
                    </>
                )
            })}
            {currentPage !== Math.ceil(totalPost/postPerPage) && <button onClick={() => setCurrentPage(currentPage + 1)} className='fill'> next</button>}
        </div>
    )
}

export default Pagination