import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  background-color: #000;
  color: #fff;

  & #logo {
    font-size: 3.6rem;
  }

  & a {
    font-size: 1.6rem;
    padding: 1rem;
  }
`;

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [logoText, setLogoText] = useState("Breno Macedo");
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    const newLogo = window.innerWidth < 640 ? "BM" : "Breno Macedo";
    setLogoText(newLogo);
  };

  useEffect(() => {
    handleResize(); // Set logo on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileMenuIsOpen) {
        mobileMenuRef.current.classList.remove("max-h-0");
        mobileMenuRef.current.classList.add("max-h-[auto]");
      } else {
        mobileMenuRef.current.classList.remove("max-h-[auto]");
        mobileMenuRef.current.classList.add("max-h-0");
      }
    }
  }, [mobileMenuIsOpen]);

  return (
    <StyledHeader>
      <div className="container flex justify-between items-center mx-auto">
        <section id="logo" className="mx-10 sm:mx-0">
          {logoText}
        </section>
        <nav className="hidden md:flex gap-[2rem]">
          <a href="#sobre">Sobre</a>
          <a href="#competencias">Competências</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <button
          className="block md:hidden w-[40px] aspect-square bg-white mr-[1.5rem] rounded-lg active:bg-gray-200"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg className="max-h-full">
            <line
              x1="10"
              y1="13"
              x2="30"
              y2="13"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="10"
              y1="20"
              x2="30"
              y2="20"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="10"
              y1="27"
              x2="30"
              y2="27"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div
          className="block md:hidden absolute top-[54px] w-full left-0 bg-white shadow-[inset_0px_10px_20px_#8c8c8c] text-black transition-all duration-300 max-h-0 overflow-hidden"
          ref={mobileMenuRef}
        >
          <a className="block p-2" href="#sobre">
            Sobre
          </a>
          <a className="block p-2" href="#competencias">
            Competências
          </a>
          <a className="block p-2" href="#projetos">
            Projetos
          </a>
          <a className="block p-2" href="#contato">
            Contato
          </a>
        </div>
      </div>
    </StyledHeader>
  );
}
