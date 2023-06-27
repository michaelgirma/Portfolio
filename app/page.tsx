import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Skills from "./Components/Skills"
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

export default function Home() {
  return (
    <html>
      <body>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </body>
    </html>  
  )
}
