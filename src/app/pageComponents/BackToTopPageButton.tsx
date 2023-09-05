import Link from "next/link";

export default function BackToTopPageButton () {

  return (
    <div>
    {/* Back to Top Pageボタン */}
    <div className="flex justify-center">
        <Link href="/">
          <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            Back to Top Page
          </button>
          </Link>
      </div>
    {/* Back to Top Pageボタン */}
    </div>
  )
}