
import Header from "../components/Header"
import { Card, CardContent } from "@shadcn/ui/card"
import { Button } from "@shadcn/ui/button"
import Footer from "../components/Footer"
import { Badge } from "@shadcn/ui/badge"

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Johnson",
    role: "President",
    image: "/placeholder.svg?height=400&width=400",
    description: "Alex leads our club with vision and dedication, ensuring we meet our goals."
  },
  {
    name: "Samantha Lee",
    role: "Vice President",
    image: "/placeholder.svg?height=400&width=400",
    description: "Samantha oversees our projects and helps coordinate our various initiatives."
  },
  {
    name: "Michael Chen",
    role: "Treasurer",
    image: "/placeholder.svg?height=400&width=400",
    description: "Michael manages our finances and ensures we have the resources for our activities."
  },
  {
    name: "Emily Rodriguez",
    role: "Events Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    description: "Emily brings creativity and energy to our event planning and execution."
  },
  {
    name: "David Okonkwo",
    role: "Outreach Officer",
    image: "/placeholder.svg?height=400&width=400",
    description: "David builds strong relationships with our community partners and stakeholders."
  },
  {
    name: "Lisa Tanaka",
    role: "Technology Lead",
    image: "/placeholder.svg?height=400&width=400",
    description: "Lisa keeps us at the forefront of technological advancements in our field."
  }
]

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600 dark:text-indigo-400">Our Team</h1>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{member.name}</h2>
                      <Badge variant="secondary" className="mb-4">
                        {member.role}
                      </Badge>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{member.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50 dark:bg-indigo-900">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-indigo-600 dark:text-indigo-400">Join Our Team</h2>
            <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-300 mb-8">
              We're always looking for passionate individuals to join our team and contribute to our open-source projects. If you're interested in making a difference, we'd love to hear from you!
            </p>
            <Button size="lg">Apply Now</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}