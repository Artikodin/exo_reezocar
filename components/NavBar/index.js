import Link from "next/link";
import { useMediaQuery } from "react-responsive";

import { Container, Nav, StyledLink, BurgerButton } from "./styles";
import { ButtonLink } from "..";

const NavBar = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 803px)"
  });

  return (
    <Container>
      <Nav>
        <img src="/images/meilleure_reprise_logo.png" alt="meilleur reprise" />
        <div>
          {isMobile ? (
            <BurgerButton>
              <img src="/icons/burger.svg" alt="burger menu" />
            </BurgerButton>
          ) : (
            <>
              <Link href="/acheter">
                <StyledLink>Acheter</StyledLink>
              </Link>
              <Link href="/conseils">
                <StyledLink>Conseils</StyledLink>
              </Link>
              <Link href="/qui-sommes-nous">
                <StyledLink>Qui sommes-nous ?</StyledLink>
              </Link>
              <ButtonLink href="test">Vendre ma voiture</ButtonLink>
            </>
          )}
        </div>
      </Nav>
    </Container>
  );
};

export default NavBar;
