import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Hero() {
  return (
    <Main className="container">
      <Hero__Image_Slider>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/image/slider/image_1.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/slider/image_2.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/slider/image_3.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/slider/image_4.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/slider/image_5.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/slider/image_7.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/slider/image_8.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/slider/image_9.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/slider/image_10.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/Card_Images/KTM.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/Card_Images/chitlang.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/Card_Images/janakpur.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/Card_Images/lumbini.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image/Card_Images/pokhara.webp"
              alt="Astrapi Travel and Tour"
            />
          </SwiperSlide>
        </Swiper>
      </Hero__Image_Slider>
      <Hero_Video>
        <video src="/video/hero.mp4" autoPlay muted loop></video>
      </Hero_Video>
      <Hero_Image>
        <img src="/nepal.webp" alt="" />
      </Hero_Image>
      <Hero_Text>
        <h2>
          Discover the Wonders of <span>Nepal</span> - Embark on Unforgettable
          Adventures with Us!
        </h2>
        <p>
          From the Himalayas to vibrant local culture, experience the best of
          Nepal.
        </p>
        <button>Explore Our Tours</button>
      </Hero_Text>
    </Main>
  );
}

export default Hero;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 0 1rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 0;
  }

  @media (min-width: 1024px) {
    height: 75vh;
    flex-direction: row-reverse;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const Hero_Text = styled.div`
  padding: 0 0.5rem;
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  h2 {
    font-size: 1.7rem;
  }

  p {
    font-size: 1.1rem;
  }

  span {
    text-transform: uppercase;
    color: #dc143c;
    font-style: italic;
  }
  button {
    background: var(--primary-color);
    color: var(--white-color);
    animation: updown 3s linear infinite;
    transition: all 0.3s linear;

    @keyframes updown {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(5px);
        scale: 1.1;
      }
      100% {
        transform: translateY(0px);
      }
    }
  }
  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 1440px) {
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const Hero__Image_Slider = styled.div`
  img {
    max-width: 100%;
    height: 54vh;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    width: 20rem;
    img {
      border-radius: none;
      box-shadow: none;
    }
  }
  @media (min-width: 1024px) {
    margin-top: 6rem;
    img {
      height: 45vh;
    }
    .mySwiper {
      border-radius: 2rem;
      width: 12rem;
    }
  }
  @media (min-width: 1440px) {
    img {
      height: 50vh;
    }
    .mySwiper {
      width: 18rem;
    }
  }

  .mySwiper {
    padding-bottom: 0.2rem;
  }
`;

const Hero_Video = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    video {
      width: 12rem;
      height: 45vh;
      object-fit: cover;
      border-radius: 2rem;
    }
  }
  @media (min-width: 1440px) {
    video {
      width: 18rem;
      height: 50vh;
    }
  }
`;

const Hero_Image = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    margin-top: 6rem;
    img {
      width: 12rem;
      height: 45vh;
      object-fit: cover;
      border-radius: 2rem;
    }
  }
  @media (min-width: 1440px) {
    img {
      width: 18rem;
      height: 50vh;
    }
  }
`;
