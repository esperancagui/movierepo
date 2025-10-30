import { FaSearch } from "react-icons/fa";


export const Search = () => {
    return (
        <div className="relative bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/20 py-2 px-4 rounded-full flex items-center mx-auto gap-2 w-full max-w-md overflow-hidden">
            <input
                type="text"
                placeholder="Search movies..."
                className="flex-1 min-w-0 w-full pr-12 border-none bg-transparent outline-none placeholder-opacity-0 sm:placeholder-opacity-100 text-neutral-50"
                aria-label="Search movies"
            />
            <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 shrink-0 p-1 text-neutral-200 hover:text-white"
                aria-label="Search"
            >
                <FaSearch />
            </button>
        </div>
    )
}
