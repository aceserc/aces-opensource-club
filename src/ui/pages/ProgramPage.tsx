import { Card, CardContent } from "@shadcn/ui/card";
import { Link } from "react-router-dom";
import Header from "../components/Header";


export default function ProgramPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-800">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-green-700 dark:text-green-300">Programs & Events</h1>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-green-600 dark:text-green-400">Training Programs</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Engage in hands-on workshops, coding sprints, and mentorship programs designed to enhance your technical skills and knowledge of open-source development.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-green-600 dark:text-green-400">Competitions and Hackathons</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Participate in national-level hackathons, our annual Techfest, and various coding challenges to put your skills to the test and solve real-world problems.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-green-600 dark:text-green-400">Open Source Contributions</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get involved in ongoing open-source projects or initiate your own. We provide the platform and support to make meaningful contributions to the global open-source community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ACES Open Source Club. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}