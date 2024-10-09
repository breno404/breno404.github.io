import { styled } from "styled-components";

const StyledProjects = styled.section`
  width: 100%;
  heigth: 500px;

  background: #000;
  color: #fff;

  & .projects {
    width: 100%;
    padding: 2rem;
    padding-top: 1rem;
    margin-bottom: 2rem;
  }

  & .projects .projects-title {
    text-align: center;
    font-weight: 600;
    font-size: 3.2rem;
    padding-top: 1rem;
    margin-bottom: 2rem;
  }

  & .projects .projects-card-area {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    justify-items: center;
    align-items: start;
  }

  @media (min-width: 768px) {
    & .projects .projects-card-area {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1280px) {
    & .projects .projects-card-area {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  & .projects .project-card .project-card-title {
    font-weight: 600;
    font-size: 2.2rem;
    padding-top: 1rem;
    margin-bottom: 1rem;
  }

  & .projects .project-card .project-card-description {
    font-size: 1.6rem;
    padding-top: 0.5rem;
    margin-bottom: 1rem;
  }
`;

export default function Projects() {
  return (
    <StyledProjects>
      <div
        id="projetos"
        className="container flex flex-col justify-center items-center mx-auto"
      >
        <section className="projects">
          <h2 className="projects-title">Projetos</h2>
          <div className="projects-card-area">
            <div className="project-card">
              {/* <img src="/assets/img/brands/node.png" alt="node-brand" /> */}
              <h3 className="project-card-title">SPE</h3>
              <p className="project-card-description">
                O SPE, é uma ferramenta de controle de pontos de função
                integrada ao AzureAD. Ele calcula automaticamente os pontos de
                função conforme as regras de negócio estabelecidas, facilitando
                o acompanhamento dos gastos de melhorias no projeto core da
                empresa, permitindo gerenciamento mais preciso e eficiente dos
                recursos, promovendo maior controle e transparência no
                desenvolvimento de software.
              </p>
            </div>

            <div className="project-card">
              {/* <img src="/assets/img/brands/spring.png" alt="spring-brand" /> */}
              <h3 className="project-card-title">Pré-salzinho</h3>
              <p className="project-card-description">
                Este projeto consiste em um chatbot para o Microsoft Teams
                integrado ao GLPI. O objetivo é facilitar a criação e o
                acompanhamento de chamados de suporte, tornando o processo mais
                ágil e eficiente. O bot interage com os usuários, registra
                solicitações e fornece atualizações em tempo real. "Pré
                Salzinho" melhora a comunicação e a gestão de chamados dentro
                das organizações.
              </p>
            </div>

            <div className="project-card">
              {/* <img src="/assets/img/brands/pbi.png" alt="pbi-brand"className="project-card-thumbnail" /> */}
              <h3 className="project-card-title">SGCA</h3>
              <p className="project-card-description">
                A solução completa para gerenciar contratos de forma eficiente e
                organizada. O SGCA permite o registro, acompanhamento e
                renovação automática de contratos, além de oferecer alertas para
                prazos importantes e relatórios detalhados. Com uma interface
                intuitiva e funcionalidades avançadas, o SGCA otimiza a gestão
                administrativa, garantindo conformidade e reduzindo riscos.
              </p>
            </div>
            <div className="project-card">
              {/* <img src="/assets/img/brands/spring.png" alt="spring-brand" /> */}
              <h3 className="project-card-title">
                Consulta de Listas de gastos
              </h3>
              <p className="project-card-description">
                A aplicação foi projetada para consultar remessas e seus gastos
                de forma eficiente, mesmo com grandes volumes de dados. A
                aplicação utiliza React para a interface, Springboot para a
                consulta dos dados, RabbitMQ para armazenar as consultas
                temporariamente, outro microsserviço em Node que processa os
                dados e gera um arquivo CSV. Este arquivo é então salvo no
                Minio, facilitando o acesso e o download. Esta arquitetura
                garante desempenho e escalabilidade na gestão de grandes
                conjuntos de dados.
              </p>
            </div>
            <div className="project-card">
              {/* <img src="/assets/img/brands/spring.png" alt="spring-brand" /> */}
              <h3 className="project-card-title">
                Script de extração e formatação de dados
              </h3>
              <p className="project-card-description">
                Uma solução desenvolvida para suprir a extração dos dados de
                produção do MongoDB de forma automática e prepará-los para uso
                em relatórios. Este script automatiza a coleta de informações
                relevantes, aplica as transformações necessárias e formata os
                dados conforme os requisitos dos relatórios. Com ele, as equipes
                podem gerar relatórios precisos e atualizados de maneira rápida
                e eficiente, melhorando a tomada de decisões baseada em dados.
              </p>
            </div>
            <div className="project-card">
              {/* <img src="/assets/img/brands/spring.png" alt="spring-brand" /> */}
              <h3 className="project-card-title">
                Script de conversão - Tabela de preço brent e aliquota para Json
              </h3>
              <p className="project-card-description">
                Este script automatiza o processo de conversão, garantindo que
                as informações sejam rapidamente disponibilizadas em um formato
                estruturado e adequado para integração com outras aplicações.
                Com isso, a análise e utilização dos dados tornam-se mais
                eficientes e práticas.
              </p>
            </div>
            <div className="project-card">
              {/* <img src="/assets/img/brands/spring.png" alt="spring-brand" /> */}
              <h3 className="project-card-title">TCC</h3>
              <p className="project-card-description">
                Meu TCC consiste em um CRUD desenvolvido com React, GraphQL e
                Express. A aplicação permite criar, ler, atualizar e deletar
                dados de maneira eficiente e moderna. React foi utilizado para a
                construção da interface, GraphQL para a comunicação com a API e
                Express para o backend. Este projeto demonstra a integração
                dessas tecnologias para desenvolver aplicações web robustas e
                escaláveis.
              </p>
              <strong className="text-[1.6rem]">
                Afim de uma melhor apresentação este projeto está em
                atualização, para acompanhar as versões das bibliotecas,
                preencher falhas de seguranças e demais questões.
              </strong>
            </div>
            <div className="project-card">
              {/* <img src="/assets/img/brands/spring.png" alt="spring-brand" /> */}
              <h3 className="project-card-title">Nutri Marcelle Domingues</h3>
              <p className="project-card-description">
                Desenvolvi a página da Nutricionista Marcelle Domingues com o
                objetivo de divulgar seus serviços. O site destaca suas
                especialidades, fornece mais informações sobre a profissional e
                apresenta seu consultório. A plataforma foi projetada para ser
                intuitiva e informativa. A página possui SEO para um melhor
                ranqueamento no google, foi construída em react e tailwind css.
              </p>
              <span className="text-[1.6rem] font-semibold">Link: </span>
              <a
                className="text-[1.6rem] hover:text-sky-500 hover:underline"
                href="https://www.nutrimarcelledomingues.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                Nutri Marcelle Domingues
              </a>
            </div>
          </div>
        </section>
      </div>
    </StyledProjects>
  );
}
