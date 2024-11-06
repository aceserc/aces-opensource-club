import { Button } from '@shadcn/ui/button'
import { Link } from 'react-router-dom'

const FeaturedProject = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50 dark:bg-indigo-900">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600 dark:text-indigo-400">
          Featured Projects
        </h2>
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
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Open Source CMS</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A flexible content management system built with modern web technologies.</p>
              <Link to="/projects">
                <Button className="w-full">Learn More</Button>
              </Link>
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
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">AI Study Assistant</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">An AI-powered tool to help students organize and optimize their study sessions.</p>
              <Link to="/projects">
                <Button className="w-full">Learn More</Button>
              </Link>
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
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Eco Tracker</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A mobile app for tracking and reducing personal carbon footprint.</p>
              <Link to="/projects">
                <Button className="w-full">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProject