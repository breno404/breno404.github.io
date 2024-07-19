import { styled } from "styled-components";

const StyledPresentation = styled.section`
  width: 100%;
  margin-top: 54px;
  padding-top: 80px;

  background-color: #000;
  color: #fff;

  & .resume {
    max-width: 510px;
  }

  & .resume .resume-title {
    font-weight: 600;
    font-size: 3.2rem;
    padding-top: 1rem;
    margin-bottom: 2rem;
  }

  & .resume .resume-content {
    font-size: 1.6rem;
    padding-top: 1rem;
    margin-bottom: 4rem;
  }

  & .resume-button {
    font-weight: 600;
    font-size: 1.6rem;
    color: #000;
    padding: 0 1rem;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 40px;
    margin-bottom: 2rem;
  }

  & .profile {
    width: 400px;
  }

  & .profile .profile-image {
    max-width: 100%;
    max-height: 450px;
  }
`;

export default function Presentation() {
  const donwloadCV = () => {
    window.open("assets/pdf/Currículo - Breno Macedo.pdf", "_blank");
  };

  return (
    <StyledPresentation>
      <div className="container flex justify-between items-center mx-auto">
        <section className="resume">
          <h2 className="resume-title">Olá, seja bem-vindo ao meu github.io</h2>
          <p className="resume-content ">
            Eu sou um desenvolvedor web com foco em React para o Front-end e
            Node|Spring Boot para o Back-end, também possuo conhecimentos que
            fogem a esse nicho, trabalho com desenvolvimento desde 2021, sou
            formado em Ciência da Computação pela UNICARIOCA desde 2023 e me
            especializei mais na área através de cursos extracurriculares.
          </p>
          <div className="w-full flex justify-center items-center">
            <button className="resume-button" onClick={donwloadCV}>
              Baixar currículo
            </button>
          </div>
        </section>
        <section className="profile">
          {/* <img
            className="profile-image"
            src="/assets/img/01.png"
            alt="profile-image-01"
          /> */}
        </section>
      </div>
    </StyledPresentation>
  );
}
