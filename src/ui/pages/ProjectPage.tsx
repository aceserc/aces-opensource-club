import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "@shadcn/ui/button";


export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600 dark:text-indigo-400">Our Projects</h1>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Project 1"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Open Source CMS</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A flexible content management system built with modern web technologies.</p>
                  <Button className="w-full">View Project</Button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Project 2"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">AI Study Assistant</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">An AI-powered tool to help students organize and optimize their study sessions.</p>
                  <Button className="w-full">View Project</Button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Project 3"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Eco Tracker</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A mobile app for tracking and reducing personal carbon footprint.</p>
                  <Button className="w-full">View Project</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50 dark:bg-indigo-900">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-indigo-600 dark:text-indigo-400">Get Involved</h2>
            <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-300 mb-8">
              We're always looking for passionate developers to contribute to our open-source projects. Join us and make a difference!
            </p>
            <Button size="lg">Start Contributing</Button>
          </div>
        </section>
      </main>
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
    </div>
  )
}