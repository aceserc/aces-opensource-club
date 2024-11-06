
import { Button } from '@shadcn/ui/button'
import { Link } from 'react-router-dom'

const Join = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50 dark:bg-indigo-900">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-indigo-600 dark:text-indigo-400">Join Our Community</h2>
        <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-300 mb-8">
          Be part of a vibrant community of developers, contribute to exciting projects, and enhance your skills in open-source development.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
            Get Started Today
          </Button>
        </Link>
      </div>
    </section>

  )
}

export default Join