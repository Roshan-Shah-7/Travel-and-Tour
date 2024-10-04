import styled from "styled-components";
import Blog_Card from "./Blog_Card";

function Blog() {
  return (
    <Main className="container">
      <section className="heading">
        <h2>Use Full Blogs</h2>
        <p>
          These blogs will be very helpful to you if you're new to travelling in
          Nepal or would like to learn more about it.
        </p>
      </section>
      <section className="blog_cards">
        <Blog_Card
          blog_image="/image/monk.webp"
          blog_heading="Top 10 Must-Visit Places in Nepal"
          blog_paragraph="Explore the best destinations in Nepal, including Kathmandu,
            Pokhara, Chitwan National Park, and more."
        />

        <Blog_Card
          blog_image="/image/travel.webp"
          blog_heading="Tips for First-Time Visitors"
          blog_paragraph="Offer practical advice, such as local customs, safety tips, and essential packing lists."
        />

        <Blog_Card
          blog_image="/image/sign.webp"
          blog_heading="A Guide to Nepal's Cultural Festivals"
          blog_paragraph="Highlight major festivals like Dashain, Tihar, Holi, and others, along with the traditions associated with them."
        />

        <Blog_Card
          blog_image="/image/trekking.webp"
          blog_heading="Best Trekking Trails in Nepal for Beginners"
          blog_paragraph="Describe popular trekking routes such as Poon Hill, Annapurna Base Camp, or Langtang for novice trekkers."
        />

        <Blog_Card
          blog_image="/image/respect.webp"
          blog_heading="How to Respect Local Customs and Traditions in Nepal"
          blog_paragraph="Share dos and don'ts when interacting with locals, visiting temples, or experiencing cultural activities."
        />

        <Blog_Card
          blog_image="/image/food.webp"
          blog_heading="10 Authentic Nepali Dishes You Must Try"
          blog_paragraph="List traditional Nepali foods like Dal Bhat, Momo, Sel Roti, and others, including where to try them."
        />
      </section>
    </Main>
  );
}

export default Blog;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  p {
    max-width: 650px;
  }

  .blog_cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;

    @media (min-width: 768px) {
      width: 42rem;
      gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      width: 63rem;
      grid-template-columns: repeat(3, 1fr);
      place-content: center;
    }
  }
`;
