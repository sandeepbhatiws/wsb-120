import React from 'react'
import HomeContent from './HomeContent'
import posts from '../assets/common_data/posts.js'

export default function Home() {

    var heading = 'Home Page';

    var finalPosts = posts.map((v,i) => {
        return(
            <div className="column" key={i}>
                <h2>{v.title}</h2>
                {v.body}
            </div>
        )
    })

  return (
        <>
            <div className='mainheading'>
                <h1>{ heading }</h1>
            </div>
            <div className="row">
                

                {/* First Method */}
                {/* {
                    posts.map((v,i) => {
                        return(
                            <div className="column">
                                <h2>{v.title}</h2>
                                {v.body}
                            </div>
                        )
                    })
                } */}


                {/* Second Method */}

                { finalPosts }

                {/* <HomeContent/>
                <HomeContent/>
                <HomeContent/>
                <HomeContent/> */}
            </div>
        </>
  )
}
