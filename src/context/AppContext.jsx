import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){

    //1.data/states
    const [loading, setLoading]=useState(false);
    const [page, setPage]=useState(1);
    const [posts, setPosts]=useState([]);
    const [totalPages, setTotalPages]=useState(null);

    //2.Data filling via api call
    async function fetchBlogPosts(page=1) {
        setLoading(true);
        let url=`https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
        
        try {
            const result=await fetch(url);
            const data =await result.json();
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);

            console.log('Data fetched', data.posts);
            
        } catch (error) {
            console.log("Error in fetching Data");
            setTotalPages(null);
            setPage(1);
            setPosts([]);
        }
        setLoading(false);
    }

    

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value={
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        handlePageChange,
        fetchBlogPosts
    }

    return  <AppContext.Provider value={value} >
                {children}
            </AppContext.Provider>

}