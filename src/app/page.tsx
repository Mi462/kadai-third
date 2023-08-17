'use client'

//import { useRouter } from "next/navigation"
import AddTodo from "./components/AddTodo"
import Link from "next/link";


export default function Home() {

  //const router = useRouter();
  
  return (
    <div className="flex flex-col h-screen">
      <header className="space-between  text-2xl font-bold bg-blue-500 text-white text-left p-2">
        <h1>Todo List</h1>
    </header>

      <div className="mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">

          <Link href= "/components/AddTodo">
            <button 
              type="button" 
              className="py-3 px-4 inline-flex justify-right items-center gap-2 rounded-md border      border-transparent font-semibold text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Add Todo
            </button>
          </Link>

          <button 
            type="button" 
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            Logout
          </button>
        
        <ul className='space-y-3'>
          <li className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
            散歩
            <div className='flex justify-right'>
              <select id="hs-select-label" className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <option selected>-Status-</option>
                <option>Waiting</option>
                <option>Doing</option>
                <option>Done</option>
              </select>
              
                <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                 Edit
                </button>
              
                <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                  Delete
                </button>
            </div> 
          </li>
          <li className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
            掃除
            <div className='flex justify-right'>
              <select id="hs-select-label" className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <option selected>-Status-</option>
                <option>Waiting</option>
                <option>Doing</option>
                <option>Done</option>
              </select>
              <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Edit
              </button>
              <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Delete
              </button>
            </div> 
          </li>
          <li className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
            洗濯
            <div className='flex justify-right'>
              <select id="hs-select-label" className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <option selected>-Status-</option>
                <option>Waiting</option>
                <option>Doing</option>
                <option>Done</option>
              </select>
              <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Edit
              </button>
              <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Delete
              </button>
            </div> 
          </li>
        </ul>
        
      </div>

      

      <div className="mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">
        <input 
          type="text" 
          className="flex justify-between border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
          placeholder='Todo'/>

          <div className="flex justify-content flex-end">
            <select 
              id="hs-select-label" 
              className="py-3 px-4 pr-9 block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <option selected>-Status-</option>
                <option>Waiting</option>
                <option>Doing</option>
                <option>Done</option>
            </select>
          
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              +
            </button>
          
          </div>
      </div>

      <div className="mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">
        <input 
          type="text" 
          className="flex justify-between border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
          placeholder='Todo'/>

          <div className="flex justify-content flex-end">
            <select 
              id="hs-select-label" 
              className="py-3 px-4 pr-9 block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <option selected>-Status-</option>
                <option>Waiting</option>
                <option>Doing</option>
                <option>Done</option>
            </select>
          
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Save
            </button>
          
          </div>
      </div>
      
    </div>
    
  )
}
