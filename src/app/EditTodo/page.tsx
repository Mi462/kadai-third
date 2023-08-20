'use client'

import Link from "next/link";
import { useState } from "react";
import { headerLayout } from "../../data/edit/data"
import { addButtonLayout } from "../../data/edit/data"
import { lineLayout } from "../../data/edit/data"
import { inputLayout } from "../../data/edit/data"
import { selectLayout } from "../../data/edit/data"
import { saveButtonLayout } from "../../data/edit/data"


export default function EditTodo(){
  return(
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
          placeholder='Todo'/>
        <select 
          id="hs-select-label" 
          className={selectLayout}>
            <option selected>-Status-</option>
              <option>Waiting</option>
              <option>Doing</option>
              <option>Done</option>
        </select>  
        <button type="button" className={saveButtonLayout}>
          Save
        </button>  
      </div>
      {/* 中身 */}
      
    </div>
  )
}