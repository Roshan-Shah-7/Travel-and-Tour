import styled from "styled-components";
import Service_Card from "./Service_Card";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

function Services() {
  return (
    <Main className="container">
      <section className="heading">
        <h2>Our Services</h2>
        <p>Our company provides these services:</p>
      </section>
      <section className="service_card_wrapper">
        <Service_Card
          service_icon={<MdOutlineTravelExplore />}
          service_heading="Travel Consultation"
          service_paragraph="Advising clients on travel destinations, attractions, activities, and
          the best time to visit."
        />
        <Service_Card
          service_icon={<MdOutlineFlightTakeoff />}
          service_heading="Flight and Transportation Booking"
          service_paragraph="Booking domestic and international flights, trains, buses, and other modes of transportation."
        />
        <Service_Card
          service_icon={<TiDocumentText />}
          service_heading="Visa and Documentation Assistance"
          service_paragraph="Assisting with visa applications, travel permits, and other required travel documentation."
        />
        <Service_Card
          service_icon={<FaCar />}
          service_heading="Car Rentals and Transfers"
          service_paragraph="Arranging car rentals, airport transfers, and local transportation services."
        />
        <Service_Card
          service_icon={<IoPerson />}
          service_heading="Guided Tours and Local Guides"
          service_paragraph="Providing knowledgeable tour guides to ensure clients have an informative and enjoyable experience at their destination."
        />
        <Service_Card
          service_icon={<RiCustomerService2Fill />}
          service_heading="24/7 Customer Support"
          service_paragraph="Providing support during the trip for any changes, cancellations, or emergencies."
        />
      </section>
    </Main>
  );
}

export default Services;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  .service_card_wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    @media (min-width: 768px) {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
