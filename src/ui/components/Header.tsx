import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-800 shadow-md">
      <Link className="flex items-center justify-center" to="/">
        <img
          src="/logo.webp"
          alt="ACES Logo"

          className="h-8 w-8"
        />
        <span className="ml-2 text-xl font-bold text-indigo-600 dark:text-indigo-400">ACES</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" to="/about">
          About
        </Link>
        <Link className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" to="/projects">
          Projects
        </Link>
        <Link className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" to="/events">
          Events
        </Link>
        <Link className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" to="/team">
          Team
        </Link>
        <Link className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header