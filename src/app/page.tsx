import About from "./About";
import Experiences from "./Experiences";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />   

      <main className="container mt-16">
        <About />
        <Experiences />
        <Portfolio />
        <Contact />    
      </main>
    </>
  )
}
