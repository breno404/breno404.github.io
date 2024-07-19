import { useEffect } from "react";
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

  & nav {
    display: flex;
    gap: 2rem;
  }
`;

export default function Header() {
  const changeLogo = () => {
    const el = document.getElementById("logo");
    if (window.innerWidth < 640 && el) {
      if (el.innerHTML != "BM") el.innerHTML = "BM";
    } else if (el) {
      if (el.innerHTML != "Breno Macedo") el.innerHTML = "Breno Macedo";
    }
  };

  useEffect(() => {
    changeLogo();
    window.addEventListener("resize", changeLogo);

    return () => {
      window.removeEventListener("resize", changeLogo);
    };
  }, []);

  return (
    <StyledHeader>
      <div className="container flex justify-between items-center mx-auto">
        <section id="logo" className="mx-10 sm:mx-0">
          Breno Macedo
        </section>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#competencias">Competências</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </StyledHeader>
  );
}
