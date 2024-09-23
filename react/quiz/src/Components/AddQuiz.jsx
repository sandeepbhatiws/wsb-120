import React from "react";
import Breadcum from "./Breadcum";
import { getDatabase, ref, set } from "firebase/database";
import app from '../config/firebase.js';
import { toast } from "react-toastify";

export default function AddQuiz() {

  const formHandler = (event) => {
    event.preventDefault();


    const quizData = {
      question : event.target.question.value,
      option_1 : event.target.option_1.value,
      option_2 : event.target.option_2.value,
      option_3 : event.target.option_3.value,
      option_4 : event.target.option_4.value,
      correct_answer : event.target.correct_answer.value,
    }

    const db = getDatabase(app);
    set(ref(db, 'quizzes/' + Date.now()), quizData);

    toast.success('Quiz add successfully');
    event.target.reset();
    
  }

  return (
    <div>
      <Breadcum title="Add Quiz" />
      
      <div className="space-y-12 mx-auto border rounded-lg my-8 py-4 px-14  max-w-[1400px]">
      <form onSubmit={ formHandler }>
        <fieldset>
        {/* <legend><b></b>Add Quiz Form</legend> */}

        <div className="pb-12 border-b border-gray-900/10">
         
          <div className="mt-10 gap-x-6 gap-y-8 ">
            <div className="">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-left text-gray-900">
                Question
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="question"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-left text-gray-900">
                Option A.
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="option_1"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-left text-gray-900">
                Option B.
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="option_2"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-left text-gray-900">
                Option C.
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="option_3"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-left text-gray-900">
                Option D.
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="option_4"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            

            <div className="flex mt-5 ">
              <label htmlFor="country"  className="block pt-3 grow-[1] text-left  text-sm font-medium leading-6 text-gray-900">
                Correct Answer
              </label>
              <div className="mt-2 grow-[4]">
                <select
                  id="country"
                  name="correct_answer"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                  <option value="4">D</option>
                </select>
              </div>
            </div>
            <div className="pt-5">
            <button
          type="submit"
          className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
            </div>
          </div>
        </div>

        </fieldset>
        </form>
      </div>

    
    </div>
  );
}
