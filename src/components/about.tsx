import { styled } from "styled-components";

const StyledAbout = styled.section`
  width: 100%;
  heigth: 500px;

  background: #000;
  background: linear-gradient(to bottom, #000 0%, #252525 100%);
  color: #fff;

  & .info {
    max-width: 800px;
  }

  & .info .info-title {
    font-weight: 600;
    font-size: 3.2rem;
    padding-top: 1rem;
    margin-bottom: 2rem;
  }

  & .info .info-content {
    font-size: 1.6rem;
    padding-top: 1rem;
    margin-bottom: 4rem;
  }

  & .info-button {
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

export default function About() {
  return (
    <StyledAbout>
      <div
        id="sobre"
        className="container flex justify-between flex-wrap items-center mx-auto p-[2rem]"
      >
        <section className="profile"></section>
        <section className="info">
          <h2 className="info-title">Sobre mim</h2>
          <p className="info-content">
            Minha carreira na TI começou em 2019, comecei estagiando como
            consultor SAP Basis e depois durante a pandemia comecei a trabalhar
            como desenvolvedor em uma empresa que tinha como linguagem core o
            PHP e o SQL Server como banco de dados, durante todos esses anos eu
            estudei arquiteturas, boas práticas, testes e paradigmas, tutorava
            meus colegas de profissão e mantinha minhas demandas em ordem.
            Atualmente trabalho como terceiro para uma empresa do setor de Óleo
            e Gás, desenvolvo sistemas e rotinas internas com MFA pela Azure,
            administro a ferramenta de chamados, acompanho o desenvolvimento do
            sistema core da empresa mantido pela Stefanini e crio relatórios em
            Power BI.
          </p>
        </section>
      </div>
    </StyledAbout>
  );
}
