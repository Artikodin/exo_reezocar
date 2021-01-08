import {
  Wrapper,
  Title,
  Container,
  Paragraph,
  GreenEm,
  BoldEm,
  Select,
  Header,
  ChipContainer,
  Center
} from "./styles";
import { cars, chiplists } from "./utils";
import { Carousel, CarPost, ChipList, ButtonLink } from "../../../components";

const Advertisement = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>
            Les dernières annonces <GreenEm>publiées</GreenEm>
          </Title>
          <Paragraph>
            Ils nous font confiance, nous avons <BoldEm>inspecté</BoldEm> leur
            véhicule avant de vous proposer ces annonces, acheter une voiture
            d'occasion à un particulier en <BoldEm>toute sécurité</BoldEm>{" "}
            contrôle technique OK, carnet d'entretient et révisions à jour,
            Mécanique et carrosserie en bon état
          </Paragraph>
          <Select>
            Les modèles les plus vus{" "}
            <img src="/icons/arrow-down.svg" alt="arrow down" />
          </Select>
        </Header>
      </Wrapper>
      <Carousel>
        {cars.map(car => (
          <CarPost key={car.title} {...car} />
        ))}
      </Carousel>
      <Wrapper>
        <ChipContainer>
          {chiplists.map(({ title, chips }) => (
            <ChipList key={title} title={title}>
              {chips.map(chip => (
                <ChipList.Chip key={chip}>{chip}</ChipList.Chip>
              ))}
            </ChipList>
          ))}
        </ChipContainer>
        <Center>
          <ButtonLink size="large" color="blue">
            Voir toutes les annonces
          </ButtonLink>
        </Center>
      </Wrapper>
    </Container>
  );
};

export default Advertisement;
