import { Link } from "react-router";
import { GoStarFill } from "react-icons/go";
import { Search } from "./Search";
import { TbMovie } from "react-icons/tb";


export const Header = () => {
    return (
        <header className="sticky top-0 left-0 z-50 w-full flex flex-wrap items-center justify-between gap-2 p-5 bg-neutral-900/60 backdrop-blur-sm shadow-lg text-red-500">
            <Link to={"/"} className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-2 shrink-0">
                    <TbMovie className="text-3xl" />
                    <h1 className="text-2xl font-bold overflow-hidden truncate whitespace-nowrap">MovieRepo</h1>
                </div>
            </Link>

            {/* make the search grow/shrink and allow truncation */}
            <div className="flex-1 min-w-0 px-2">
                {/* ensure Search renders an input that can be full width (w-full) */}
                <Search />
            </div>

            <nav className="flex items-center gap-2">
                <Link to={""} className="shrink-0">
                    <GoStarFill className="text-2xl" />
                </Link>
            </nav>
        </header>
    )
}