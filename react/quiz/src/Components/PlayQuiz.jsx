import React, { useEffect, useState } from 'react'
import Breadcum from './Breadcum'
import app from '../config/firebase.js'
import { getDatabase, ref, onValue } from "firebase/database";

export default function PlayQuiz() {

  let [quizData, setQuizData] = useState([]);

  useEffect(() => {
      const db = getDatabase(app);
      const starCountRef = ref(db, 'quizzes/');
      onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
          var quizOutput = [];
          for(let key in data){
              quizOutput.push(data[key]);
          }
          setQuizData(quizOutput);
      });
  },[]);

  return (
    <div>
      <Breadcum title = 'Play Quiz'/>

      <div class=" min-h-screen flex items-center">
      <div class="w-full">

          {
              quizData.map((quiz,index) =>{
                  return(
                      <Quiz quiz={quiz} index={index}/>
                  );
              })
          }

          
      </div>
  </div>
    </div>
  )
}

function Quiz({quiz,index}){

  let [givenAnswer, setGivenAnswer] = useState('');
  let [correctAnswer, setCorrectAnswer] = useState('');

  var finalCorrectAnswer = '';

  if(quiz.correct_answer.trim() == '1'){
      var finalCorrectAnswer = quiz.option_1.trim();
  } else if(quiz.correct_answer.trim() == '2'){
      var finalCorrectAnswer = quiz.option_2.trim();
  } else if(quiz.correct_answer.trim() == '3'){
      var finalCorrectAnswer = quiz.option_3.trim();
  } else if(quiz.correct_answer.trim() == '4'){
      var finalCorrectAnswer = quiz.option_4.trim();
  }

  // console.log(givenAnswer);
  // console.log(correctAnswer);

  return(
      <div key={index} class="m-6 bg-white border border-gray-300 shadow p-3 p-5 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <div class="mb-5">
              <div class="border font-bold text-[20px] border-gray-300 shadow p-3 w-full rounded mb-"> {index+1}. {quiz.question} </div>
          </div>
          

          <div class="mb-5">
              <div class={`border border-gray-300 shadow p-3 w-full rounded mb- 
                
                ${(quiz.option_1.trim() == givenAnswer) ? 'bg-green-600' : '' }

                ${(givenAnswer == 1) ? 'bg-red-600' : ''}

                ${(correctAnswer == quiz.option_1.trim()) ? 'bg-green-600' : ''}

              `}
              
              onClick = { 
                (event) => {
                    var cAns = event.target.innerHTML.trim();

                    if(finalCorrectAnswer == cAns){
                        setGivenAnswer(quiz.option_1.trim())
                    } else {
                        setGivenAnswer(1);
                    }
                    setCorrectAnswer(finalCorrectAnswer);
                }    
              }
              > {quiz.option_1} </div>
          </div>

          <div class="mb-5">
              <div class={`border border-gray-300 shadow p-3 w-full rounded mb- 

                ${(quiz.option_2.trim() == givenAnswer) ? 'bg-green-600' : '' }

                ${(givenAnswer == 2) ? 'bg-red-600' : ''}

                ${(correctAnswer == quiz.option_2.trim()) ? 'bg-green-600' : ''}

              `}

                onClick = { 
                  (event) => {
                      var cAns = event.target.innerHTML.trim();

                      if(finalCorrectAnswer == cAns){
                          setGivenAnswer(quiz.option_2.trim())
                      } else {
                          setGivenAnswer(2);
                      }
                      setCorrectAnswer(finalCorrectAnswer);
                  }    
                }
              > {quiz.option_2} </div>
          </div>

          <div class="mb-5">
              <div class={`border border-gray-300 shadow p-3 w-full rounded mb- 
                
                ${(quiz.option_3.trim() == givenAnswer) ? 'bg-green-600' : '' }

                ${(givenAnswer == 3) ? 'bg-red-600' : ''}

                ${(correctAnswer == quiz.option_3.trim()) ? 'bg-green-600' : ''}

                `}

                onClick = { 
                  (event) => {
                      var cAns = event.target.innerHTML.trim();

                      if(finalCorrectAnswer == cAns){
                          setGivenAnswer(quiz.option_3.trim())
                      } else {
                          setGivenAnswer(3);
                      }
                      setCorrectAnswer(finalCorrectAnswer);
                  }    
                }
              > {quiz.option_3} </div>
          </div>

          <div class="mb-5">
              <div class={`border border-gray-300 shadow p-3 w-full rounded mb- 

                ${(quiz.option_4.trim() == givenAnswer) ? 'bg-green-600' : '' }

                ${(givenAnswer == 4) ? 'bg-red-600' : ''}

                ${(correctAnswer == quiz.option_4.trim()) ? 'bg-green-600' : ''}

              `}

                onClick = { 
                  (event) => {
                      var cAns = event.target.innerHTML.trim();
                      console.log(cAns);
                      if(finalCorrectAnswer == cAns){
                          setGivenAnswer(quiz.option_4.trim())
                      } else {
                          setGivenAnswer(4);
                      }
                      setCorrectAnswer(finalCorrectAnswer);
                  }    
                }
              > {quiz.option_4} </div>
          </div>
      </div>
  )
}
