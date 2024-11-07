import FeaturedProject from "./ui/components/FeaturedProject"
import Footer from "./ui/components/Footer"
import Header from "./ui/components/Header"
import HeroSection from "./ui/components/HeroSection"
import Join from "./ui/components/Join"
import UpcomingEvents from "./ui/components/UpcomingEvents"

const App = () => {
  return (
    <div className="flex font-bricolage-grotesque flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProject />
        <UpcomingEvents />
        <Join />
      </main>
      <Footer />
    </div>
  )
}

export default App