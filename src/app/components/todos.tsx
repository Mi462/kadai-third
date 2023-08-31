
type Props = {
  selectStatus: string
  todos: any
  onChangeTodoStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeSubTodoStatus: (id: string, text: string, e: React.ChangeEvent<HTMLSelectElement>) => void;
  clickEdit: (id: string) => void;
  clickDelete: (id: string) => void;
}

export default function Todos({ selectStatus, onChangeTodoStatus, todos, onChangeSubTodoStatus, clickEdit, clickDelete }: Props) {

  return(
    <div>
      <div className="mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">
        
        {/* Statusの絞り込み（上） */}
        <div>
          <select 
            className="py-3 px-4 pr-9 block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            name="status"
            value={selectStatus}
            onChange={(e) => onChangeTodoStatus(e)}
            >
              <option value="waiting">Waiting</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
          </select>
        </div>
        {/* Statusの絞り込み（上） */}

        {/* リスト */}
        <ul className='space-y-3'>
          {todos.map((todo: any) => {
            // Statusの絞り込み（上）の内容（"Waiting", "Doing", "Done"）によって、表示されるtodosが変わる
            if ( selectStatus === "Doing" && todo.status !== "Doing") return
            if ( selectStatus === "Done" && todo.status !== "Done") return

            return (
            // リストの内容
            <li 
              key={todo.id}
              className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
              {todo.text}

            <div className="flex justify-right">
              {/* Statusの内容 */}
              <select
                className="py-3 px-4 pr-9 block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                value={todo.text}
                onChange={(e) => onChangeSubTodoStatus(todo.id, todo.text, e)}
                >
                <option value="waiting">Waiting</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              {/* Statusの内容 */}
              
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
          )})}
        </ul>
        {/* リスト内容 */}

      </div>
    </div>
  )
}