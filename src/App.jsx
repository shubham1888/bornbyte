import Footer from "./Footer"
import About from "./sections/About"
import Clients from "./sections/Clients"
import Contact from "./sections/Contact"
import WorkExperience from "./sections/Experience"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"

const App = () => {
  return(
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
