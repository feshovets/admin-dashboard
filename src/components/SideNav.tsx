import { Link } from "react-router-dom";
import { navItems } from "../constants";
import { useState } from "react";
import { twMerge } from "tailwind-merge";


function SideNav() {
    const [hover, setHover] = useState<number>(0);
    const [active, setActive] = useState<number>(0);

    const onHover = (id: number) => { setHover(id) };

    return (
        <div className="relative flex flex-col min-h-full w-60 items-center">
            <div className="flex items-center min-h-16 font-extrabold text-xl">
                <span className="text-blue-500">Dash</span>
                <span>Stack</span>
            </div>
            <nav
                className="flex flex-col w-full grow border-r border-zinc-200 gap-4 py-4 z-10"
                onMouseLeave={() => onHover(active)}
            >
                <ul>
                    {navItems.main.map((item, id) => (
                        <li
                            key={"main-" + id}
                            className={
                                twMerge("flex h-10 items-center px-6 hover:text-white transition-colors delay-200",
                                    (active === id && active === hover && "text-white")
                                )}
                            onMouseOver={() => onHover(id)}
                        >
                            <Link to={item.href} className="font-semibold text-sm px-2">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <h3 className="text-xs font-bold uppercase text-zinc-500 px-8 pt-4 border-t border-zinc-200">
                    pages
                </h3>
                <ul>
                    {navItems.pages.map((item, id) => (
                        <li
                            key={"pages-" + id}
                            className={
                                twMerge("flex h-10 items-center px-6 hover:text-white transition-colors delay-200",
                                    (active === (id + 6) && active === hover && "text-white")
                                )}
                            onMouseOver={() => onHover(id + 6)}
                        >
                            <Link to={item.href} className="font-semibold text-sm px-2">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col border-t border-zinc-200 pt-4 text-sm font-semibold">
                    <button
                        key={"settings"}
                        onMouseOver={() => onHover(14)}
                        className={
                            twMerge("flex h-10 items-center px-8 hover:text-white transition-colors delay-200",
                                (active === 14 && active === hover && "text-white")
                            )}
                    >
                        Settings
                    </button>
                    <button
                        key={"log-out"}
                        onMouseOver={() => onHover(15)}
                        className={
                            twMerge("flex h-10 items-center px-8 hover:text-white transition-colors delay-200",
                                (active === 15 && active === hover && "text-white")
                            )}
                    >
                        Log Out
                    </button>
                </div>
            </nav>
            <div className="absolute w-48 h-10 rounded-md bg-blue-500 transition-all duration-500 px-2" style={{ top: calcTop({ index: hover }) }}>
            </div>
            <div className="absolute w-1.5 h-10 rounded-e-md bg-blue-500 transition-all duration-500 left-0" style={{ top: calcTop({ index: active }) }}>
            </div>
        </div>
    )
}

const calcTop = ({
    min = 80,
    step = 40,
    gap = [{ index: 6, size: 64 }, { index: 14, size: 32 }],
    index
}: {
    min?: number,
    step?: number,
    gap?: { index: number, size: number }[],
    index: number
}) => {
    return min + step * index + (index < gap[0].index ? 0 : gap[0].size) + (index < gap[1].index ? 0 : gap[1].size);
}

export default SideNav;