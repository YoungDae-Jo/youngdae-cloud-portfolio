import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import ProjectSummary from "@/components/ProjectSummary";
import ProjectDetail from "@/components/ProjectDetail";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <ProjectSummary />
      <ProjectDetail />
      <Contact />
      <Footer />
    </main>
  );
}
