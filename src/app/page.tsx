'use client'

import Link from "next/link";
import db from "../lib/firebase/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Todo = {
  id: string;
  text: string;
  isEditing: boolean;
  status: string; 
}

export default function Home() {

  //データベースで扱う情報
  const [todos, setTodos] = useState<Todo[]>([]);
  //ページ遷移用
  const router = useRouter();
  //Statusの選択肢
  const OPTION_VALUES = ["-Status-", "Waiting", "Doing", "Done"];

  const clickDelete = (id: string) => {
    //選んだTodoのidを特定する
    //データベースからデータを削除
    //firebaseの中のデータを削除する（バック側）
    deleteDoc(doc(db,"data", id))
    //表示するための処理（フロント側）
    const deleteTodo = todos.filter((todo) => todo.id !== id)
    setTodos(deleteTodo);
  }

  useEffect(() => {
    //データベースからデータを取得
    const todoData = collection(db, "data");
    getDocs(todoData).then((snapShot) => {
      const getTodoData: Todo[] = snapShot.docs.map((doc) => ({
        id: doc.data().id,
        text: doc.data().text,
        isEditing: doc.data().isEditing,
        status: doc.data().status,
      }))
      setTodos(getTodoData)
    })
  }, [])

  //編集ボタン押下時の動き
  const clickEdit = (id: string) => {
    //console.log(id)
    // Editボタン押下時に動的なパスを指定する
    router.push(`/edit/${id}`)

  }


  return (
    <div className="flex flex-col h-screen">
      {/* header */}
      <header className="flex justify-between items-center space-between  text-2xl font-bold bg-blue-500 text-white text-left p-2">
        <h1>Todo List</h1>
        <div className="flex">
        <Link href= "/add">
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
        
        {/* Statusの絞り込み */}
        <div>
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
        </div>
        {/* Statusの絞り込み */}

        {/* リスト */}
        <ul className='space-y-3'>
          {todos.map((todo) => (

            // リストの内容
            <li 
              key={todo.id}
              className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
              {todo.text}

            <div className="flex justify-right">
              {/* Stateの内容 */}
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
              {/* Stateの内容 */}
              
              {/* 編集ボタン */}
                  <button 
                    type="button" 
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    onClick={() => clickEdit(todo.id)}
                  >
                  Edit
                  </button>
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
        </ul>
        {/* リスト内容 */}

      </div>
    </div>
    
  )
}
