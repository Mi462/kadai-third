'use client'

//import { useRouter } from "next/navigation"
import AddTodo from "./AddTodo/page"
import Link from "next/link";
import { useContext } from 'react'
import { UserContext } from './context'


export default function Home() {

  //const router = useRouter();
  const OPTION_VALUES = ["-Status-", "Waiting", "Doing", "Done"];

  const todoInfo = useContext(UserContext)

  return (
    <div className="flex flex-col h-screen">
      <header className="space-between  text-2xl font-bold bg-blue-500 text-white text-left p-2">
        <h1>Todo List</h1>
      </header>

      <div className="mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">

          <Link href= "/AddTodo">
            <button 
              type="button" 
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Add Todo
            </button>
          </Link>

          <Link href="/Login">
            <button 
              type="button" 
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border  border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Logout
            </button>
          </Link>
        
        <ul className='space-y-3'>
          {/* {todos.map((todo) => ( */}
            <li 
              // key={todo}
              className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
              {todoInfo.todo}
            <div className='flex justify-right'>
              <select 
                id="hs-select-label" 
                className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                defaultValue="-Status-">
                  {OPTION_VALUES.map((optionvalue) => (
                    <option key={optionvalue} value={optionvalue}>
                      {optionvalue}
                    </option>
                  ))}
              </select>
              
                <Link href="EditTodo">
                  <button 
                    type="button" 
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                  Edit
                  </button>
                </Link>
              
                <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                  Delete
                </button>
              </div> 
            </li>
            {/* ))} */}
          <li className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
            掃除
            <div className='flex justify-right'>
            <select 
                id="hs-select-label" 
                className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                defaultValue="-Status-">
                  {OPTION_VALUES.map((optionvalue) => (
                    <option key={optionvalue} value={optionvalue}>
                      {optionvalue}
                    </option>
                  ))}
              </select>
              <Link href="EditTodo">
                <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                  Edit
                </button>
              </Link>
              <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Delete
              </button>
            </div> 
          </li>
          <li className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
            洗濯
            <div className='flex justify-right'>
            <select 
                id="hs-select-label" 
                className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                defaultValue="-Status-">
                  {OPTION_VALUES.map((optionvalue) => (
                    <option key={optionvalue} value={optionvalue}>
                      {optionvalue}
                    </option>
                  ))}
              </select>
              <Link href="EditTodo">
                <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                  Edit
                </button>
              </Link>
              <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Delete
              </button>
            </div> 
          </li>
        </ul>        
      </div>

    </div>
    
  )
}
