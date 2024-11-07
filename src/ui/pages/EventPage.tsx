
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import { Card, CardContent } from "@shadcn/ui/card"
import { Badge } from "@shadcn/ui/badge"
import { Button } from "@shadcn/ui/button"

interface Event {
  title: string
  date: string
  time: string
  location: string
  description: string
  type: "workshop" | "hackathon" | "meetup"
}

const upcomingEvents: Event[] = [
  {
    title: "Introduction to Open Source",
    date: "2024-03-15",
    time: "14:00 - 16:00",
    location: "Computer Science Building, Room 101",
    description: "Learn the basics of open source development and how to contribute to projects.",
    type: "workshop"
  },
  {
    title: "ACES Hackathon 2024",
    date: "2024-04-20",
    time: "09:00 - 21:00",
    location: "University Main Hall",
    description: "Join us for a day-long hackathon focused on creating innovative open source solutions.",
    type: "hackathon"
  },
  {
    title: "Git and GitHub Mastery",
    date: "2024-05-05",
    time: "15:00 - 17:00",
    location: "Online (Zoom)",
    description: "Dive deep into version control with Git and collaboration using GitHub.",
    type: "workshop"
  }
]

const pastEvents: Event[] = [
  {
    title: "Open Source in Industry",
    date: "2024-02-10",
    time: "13:00 - 15:00",
    location: "Engineering Auditorium",
    description: "Industry experts shared their experiences with open source in professional settings.",
    type: "meetup"
  },
  {
    title: "Contribute-a-thon",
    date: "2024-01-25",
    time: "10:00 - 18:00",
    location: "Computer Lab 3",
    description: "A day dedicated to contributing to popular open source projects as a group.",
    type: "hackathon"
  }
]

function EventCard({ event }: { event: Event }) {
  return (
    <Card className="bg-white dark:bg-gray-800 font-bricolage-grotesque rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{event.title}</h3>
          <Badge variant={event.type === "workshop" ? "default" : event.type === "hackathon" ? "destructive" : "secondary"}>
            {event.type}
          </Badge>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
        <div className="flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2" />
            {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-4 h-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center">
            <MapPinIcon className="w-4 h-4 mr-2" />
            {event.location}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600 dark:text-indigo-400">Events</h1>
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">Upcoming Events</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {upcomingEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">Past Events</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {pastEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50 dark:bg-indigo-900">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-indigo-600 dark:text-indigo-400">Stay Updated</h2>
            <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-300 mb-8">
              Don't miss out on our upcoming events! Subscribe to our newsletter to get the latest updates and event announcements.
            </p>
            <Button size="lg">Subscribe to Newsletter</Button>
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