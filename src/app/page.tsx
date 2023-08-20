'use client'

import AddTodo from "./AddTodo/page"
import Link from "next/link";
import { headerLayout } from "../data/top/data"
import { addButtonLayout } from "../data/top/data"
import { lineLayout } from "../data/top/data"
import { ulLayout } from "../data/top/data"
import { selectLayout } from "../data/top/data"
import { editButtonLayout } from "../data/top/data"
import { deleteButtonLayout } from "../data/top/data"
import { SelectEditLayout } from "../data/top/data"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'



// type Props = {
//   text: string
//   todos: string
// }

export default function Home() {


  const OPTION_VALUES = ["-Status-", "Waiting", "Doing", "Done"];

  const newTodo = [
    {
      id: "",
      todo: "",
      status: "waiting",
      isEditing: "false"
    }
  ]


//inputタグに入力できる

//inputタグに入力した内容をAddボタンでTodoリストに表示させる
  //Addボタン押下時にinputタグに入力したデータがTodoリストに表示される

//Deleteボタン押下時に対象のTodoリストが削除される
  //Deleteボタン押下時に大将のTodoリストのidと全てのTodoリストのidを照らし合わせて、一致したものだけ消す（）

const [text, setText] = useState<string>('')
const [todos, setTodos] = useState(newTodo);

const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
  setText(e.target.value);
}

const addTodos = () => {
  if (text === "") return;
  const subNewTodos = [...todos];
  subNewTodos.push(
    {
      id: uuidv4(),
      todo: text,
      status: "waiting",
      isEditing: "false"
    }
  );
  setTodos(subNewTodos);
  setText("");
};

const clickDelete = (id: string) => {
  const subNewTodos = [...todos];
  setTodos(subNewTodos.filter((todo) => todo.id !== id));
}


//Editボタン押下時に
  //下のEdit用のinputタグの中に編集内容を渡す(inputタグのvalueに編集内容を渡す)
  //対象のTodoリストを削除する
const clickEdit = (id: string, todo: string) => {
  const subNewTodos = [...todos];
  console.log(id)
  console.log(todo)
  setTodos(subNewTodos.filter((todo) => todo.id !== id));
}

const changeEditingText = (e: React.ChangeEvent<HTMLInputElement>) => {
  setText(e.target.value);
}



  return (
    <div className="flex flex-col h-screen">
      {/* header */}
      <header className={headerLayout}>
        <h1>Todo List</h1>
        <div className="flex">
          <select 
              id="hs-select-label" 
              className={selectLayout}
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
              className={addButtonLayout}>
              Add Todo
            </button>
          </Link>
        </div> 
      </header>
      {/* header */}

      {/* 中身 */}
      <div className={lineLayout}>

        <ul className='space-y-3'>
          {todos.map((todo) => (
            <li 
              key={todo.id}
              className={ulLayout}>
              {todo.todo}
            <div className={SelectEditLayout}>
              <select 
                id="hs-select-label" 
                className={selectLayout}
                defaultValue="-Status-">
                  {OPTION_VALUES.map((optionvalue) => (
                    <option key={optionvalue} value={optionvalue}>
                      {optionvalue}
                    </option>
                  ))}
              </select>
              
              {/* 編集ボタン */}
                {/* <Link href="EditTodo"> */}
                  <button 
                    type="button" 
                    className={editButtonLayout}
                    onClick={() => clickEdit(todo.id, todo.todo)}
                  >
                  Edit
                  </button>
                {/* </Link> */}
              {/* 編集ボタン */}
              
              {/* 削除ボタン */}
                <button 
                  type="button" 
                  className={deleteButtonLayout}
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

{/* 追加サイト */}
      
    <div>
      {/* 中身 */}
      <div className="flex mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2"
>
        <input 
          type="text" 
          className="flex justify-between w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
          placeholder='Todo'
          value={text}
          onChange={changeText}/>

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
            <button 
              type="button" 
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              onClick={addTodos}>
              Add
            </button> 
            </div>
      </div>
    </div>
  
      {/* 追加サイト */}

      {/* 編集サイト */}
      
    <div>
      {/* 中身 */}
      <div className="flex mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">
        <input 
          type="text" 
          value={todos.todo}
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
