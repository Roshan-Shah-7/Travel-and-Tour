import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

function Blog_Card(props) {
  const { blog_image, blog_heading, blog_paragraph } = props;

  return (
    <Main>
      <section className="blog_card">
        <img
          src={blog_image}
          alt={`${blog_heading} - Astrapi Travel and Tour`}
        />
        <section className="text">
          <h3>{blog_heading}</h3>
          <p>{blog_paragraph}</p>
          <button>
            Read More <FaArrowRight />
          </button>
        </section>
      </section>
    </Main>
  );
}

export default Blog_Card;

const Main = styled.div`
  .blog_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 4px 4px 15px var(--black-color);

    img {
      width: 100%;
      height: 14rem;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }

    h3 {
      font-size: 1.5rem;
    }

    button {
      background-color: var(--primary-color);
      color: var(--white-color);
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: max-content;
        font-size: 0.8rem;
        animation: forback 3s linear infinite;
      }

      @keyframes forback {
        0% {
          transform: translateX(0);
        }

        50% {
          transform: translateX(6px);
        }

        100% {
          transform: translateX(0);
        }
      }
    }
  }

  .text {
    background-color: #e4e1e1;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 0 0 10px 10px;
    height: 17rem;
  }
  p {
    font-size: 1.2rem;
  }

  @media (min-width: 1440px) {
    .blog_card {
      width: 24rem;
    }
    .text {
      height: 15rem;
    }
  }
`;
