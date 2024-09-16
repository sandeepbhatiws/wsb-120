import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function BlogDetails() {

  const params = useParams();

  let [blog,setBlog] = useState('');


  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${params.blog_id}`)
    .then((response) => {
      setBlog(response.data)
    })
    .catch((error) => {

    })
  })

  console.log(params.blog_id);

  return (
    <div>
      <Header/>
        Blog Details

        <p>{blog.body}</p>
    </div>
  )
}
