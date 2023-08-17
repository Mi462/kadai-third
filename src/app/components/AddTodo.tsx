

export default function AddTodo() {
  return (
    <div>
      <input 
          type="text" 
          className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
          placeholder='Todoを入力'/>
        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200">ADD</button>
    </div>
  )
}


