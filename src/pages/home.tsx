import About from "../components/about";
import Header from "../components/header";
import Presentation from "../components/presentation";
import Projects from "../components/projects";
import Skills from "../components/skills";

export default function Home({ params }: any) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Presentation />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
