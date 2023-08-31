'use client'

import db from "@/lib/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Edit({ params }: { params: { id: string } }){

  //渡ってきたid
  console.log(params.id)
  //Saveボタン押下時にTop画面に遷移するためのもの
  const router = useRouter(); 

  type Todo = {
    id: string;
    text: string;
    // isEditing: boolean;
    status: string; 
  }

  // const OPTION_VALUES = ["-Status-", "Waiting", "Doing", "Done"];
  const [editTodo, setEditTodo] = useState<Todo>({
    id: params.id,
    text: "",
    // isEditing: false,
    status: "waiting"
  })
  
  useEffect(() => {
    (async() => {
      const docRef = doc(db, "data", params.id);
      const docSnap: any = await getDoc(docRef);
      //渡ってきたidを元にデータベースからデータを取り出してきた
      console.log(docSnap.data());
      //取り出したデータをsetEditTodoに設定する
      setEditTodo({
        id: params.id,
        text: docSnap.data().text,
        // isEditing: docSnap.data().isEditing,
        status: docSnap.data().status
      })
      console.log(editTodo)
    })()
  }, [])
  
  const clickEdit = (id: string, text: string, status: string) => {
    // データベースのデータを更新して編集
    setDoc(doc(db, "data", id), {
      id: id,
      text: text,
      // isEditing: false,
      status: status
    });
    router.push("/")
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

        {/* 囲い  */}
        <div className="flex mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">

          {/* 入力欄 */}
          <input 
            type="text" 
            value={editTodo.text}
            className="flex justify-between w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder='Todo'
            onChange={(e) => setEditTodo({...editTodo, text:e.target.value})}
          />
          {/* 入力欄 */}
        
          {/* stateの選択肢・ボタン */}
          <div className="flex">

            {/* Saveボタン  */}
            <button 
              type="button" 
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              onClick={() => clickEdit(editTodo.id, editTodo.text, editTodo.status)}
            >
              Save
            </button>
            {/* Saveボタン  */}

          </div>
          {/* stateの選択肢・ボタン */}

        </div>
        {/* 囲い  */}
      
      </div>       
      {/* 編集サイト */}

    </div>
  )
}