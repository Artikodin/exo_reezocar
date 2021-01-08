import { forwardRef } from "react";

import { Container, Paragraphe, ProfilUser, Image, Name, Job } from "./styles";

// eslint-disable-next-line react/prop-types
const ClientReview = ({ review, imgUrl, name, job }, ref) => {
  return (
    <Container ref={ref}>
      <Paragraphe>{review}</Paragraphe>
      <ProfilUser>
        <Image src={imgUrl} alt="user profil" />
        <Name>{name}</Name>
        <Job>{job}</Job>
      </ProfilUser>
    </Container>
  );
};

export default forwardRef(ClientReview);
