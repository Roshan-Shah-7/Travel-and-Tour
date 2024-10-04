import React from "react";
import styled from "styled-components";
import Feature_Travel_Card from "./Feature_Travel_Card";

function Population_Destination() {
  return (
    <Main className="container">
      <Heading>
        <button>Explore</button>
        <h2>Our Featured Tour</h2>
      </Heading>
      <Cards>
        <Feature_Travel_Card
          image_location="/image/Card_Images/KTM.webp"
          location_name="Patan Darbar Square"
          rating_number="4.3(20)"
          package_name="Kathmandu Vally"
          price_of_location="22,000"
        />
        <Feature_Travel_Card
          image_location="/image/Card_Images/chitwan.webp"
          location_name="National Park"
          rating_number="3.9(15)"
          package_name="Chitwan"
          price_of_location="11,111"
        />
        <Feature_Travel_Card
          image_location="/image/Card_Images/lumbini.webp"
          location_name="Lumbani Tempel"
          rating_number="4.1(25)"
          package_name="Lumbani"
          price_of_location="27,999"
        />
        <Feature_Travel_Card
          image_location="/image/Card_Images/janakpur.webp"
          location_name="Janakpur Temple"
          rating_number="4.0(10)"
          package_name="Janakpur"
          price_of_location="15,000"
        />
        <Feature_Travel_Card
          image_location="/image/Card_Images/pokhara.webp"
          location_name="Pokhara View Point"
          rating_number="4.1(22)"
          package_name="Pokhara"
          price_of_location="33,333"
        />
        <Feature_Travel_Card
          image_location="/image/Card_Images/chitlang.webp"
          location_name="Chitlang"
          rating_number="4.2(22)"
          package_name="Chitlang"
          price_of_location="$$$"
        />
      </Cards>
    </Main>
  );
}

export default Population_Destination;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  button {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border-radius: 20px;
    padding: 0.6rem 0.5rem;
    box-shadow: -4px 4px 4px var(--primary-color);
    text-shadow: 2px 3px 5px var(--white-color);
    font-style: italic;
    font-size: 0.9rem;
  }

  h2 {
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 3rem;
    }
    button {
      font-size: 1.1rem;
    }
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
