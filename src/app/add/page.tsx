'use client'

import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { setDoc, doc } from "firebase/firestore";
import db from "../../lib/firebase/firebase"
import { useRouter } from "next/navigation";

export default function AddTodo() {

  //inputタグに入力できる

  //inputタグに入力した内容をAddボタン押下時にTop画面のTodoリストに表示させる
    //Addボタン押下時にTop画面に遷移
    //inputタグに入力した内容をpropsを利用して値を渡す
    //mapメソッド内容を表示させる

    const router = useRouter(); 
    // console.log(router.pathname)

    type Todo = {
      id: string;
      text: string;
      isEditing: boolean;
      status: string; 
    }

    const [addTodo, setAddTodo] = useState<Todo>({
    id:  uuidv4(),
    text: "",
    isEditing: false,
    status: "waiting"
  })

    //firebaseにデータを追加する
    const sendTodos = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
     if(addTodo.text === "") return;
      setDoc(doc(db, "data", addTodo.id), {
        id: addTodo.id,
        text: addTodo.text,
        isEditing: false,
        status: "waiting",
      });
      setAddTodo({
        id: uuidv4(),
        text: "",
        isEditing: false,
        status: "waiting"
      })
      
      router.push("/")
  };

  return (
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
      
    {/* 追加サイト */}
    
      {/* 中身 */}
      <div className="flex mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">
        <input 
          type="text" 
          className="flex justify-between w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
          placeholder='Todo'
          value={addTodo.text}
          onChange={(e) => setAddTodo({...addTodo, text:e.target.value})}/>
          <button 
              type="button" 
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              onClick={sendTodos}
            >
              Add
          </button>  
      </div>
      {/* 追加サイト */}
    </div>
  
  )
}
