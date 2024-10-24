import { useEffect, useRef, useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import {
  MdFavorite,
  MdHeadphones,
  MdHome,
  MdMenu,
  MdSearch,
} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const SideBarRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (SideBarRef.current && isExpanded) {
      SideBarRef.current.focus()
    }
  }, [isExpanded])

  // toggle function
  const tf = function <T>(activeStyle: T, defaultStyle: T): T {
    return isExpanded ? activeStyle : defaultStyle
  }

  const toggleMenu = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="md:w-5">
      <button
        onClick={toggleMenu}
        className="fixed z-30 right-10 bottom-[100px] md:hidden p-0.5 h-12 w-12 text-4xl text-black rounded-full duration-200 ease-in-out bg-gradient-to-r from-indigo-500 to-purple-500 hover:animate-heartbeat active:text-opacity-60 transition-all"
      >
        {tf(
          <FaMinusCircle className="w-full h-full" />,
          <FaPlusCircle className="w-full h-full" />
        )}
      </button>

      <aside
        className={`z-40 h-fit my-1 mr-1 text-white bg-zinc-950 rounded-tr-lg rounded-br-lg w-10 overflow-hidden group  ${tf('w-44 fixed', 'hidden md:flex fixed ')} transition-all ease-in-out duration-300`}
      >
        <nav
          ref={SideBarRef}
          className={`w-10 ${tf('w-40', '')} transition-all ease-in-out duration-300 p-2`}
        >
          {/*  */}
          <h3 className="flex items-center text-2xl mb-3">
            <button
              className="text-2xl hover:text-purple-500"
              onClick={toggleMenu}
            >
              {isExpanded ? <MdHeadphones /> : <MdMenu />}
            </button>
            <span
              className={`text-transparent underline ${tf('text-white', '')}`}
            >
              Spofify
            </span>
          </h3>
          {/*  */}
          <div className="flex flex-col gap-2">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-1 text-lg hover:text-indigo-500 ${isActive ? 'text-indigo-500' : ''}`
              }
              to="/"
            >
              <span className="text-2xl">
                <MdHome />
              </span>
              <span className={`text-transparent ${tf('text-white', '')}`}>
                Home
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-1 text-lg hover:text-purple-500 ${isActive ? 'text-purple-500' : ''}`
              }
              to="/posts"
            >
              <span className="text-2xl">
                <MdSearch />
              </span>
              <span className={`text-transparent ${tf('text-white', '')}`}>
                Search
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-1 text-lg hover:text-purple-500 ${isActive ? 'text-purple-500' : ''}`
              }
              to="Favorites"
            >
              <span className="text-2xl">
                <MdFavorite />
              </span>
              <span className={`text-transparent ${tf('text-white', '')}`}>
                Favorites
              </span>
            </NavLink>
          </div>
        </nav>
      </aside>
    </div>
  )
}

export default SideBar
