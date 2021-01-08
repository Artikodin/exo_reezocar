import { Wrapper, Title, Container } from "./styles";
import { users } from "./utils";
import { ClientReview, Carousel } from "../../../components";

const Review = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Avis clients</Title>
      </Wrapper>
      <Carousel>
        {users.map(user => (
          <ClientReview key={user.name} {...user} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Review;
