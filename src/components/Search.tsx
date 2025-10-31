import { FaSearch } from "react-icons/fa";
import { useState } from "react";


export const Search = ({ onSearch }: { onSearch: (query: string) => void }) => {
    const [localQuery, setLocalQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(localQuery);
    };

    return (
        <form onSubmit={handleSubmit} className="relative bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/20 py-2 px-4 flex items-center mx-auto gap-2 w-full max-w-md overflow-hidden">
            <input
                type="text"
                placeholder="Search movies..."
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                className="flex-1 min-w-0 w-full pr-12 border-none bg-transparent outline-none placeholder-opacity-0 sm:placeholder-opacity-100 text-neutral-50"
                aria-label="Search movies"
            />
            <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 shrink-0 p-1 text-neutral-200 hover:text-white"
                aria-label="Search"
            >
                <FaSearch />
            </button>
        </form>
    );
};
