import { useState } from "react";
import { useFetchRepo } from "./useFetchRepo";

export const usePaginate = () => {
    const {repo} = useFetchRepo()

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(5)
 

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage
  const currentRepo = repo.slice(firstPostIndex, lastPostIndex)


  return {setCurrentPage, currentRepo, postPerPage, currentPage, setPostPerPage}
} 