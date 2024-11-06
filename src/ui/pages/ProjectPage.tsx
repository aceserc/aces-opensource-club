import Header from "../components/Header";
import { Button } from "@shadcn/ui/button";
import { projects } from "../../data/projectData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600 dark:text-indigo-400">
              Our Projects
            </h1>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.altText}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{project.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <Button className="w-full">
                      <Link to={project.githubLink}>
                        {project.buttonText}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50 dark:bg-indigo-900">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-indigo-600 dark:text-indigo-400">
              Get Involved
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-300 mb-8">
              We're always looking for passionate developers to contribute to our open-source projects. Join us and make a difference!
            </p>
            <Button size="lg">Start Contributing</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
