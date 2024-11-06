import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 ACES Open Source Club. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" to="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" to="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer