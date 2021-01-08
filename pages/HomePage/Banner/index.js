import Link from "next/link";
import { useMediaQuery } from "react-responsive";

import { Form, ButtonLink } from "../../../components";
import {
  Container,
  Title,
  Paragraphe,
  Wrapper,
  Strong,
  StyledLink
} from "./styles";

const Banner = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 803px)"
  });

  return (
    <Container>
      <Wrapper>
        <Title>
          Concessionnaire en ligne spécialiste de{" "}
          <Strong color="blue">l'achat</Strong> et la{" "}
          <Strong color="green">vente</Strong> de voitures d'occasion
        </Title>
        <Paragraphe>
          Trouver une petite annonce de annonce de voiture d'occasion près de
          chez vous ou partout en France :
        </Paragraphe>
        <Form direction={isMobile ? "column" : "row"}>
          <Form.Input
            name="car"
            title="Quel véhicule recherchez vous ?"
            placeholder="Ex: Peugeot 308 Gti"
          />
          <Form.Input
            name="adress"
            title="Ville, département"
            icon={<img src="/icons/gps.svg" alt="" />}
            placeholder="Ex: Paris (75)"
            annexe={
              !isMobile && (
                <Link href="/autour-de-moi">
                  <StyledLink>Autour de moi</StyledLink>
                </Link>
              )
            }
          />
          <ButtonLink size="big" type="submit">
            Rechercher
          </ButtonLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Banner;
