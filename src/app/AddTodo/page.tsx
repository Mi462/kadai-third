'use client'

import Link from "next/link";
import { useState } from "react";
import { headerLayout } from "../../data/add/data"
import { addButtonLayout } from "../../data/add/data"
import { lineLayout } from "../../data/add/data"
import { inputLayout } from "../../data/add/data"
import { selectLayout } from "../../data/add/data"
import { plusButtonLayout } from "../../data/add/data"


export default function AddTodo() {

//inputタグに入力できる

//inputタグに入力した内容を+ボタンでTodoリストに表示させる
  //+ボタン押下時にinputタグに入力したデータがHomeに渡されて表示される

const [text, setText] = useState<string>('')
const [todos, setTodos] = useState<string[]>([]);

const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
  setText(e.target.value);
  console.log(text)
}

const addTodos = () => {
  const newTodos = [...todos];
  newTodos.push(text);
  setTodos(newTodos);
  setText("");
};

  return (
    <div>
      {/* header */}
      <header className={headerLayout}>
        <Link href="/">
          <h1>Todo List</h1>
        </Link>
        <Link href= "/AddTodo">
            <button 
              type="button" 
              className={addButtonLayout}>
              Add Todo
            </button>
          </Link>
      </header>
      {/* header */}

      {/* 中身 */}
      <div className={lineLayout}>
        <input 
          type="text" 
          className={inputLayout}
          placeholder='Todo'
          value={text}
          onChange={changeText}/>

          
            <select 
              id="hs-select-label" 
              className={selectLayout}>
              <option selected>-Status-</option>
                <option>Waiting</option>
                <option>Doing</option>
                <option>Done</option>
            </select>
            <button 
              type="button" 
              className={plusButtonLayout}
              onClick={addTodos}>
              Add
            </button> 
          

      </div>
    </div>
  )
}


