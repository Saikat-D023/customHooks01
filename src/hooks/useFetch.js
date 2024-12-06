import { useState, useEffect } from "react"

export function usePostTitle(){
    
    const [post, setPost] = useState({})

    async function getPosts(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const json = await response.json()
        setPost(json)
    }

    useEffect(() => {
        getPosts()
    }, [])

        return post.title;
}

//what is the useFetch supposed to do: it will take the url as an input and it will return the state variable and returns some data, which can be a post or title , based on the url we are passing

export function useFetch(url) {
    const [loading, setLoading] = useState(true)
    const [finalData , setFinalData] = useState({})

    async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json) ;
        setLoading(false);
    }

    useEffect(() => {
        getDetails()
    }, [url])

    return {
        finalData ,
        loading
    }
}