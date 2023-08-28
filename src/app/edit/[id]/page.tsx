'use client'

import db from "@/lib/firebase/firebase";
import { collection, query, where, doc, getDoc, setDoc, getDocs } from "firebase/firestore";
import Link from "next/link";
//import { useEffect, useState } from "react";

export default async function Edit({ params }: { params: { id: string } }){

  //渡ってきたid
  console.log(params.id)

  const OPTION_VALUES = ["-Status-", "Waiting", "Doing", "Done"];

  type Todo = {
    id: string;
    text: string;
    isEditing: boolean;
    status: string; 
  }

  // const docRef = doc(db, "data", "caa3820f-27fc-4ad2-af97-d0d5f373825a");
  // const docSnap: any = await getDoc(docRef);
  // console.log(docSnap.data());

  const docRef = doc(db, "data", params.id);
  const docSnap: any = await getDoc(docRef);
  //渡ってきたidを元にデータベースからデータを取り出してきた
  console.log(docSnap.data());

  //Editボタン押下時に
  //下のEdit用のinputタグの中に編集内容を渡す(inputタグのvalueに編集内容を渡す)
  //対象のTodoリストを削除する

  //console.log(id)
  //渡されたidを利用して、データベースからデータを取ってくる
    // const docRef = doc(db, "data", id);
    // const docSnap: any = await getDoc(docRef);
    //データベースから取ってきたデータ
    // console.log(docSnap.data());

  const clickEdit = (id: string) => {
    // データベースのデータを更新して編集
    // setDoc(doc(db, "data", id), {
    //   id: id,
    //   text: defaultValue,
    //   isEditing: false,
    //   status: "waiting",
    // });
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
            defaultValue={docSnap.data().text}
            className="flex justify-between w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder='Todo'
          />
          {/* 入力欄 */}
        
          {/* stateの選択肢・ボタン */}
          <div className="flex">

            {/* stateの選択肢 */}
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
            {/* stateの選択肢 */}

            {/* Saveボタン  */}
            <button 
              type="button" 
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              onClick={() => clickEdit(params.id)}
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