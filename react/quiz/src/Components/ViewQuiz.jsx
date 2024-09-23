import React, { useEffect, useState } from 'react'
import Breadcum from './Breadcum'
import { getDatabase, ref, onValue } from "firebase/database";
import app from '../config/firebase.js';

export default function ViewQuiz() {

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
  const starCountRef = ref(db, 'quizzes/');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();

    var finalquiz = [];

    for(var v in data){
      finalquiz.push(data[v]);
    }
    
    setQuizData(finalquiz);


  });
  },[]);

  

  return (
    <div>
      <Breadcum title='View Quiz' />
      <div className='py-10'>
      <div className='flex justify-start pb-5 pl-2'><button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Clear All</button>
      </div>
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                className="px-5 py-3 text-xs font-semibold tracking-wider text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                S.n0
              </th>
              <th
                className="px-5 py-3 text-xs font-semibold tracking-wider text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Quastion
              </th>
              <th
                className="px-5 py-3 text-xs font-semibold tracking-wider text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Option 1
              </th>
              <th
                className="px-5 py-3 text-xs font-semibold tracking-wider text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Option 2
              </th>
              <th
                className="px-5 py-3 text-xs font-semibold tracking-wider text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Option 3
              </th>
              <th
                className="px-5 py-3 text-xs font-semibold tracking-wider text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Option 4
              </th>
              <th
                className="px-5 py-3 text-xs font-semibold tracking-wider text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Answer
              </th>
              <th
                className="px-5 py-3 text-xs font-semibold tracking-wider text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
              >

                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {
              quizData.map((v,i) => {
                return(
                  <tr>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                1.
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                {v.question}
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                sdhsfsf
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                sfsdfsdf
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                fsdfsdf
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                fsdfsdf
              </td>
              <td className="px-5 py-5 text-sm underline bg-white border-b border-gray-200">
                Hypertext  markup language
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Delete</button>
              </td>
            </tr>
                )
              })
            }
            
          </tbody>


        </table>
       
      </div>
    </div>
  )
}
