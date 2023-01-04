import { useState } from "react";

export const useFetchRepo = () => {

    const [repo, setRepo] = useState([])


    const fetchData = async () => {
    
        const url_repo = 'https://api.github.com/users/accoladesio/repos'
    
        const response = await fetch(url_repo);
    
        const repo = await response.json();
    
    
        setRepo(repo)
        // disable loading state once data is fetched
    
    
        console.log(repo)
      }
    
      useEffect(() => {
        fetchData()
      }, [])
     
      return {repo}
}