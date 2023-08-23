'use client'

import AddTodo from "./AddTodo/page"
import Link from "next/link";
import db from "../lib/firebase/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"

import { useEffect, useState } from "react";

type Todo = {
  id: string;
  text: string;
  isEditing: boolean;
  status: string; 
}

export default function Home() {

  const OPTION_VALUES = ["-Status-", "Waiting", "Doing", "Done"];

//Deleteボタン押下時に対象のTodoリストが削除される
  //Deleteボタン押下時に大将のTodoリストのidと全てのTodoリストのidを照らし合わせて、一致したものだけ消す（）

  const [todos, setTodos] = useState<Todo[]>([]);

  const clickDelete = (id: string) => {
    //選んだTodoのidを特定する
    //データベースからデータを削除
    console.log(id)
    const userDocumentRef = doc(db, 'users', id);
    console.log(userDocumentRef)
    deleteDoc(userDocumentRef);
    //const collection = db.collection('data')
    //db.collection('data').doc(todo.id).delete();
  }

  useEffect(() => {
    //データベースからデータを取得
    const todoData = collection(db, "data");
    getDocs(todoData).then((snapShot) => {
      console.log(snapShot.docs.map((doc) => ({ ...doc.data() })))
      // setTodos(snapShot.docs.map((doc) => ({ ...doc.data() })));
      const getTodoData: Todo[] = snapShot.docs.map((doc) => ({
        id: doc.data().id,
        text: doc.data().text,
        isEditing: doc.data().isEditing,
        status: doc.data().status,
      }))
      setTodos(getTodoData)
    })
  }, [])


  return (
    <div className="flex flex-col h-screen">
      {/* header */}
      <header className="flex justify-between items-center space-between  text-2xl font-bold bg-blue-500 text-white text-left p-2">
        <h1>Todo List</h1>
        <div className="flex">
        <select 
                id="hs-select-label" 
                className="py-3 px-4 pr-9 block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                defaultValue="-Status-">
                  {OPTION_VALUES.map((optionvalue) => (
                    <option key={optionvalue} value={optionvalue}>
                      {optionvalue}
                    </option>
                  ))}
              </select>
        <Link href= "/AddTodo">
            <button 
              type="button" 
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Add Todo
            </button>
          </Link>
        </div> 
      </header>
      {/* header */}

      {/* 中身 */}
      <div className="mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">

        <ul className='space-y-3'>
          {todos.map((todo) => (
            <li 
              key={todo.id}
              className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
              {todo.text}
            <div className="flex justify-right">
              <select 
                id="hs-select-label" 
                className="py-3 px-4 pr-9 block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                defaultValue="-Status-">
                  {OPTION_VALUES.map((optionvalue) => (
                    <option key={optionvalue} value={optionvalue}>
                      {optionvalue}
                    </option>
                  ))}
              </select>
              
              {/* 編集ボタン */}
                <Link href="EditTodo">
                  <button 
                    type="button" 
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    // onClick={clickEdit}
                  >
                  Edit
                  </button>
                </Link>
              {/* 編集ボタン */}
              
              {/* 削除ボタン */}
                <button 
                  type="button" 
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  onClick={() => clickDelete(todo.id)}
                  >
                  Delete
                </button>
              {/* 削除ボタン */}

              </div> 
            </li>
            ))}

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
              <button 
                type="button" 
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                // 
              >
                Delete
              </button>
            </div> 
          </li>
        </ul>        
      </div>
    </div>
    
  )
}
