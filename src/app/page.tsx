'use client'

import db from "../lib/firebase/firebase";
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/header";
import Todos from "./components/todos";

type Todo = {
  id: string;
  text: string;
  status: string; 
}

export default function Home() {

  //データベースで扱う情報
  const [todos, setTodos] = useState<Todo[]>([]);
  //ページ遷移用
  const router = useRouter();
  //上のプルダウンの状態
  const [ selectStatus, setSelectStatus ] = useState("waiting");

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
        status: doc.data().status
      }))
      setTodos(getTodoData)
    })
  }, [])

  //１つ１つのStatusの内容を
  const onChangeTodoStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectStatus(e.target.value)
  }

  //一つ一つのStatusの内容を変更できる
  const onChangeSubTodoStatus = (id: string, text: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    //i該当するidのデータのstatusを更新する
    setDoc(doc(db, "data", id), {
      id: id,
      text: text,
      status: e.target.value,
    });
    const stateChangeTodo = todos.map((todo) => {
      if(todo.id === id){
        return { id:todo.id, text:todo.text, status: e.target.value}
      } else {
        return todo
      }
    })
    setTodos(stateChangeTodo)
  }

  //編集ボタン押下時の動き
  const clickEdit = (id: string) => {
    // Editボタン押下時に動的なパスを指定する
    router.push(`/edit/${id}`)
  }

  return (
    <div className="flex flex-col h-screen">

      {/* header */}
        <Header />
      {/* header */}

      {/* 中身 */}
        <Todos 
          selectStatus={selectStatus}
          onChangeTodoStatus={onChangeTodoStatus}
          todos={todos}
          onChangeSubTodoStatus={onChangeSubTodoStatus}
          clickEdit={clickEdit}
          clickDelete={clickDelete}
        />
      {/* 中身 */}  

    </div>
  )
}
