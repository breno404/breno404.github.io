import { styled } from "styled-components";

const StyledSkills = styled.section`
  width: 100%;
  heigth: 500px;

  background: #000;
  background: linear-gradient(to top, #000 0%, #252525 100%);
  color: #fff;

  & .skills {
    width: 100%;
  }

  & .skills .skills-title {
    text-align: center;
    font-weight: 600;
    font-size: 3.2rem;
    padding-top: 1rem;
    margin-bottom: 2rem;
  }

  & .skills .skills-subtitle {
    font-weight: 600;
    font-size: 2.2rem;
    padding-top: 1rem;
    margin-bottom: 1rem;
  }

  & .skills .top-skills {
    font-size: 1.6rem;
    padding-top: 1rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
    justify-items: center;
    align-items: center;
  }

  @media (min-width: 640px) {
    & .skills .top-skills {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    & .skills .top-skills {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    & .skills .top-skills {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }

  & .skills .top-skills .skills-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 10rem;
  }

  & .skills .top-skills .skills-box img {
    width: auto;
    height: auto;
    max-height: calc(100% - 2.4rem);
    max-width: calc(100% - 2.4rem);
  }

  & .skills .top-skills .skills-box p {
    text-align: center;
    flex-shrink: 0;
  }

  & .skills .others-skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    margin-bottom: 2rem;
  }

  & .skills .others-skills p {
    cursor: default;
    font-size: 1.4rem;
    background-color: #000;
    border: 2px solid #ddd;
    color: #fff;
    border-radius: 40px;
    padding: 0 1rem;
  }
`;

export default function Skills() {
  return (
    <StyledSkills>
      <div
        id="competencias"
        className="container flex flex-col justify-center items-center mx-auto"
      >
        <section className="skills">
          <h2 className="skills-title">Competências</h2>
          <div className="top-skills">
            <div className="skills-box">
              <img src="/assets/img/brands/node.png" alt="node-brand" />
              <p>Node</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/ts.png" alt="ts-brand" />
              <p>Typescript</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/react.png" alt="react-brand" />
              <p>React</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/next.png" alt="next-brand" />
              <p>Next</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/spring.png" alt="spring-brand" />
              <p>Spring Boot</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/rabbitmq.png" alt="rabbitmq-brand" />
              <p>Rabbit MQ</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/docker.png" alt="docker-brand" />
              <p>Docker</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/python.png" alt="python-brand" />
              <p>Python</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/mysql.png" alt="mysql-brand" />
              <p>My SQL</p>
            </div>
            <div className="skills-box">
              <img
                src="/assets/img/brands/postgresql.png"
                alt="postgresql-brand"
              />
              <p>Postgre SQL</p>
            </div>
            <div className="skills-box">
              <img
                src="/assets/img/brands/sql-server.png"
                alt="sql-server-brand"
              />
              <p>SQL Server</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/azuread.png" alt="azuread-brand" />
              <p>Azure AD</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/graphql.png" alt="graphql-brand" />
              <p>GraphQL</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/apache.png" alt="apache-brand" />
              <p>Apache Server</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/nginx.png" alt="nginx-brand" />
              <p>Nginx</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/mongodb.png" alt="mongodb-brand" />
              <p>Mongo DB</p>
            </div>
            <div className="skills-box">
              <img src="/assets/img/brands/pbi.png" alt="pbi-brand" />
              <p>Power BI</p>
            </div>
          </div>
          <h2 className="skills-subtitle">Outras competências</h2>
          <div className="others-skills">
            <p>PHP</p>
            <p>Laravel</p>
            <p>Git</p>
            <p>Scrum</p>
            <p>AWS S3</p>
            <p>Jest</p>
            <p>Express</p>
            <p>Nest</p>
            <p>Rest</p>
            <p>SOLID</p>
            <p>Clean Code</p>
            <p>Angular</p>
            <p>Vue</p>
            <p>Micro serviços</p>
            <p>Design Patterns</p>
            <p>Inglês</p>
          </div>
        </section>
      </div>
    </StyledSkills>
  );
}
