import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import axios from 'axios'

export default function BlogSection() {

    let [posts,setPosts] = useState([]);
    let [currentPage,setCurrentPage] = useState(1);
    let [limit,setLimit] = useState(15);
    let [totalRecords,setTotalRecords] = useState(0);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts',{
            params : {
                limit: limit*currentPage
            }
        }).then((response) => {
            setPosts(response.data.posts)
            setTotalRecords(response.data.total)
        }).catch((error) => {
            
        })
    },[currentPage])

    const pagination = () => {
        currentPage++;
        setCurrentPage(currentPage);
    }

  return (
    <>
        <div className='w-full text-4xl p-5'>Blogs</div>
        <div className='flex-justify-center'>
            <div class="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">

                {
                    posts.map((v,i) => {
                        return(
                            <Blog blog={v}/>
                        )
                    })
                }
            </div>
            
            {
                ((currentPage*limit) > totalRecords)
                ?
                ''
                :
                <button type="button" class="mt-7 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150" onClick={pagination}>
                    Read More
                </button>
            }
        </div>
    </>
  )
}
