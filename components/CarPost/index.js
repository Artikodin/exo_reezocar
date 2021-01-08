import { forwardRef } from "react";

import {
  Container,
  Img,
  Details,
  Title,
  Descritpion,
  City,
  Price
} from "./styles.js";

// eslint-disable-next-line react/prop-types
const CarPost = ({ title, description, city, price, img }, ref) => {
  return (
    <Container ref={ref}>
      <Img src={img} alt="voiture" />
      <Details>
        <Title>{title}</Title>
        <Descritpion>{description}</Descritpion>
        <City>{city}</City>
        <Price>{price}</Price>
      </Details>
    </Container>
  );
};

export default forwardRef(CarPost);
