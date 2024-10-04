import styled from "styled-components";

function Service_Card(props) {
  const { service_icon, service_heading, service_paragraph } = props;
  return (
    <Main>
      <section className="card">
        {service_icon}
        <h3>{service_heading}</h3>
        <p>{service_paragraph}</p>
      </section>
    </Main>
  );
}

export default Service_Card;

const Main = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid var(--secondary-color);
    max-width: 250px;
    gap: 0.5rem;
    padding: 1rem 0.5rem;
    background-color: var(--white-color);
    position: relative;

    svg {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }

    &::after {
      content: "";
      filter: blur(2px);
      width: 100%;
      height: 100%;
      position: absolute;
      background: var(--primary-color);
      border-radius: 10px;
      top: 0;
      left: 0;
      z-index: -1;
      animation: rotateBG 2.5s linear infinite;
    }

    @keyframes rotateBG {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(-5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    &::before {
      content: "";
      filter: blur(2px);
      width: 100%;
      height: 100%;
      position: absolute;
      background: var(--secondary-color);
      border-radius: 10px;
      top: 0;
      left: 0;
      z-index: -1;
      animation: rotateB 2.5s linear infinite;
    }

    @keyframes rotateB {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    @media (min-width: 768px) {
      height: 25vh;
    }
  }
`;
