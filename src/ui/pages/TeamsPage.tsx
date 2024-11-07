import Header from "../components/Header"
import { Card, CardContent } from "../shadcn/ui/card"
import { Button } from "../shadcn/ui/button"
import Footer from "../components/Footer"
import { Badge } from "../shadcn/ui/badge"
import { SocialLinks, TeamMember, teamMembers } from "../../data/teamData"
import { ICONS } from "../../assets/icons/icons"

function SocialIcon({ platform, url }: { platform: keyof SocialLinks; url: string }) {
  const iconMap = {
    github: ICONS.github,
    linkedin: ICONS.linkedin,
    twitter: ICONS.twitter,
  }
  const img = iconMap[platform]

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
    >
      <img src={img} alt={`${platform} icon`} className="w-8 h-8" /> {/* Increased size from w-5 h-5 to w-8 h-8 */}
      <span className="sr-only">{platform}</span>
    </a>
  )
}

export default function TeamPage() {
  return (
    <div className="flex font-bricolage-grotesque flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600 dark:text-indigo-400">Our Team</h1>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member: TeamMember, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-indigo-200 dark:border-indigo-700">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{member.name}</h2>
                    <Badge variant="secondary" className="mb-4">
                      {member.role}
                    </Badge>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{member.description}</p>
                    <div className="flex space-x-6 mt-auto"> {/* Increased space between icons */}
                      {member.socialLinks.github && (
                        <SocialIcon platform="github" url={member.socialLinks.github} />
                      )}
                      {member.socialLinks.linkedin && (
                        <SocialIcon platform="linkedin" url={member.socialLinks.linkedin} />
                      )}
                      {member.socialLinks.twitter && (
                        <SocialIcon platform="twitter" url={member.socialLinks.twitter} />
                      )}
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