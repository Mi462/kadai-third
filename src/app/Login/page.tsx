'use client'

import Link from "next/link";


export default function Login() {
  return(
    <div>
      <header className="space-between  text-2xl font-bold bg-blue-500 text-white text-left p-2">
        <Link href="/">
          <h1>Todo List</h1>
        </Link>
      </header>

      <div className="mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">
        <label className="block text-sm font-medium mb-2 dark:text-white">
          Email
        </label>
        <input 
          type="email" 
          id="input-label" 
          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" 
          placeholder="you@site.com" />
        
        <br/>

        <label className="block text-sm font-medium mb-2 dark:text-white">
          Password
        </label>
        <input 
          type="email" 
          id="input-label" 
          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" 
        />

        <Link href="/">
          <button 
            type="button" 
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            Login
          </button>
        </Link>

      </div>
    </div>
  )
}