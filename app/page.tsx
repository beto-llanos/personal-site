import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Now } from "@/components/Now";
import { Projects } from "@/components/Projects";
import { ClientWork } from "@/components/ClientWork";
import { Notes } from "@/components/Notes";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Goal } from "@/components/Goal";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Background />
      <Nav />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Now />
        <Projects />
        <ClientWork />
        <Notes />
        <Skills />
        <Experience />
        <Goal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
