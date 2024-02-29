import "@/global.css";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function App() {
  return (
    <div className="w-full max-w-full min-h-screen bg-[#222]">
      <header className="w-full sticky flex justify-center items-center h-[20rem] bg-[#76767628] border-b">
        <nav className="flex items-center text-[2rem] gap-[6rem] text-white">
          <a href="/">Início</a>
          <a href="/#formacao">Formação</a>
          <a href="/#skills">Skills</a>
          <a href="/#experiencia">Experiência</a>
          <a href="/#projetos">Projetos</a>
          <a href="/#contato">Contato</a>
        </nav>
      </header>
      <main className="flex flex-col basis-full">
        <article className="flex justify-center items-center">
          <section className="flex justify-between items-center">
            <aside className="text-white max-w-[60rem] ">
              <h4 className="text-[2rem]">Hello World!</h4>
              <h3 className="text-[2.4rem]">I'm Breno Macedo</h3>
              <p className="text-[1.6rem]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </aside>
            <AspectRatio ratio={4 / 3} className="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4_SCEqLdUtFXEykCiyUM1B41rwGgIdiCIQ&usqp=CAU"
                alt="person"
                className="rounded-md object-cover w-auto relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              />
            </AspectRatio>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
