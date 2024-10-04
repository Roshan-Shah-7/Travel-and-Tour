import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Feature_Travel_Card(props) {
  const {
    image_location,
    location_name,
    rating_number,
    package_name,
    price_of_location,
  } = props;
  return (
    <Card_Wrapper>
      <Image_Text>
        <Image>
          <img src={image_location} alt={`${location_name} image`} />
        </Image>
        <Text>
          <h3>Featured</h3>
        </Text>
      </Image_Text>
      <Text_Wrapper>
        <Rating_Wrapper>
          <Location>
            <FaLocationDot />
            <h4>{location_name}</h4>
          </Location>
          <Rating>
            <FaStar />
            <h4>{rating_number}</h4>
          </Rating>
        </Rating_Wrapper>
        <Name>
          <h2>{package_name}</h2>
        </Name>
        <Price>
          <Price_Per_Person>
            <h4>
              RS. {price_of_location}/<span>per person</span>
            </h4>
          </Price_Per_Person>
          <button aria-label={`View more detail about ${package_name}`}>
            Detail <FaArrowRight />
          </button>
        </Price>
      </Text_Wrapper>
    </Card_Wrapper>
  );
}

export default Feature_Travel_Card;

const Card_Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  box-shadow: 5px 3px 6px var(--primary-color);
  border-radius: 10px;
  padding-bottom: 0.5rem;
  max-width: 30rem;
  svg {
    width: max-content;
    color: var(--secondary-color);
  }
  h4 {
    font-size: 1rem;
    font-style: italic;
  }
`;

const Image_Text = styled.div`
  position: relative;
`;

const Image = styled.div`
  img {
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    img {
      width: 100%;
      height: 17rem;
      object-fit: cover;
    }
  }
  @media (min-width: 1024px) {
    width: 19rem;
    img {
      height: 15rem;
    }
  }
  
  @media (min-width: 1440px) {
    width: 28rem;
    img{
      height: 18rem;
    }
  }
`;

const Text = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 0.3rem 0.6rem;
  border: 1px solid var(--primary-color);
  border-radius: 5px 5px 0 0;
  text-shadow: 2px 3px 5px var(--white-color);
`;

const Text_Wrapper = styled.div`
  padding: 0.7rem 0.6rem;
`;

const Rating_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

const Name = styled.div`
  h2 {
    font-size: 1.7rem;
    text-decoration: underline;
    margin: 0.5rem 0;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: var(--primary-color);
    color: var(--white-color);
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    box-shadow: 4px 4px 2px var(--secondary-color);
    transition: all 0.3s ease-in-out;
    svg {
      font-size: 0.6rem;
      color: var(--white-color);
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      box-shadow: none;
      svg {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  }
`;

const Price_Per_Person = styled.div`
  color: var(--primary-color);
  span {
    color: grey;
  }
`;
