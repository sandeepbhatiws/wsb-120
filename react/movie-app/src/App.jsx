import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import MovieCard from './MovieCard';
import Loading from './Loading';

function App() {

    let [search, setSearch] = useState('');
    let [loading,setLoading] = useState(true);
    let [movies, setMovies] = useState([]);

    useEffect(() => {

      var APIURL = 'https://api.themoviedb.org/3/discover/movie';
      var searchAPI = 'https://api.themoviedb.org/3/search/movie';

      if(search == ''){
        var url = APIURL;
      } else {
        var url = searchAPI;
      }

      axios.get(url,{
        params: {
          sort_by : 'popularity.desc',
          api_key : '04c35731a5ee918f014970082a0088b1',
          page : 1,
          query : search
        }
      }).then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      }).catch((error) => {
  
      });
    },[search]);

    const searchMovie = (event) => {
      setLoading(true);
      setSearch(event.target.value)
    }

  return (
    <>
      <div class="max-w-[1350px] py-10 m-auto">
        <div class="flex items-center">
            <h1 class="text-[20px] w-[150px] px-3 text-center text-white">Movie Search</h1>
            <input type="text" class="w-[90%] shadow-[5px_5px_0px_2px_#749fd0] mx-3 rounded-[10px]  py-2 px-4" id="search" onChange={searchMovie}/>
        </div>
        
        <div class=" py-5 mt-[3%] ">

            {
              (loading != 1)
              ?
              <div class="grid grid-cols-4 gap-[15px] " id="maindiv">
              
                {
                  movies.map((v,i) =>{
                    return(
                      <MovieCard movie ={v}/>
                    )
                  })
                }
            </div>
              :
              <Loading/>
            }
          
            
        </div>
      </div>
    </>
  )
}

export default App
