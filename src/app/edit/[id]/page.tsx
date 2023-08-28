'use client'

import db from "@/lib/firebase/firebase";
import { collection, query, where, doc, getDoc, setDoc, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Edit({ params }: { params: { id: string } }){

  console.log(params.id)

  const OPTION_VALUES = ["-Status-", "Waiting", "Doing", "Done"];

  type Todo = {
    id: string;
    text: string;
    isEditing: boolean;
    status: string; 
  }


  // doc(db, "users").where("id", "==", "caa3820f-27fc-4ad2-af97-d0d5f373825a")
  //   .get()
  //   .then((querySnapshot: any) => {
  //     querySnapshot.forEach( (doc: any) => {
  //       console.log(doc.id, " => ", doc.data());
  //     });
  //   })
  //   .catch( (error: any) => {
  //     console.log(`データの取得に失敗しました (${error})`);
  //   });

  const [editTodos, setEditTodos] = useState<Todo>({
    id: params.id,
    text: "",
    isEditing: false,
    status: "waiting" 
  });

  const citiesRef = collection(db, "cities");

   setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
   setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
   setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
   setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
   setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

    const docRef = doc(db, "cities", "SF");
    const docSnap = getDoc(docRef);

    console.log("Document data:", docSnap.data());

  // const docRef = doc(db, "data", "caa3820f-27fc-4ad2-af97-d0d5f373825a");
  // const docSnap: any = getDoc(docRef);
  // console.log(docSnap.data());


  //Editボタン押下時に
  //下のEdit用のinputタグの中に編集内容を渡す(inputタグのvalueに編集内容を渡す)
  //対象のTodoリストを削除する

  const clickEdit = (id: string) => {
    console.log(id)
    // データベースのデータを更新して編集
    // setDoc(doc(db, "data", id), {
    //   id: id,
    //   text: editTodos.text,
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
            //value={editTodos.text}
            className="flex justify-between w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder='Todo'
            onChange={(e) => setEditTodos({...editTodos, text: e.target.value})}/>
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
              onClick={() => clickEdit(editTodos.id)}>
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