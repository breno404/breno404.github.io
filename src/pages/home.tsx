import { Container, Grid, Stack } from "@mui/material";
import Header from "../components/header";

export default function Home({ params }: any) {
  return (
    <div className="min-h-screen w-full bg-[#000000]">
      <Header />
      <Container maxWidth="xl">
        <Stack className="pt-[8rem]">
          <section
            id="about_me"
            className="w-full h-[90vh] flex items-center bg-dark bg-cover bg-no-repeat bg-center flex-wrap"
          >
            <h3 className="text-white text-[8rem] sm:text-[10rem] md:text-[16rem]">
              About me
            </h3>
            <Grid container>
              <Grid xs={12} md={5} lg={6} item p={4}>
                <div className="flex flex-col justify-center items-center h-full text-white">
                  <p className="text-xl">
                    Minha carreira na TI começou em 2019, quando entrei como
                    estagiário numa consultoria de SAP. Desde o começo eu sabia
                    que a minha área era o desenvolvimento de softwares, sempre
                    estive estudando alguma linguagem, arquiteturas, seja em um
                    curso ou em um livro da faculdade. Gosto de testar
                    algoritmos e acompanhar os projetos abertos no GitHub.
                  </p>
                  <br />
                  <p className="text-xl">
                    A primeira vez que pude escrever códigos de forma efetiva
                    para uma empresa foi durante a pandemia, quando entrei na
                    NTL. Foi cativante trocar ideias com outros desenvolvedores
                    do mesmo projeto, as formas que tínhamos de alcançar o mesmo
                    resultado, a performance. Hoje me encontro na Connectcom,
                    continuo na programação, atuando nos sistemas internos dos
                    clientes, criando novas soluções e mantendo as que já estão
                    em funcionamento, sempre participando de reuniões, sempre
                    resolvendo demandas urgentes.
                  </p>
                </div>
              </Grid>
              <Grid xs={12} md={7} lg={6} item px={2}>
                <iframe
                  className="mx-auto lg:ml-auto w-full min-h-[35rem] "
                  src="https://www.youtube.com/embed/gset79KMmt0?si=MVDPl3pU124kIHq4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Grid>
            </Grid>
          </section>
          <section
            id="experience"
            className="w-full h-[90vh] flex items-center bg-dark bg-cover bg-no-repeat bg-center flex-wrap"
          >
            <h3 className="text-white text-[8rem] sm:text-[10rem] md:text-[16rem]">
              Experience
            </h3>
          </section>
          <section
            id="skills"
            className="w-full h-[90vh] flex items-center bg-dark bg-cover bg-no-repeat bg-center flex-wrap"
          >
            <h3 className="text-white text-[8rem] sm:text-[10rem] md:text-[16rem]">
              Skills
            </h3>
          </section>
        </Stack>
      </Container>
    </div>
  );
}
