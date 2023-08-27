'use client'

import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

interface PageProps {
  params: {
    id: string[];
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function EditTodo: NextPage<PageProps> ({ params, searchParams }) => {

  const OPTION_VALUES = ["-Status-", "Waiting", "Doing", "Done"];

  const newTodo = [
    {
      id: "",
      todo: "",
      status: "waiting",
      isEditing: "false"
    }
  ]

  const [text, setText] = useState<string>('')
  const [todos, setTodos] = useState(newTodo);

  //Editボタン押下時に
  //下のEdit用のinputタグの中に編集内容を渡す(inputタグのvalueに編集内容を渡す)
  //対象のTodoリストを削除する

  const changeEditingText = (e: React.ChangeEvent<HTMLInputElement>) => {
  setText(e.target.value);
}


  const clickEdit = (id: string, todo: string) => {
    const subNewTodos = [...todos];
    console.log(id)
    console.log(todo)
    setTodos(subNewTodos.filter((todo) => todo.id !== id));
}

  return(
    <div>
      {/* header */}
      <header className="flex justify-between items-center space-between  text-2xl font-bold bg-blue-500 text-white text-left p-2">
        <Link href="/">
          <h1>Todo List</h1>
        </Link>
        <Link href= "/AddTodo">
            <button 
              type="button" 
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Add Todo
            </button>
          </Link>
      </header>
      {/* header */}
      
      {/* 編集サイト */}
      
    <div> 
      {/* 中身 */}
      <div className="flex mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">
        <input 
          type="text" 
          // value={}
          className="flex justify-between w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
          placeholder='Todo'
          onChange={changeEditingText}/>
        
        <div className="flex">
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
        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
          Save
        </button>
        </div>  
      </div>
      {/* 中身 */}
      
    </div>       
      {/* 編集サイト */}
    </div>
  )
}