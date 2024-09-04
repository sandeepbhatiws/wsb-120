import React from 'react'
import HomeContent from './HomeContent'
import posts from '../assets/common_data/posts.js'

export default function Home() {

    var heading = 'Home Page';

    var homeContent = 'His mother had always taught him';
    var description = "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.";

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

                {/* { finalPosts } */}

                {/* Third Method */}
                {
                    posts.map((v,i) => {
                        return(
                            <HomeContent data={v} key={i}/>
                        )
                    })
                }


                {/* <HomeContent heading={ homeContent } description = {description}>

                    His mother had always taught him

                </HomeContent> */}

                {/* 
                <HomeContent/>
                <HomeContent/>
                <HomeContent/> */}
            </div>
        </>
  )
}
