import Link from "next/link";

export default function Header () {

  return (
    <div>
    {/* header */}
    <header className="flex justify-between items-center space-between  text-2xl font-bold bg-blue-500 text-white text-left p-2">
    <h1>Todo List</h1>
    <div className="flex">
    <Link href= "/add">
        <button 
          type="button" 
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
          Add Todo
        </button>
      </Link>
    </div> 
  </header>
  {/* header */}
  </div>

  )
}