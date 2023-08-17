

export default function page() {
  return (
    <div className="mx-auto my-3 w-9/12 bg-whiteborder rounded-lg border-gray-300 border-2 text-center p-2">
        <input 
          type="text" 
          className="flex justify-between border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
          placeholder='Todo'/>

          <div className="flex justify-content flex-end">
            <select 
              id="hs-select-label" 
              className="py-3 px-4 pr-9 block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <option selected>-Status-</option>
                <option>Waiting</option>
                <option>Doing</option>
                <option>Done</option>
            </select>
          
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border      border-transparent font-semibold text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              +
            </button>
          
          </div>
      </div>
  )
}


