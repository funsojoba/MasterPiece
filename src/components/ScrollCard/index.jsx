import { useRef } from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ScrollContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari */
  }
  `;

const Card = styled.div`
    min-width: 250px;
    max-width: 250px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    padding: 10px;
    transition: all 100ms ease-in;
    overflow: hidden;
    position: relative;
    .best-man {
      position: absolute;
      top: 12px;
      right: 12px;
      padding: 5px;
      background: #0000006f;
      border-radius: 5px;
      color: #fff;
      font-family: "Montserrat", serif;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 5px 35px 30px rgba(0, 0, 0, 0.3);
    }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
`;

const Name = styled.h4`
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  font-family: "Montserrat", serif;
`;
const Title = styled.p`
  margin-top: 8px;
  font-size: 16px;
  font-family: "Montserrat", serif;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
  
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

const ScrollableCards = ({ cards }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 220; // Adjust based on card width + gap
      current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <ScrollContainer>
      <LeftArrow onClick={() => scroll("left")}>
        <FaChevronLeft />
      </LeftArrow>
      <CardsWrapper ref={scrollRef}>
        {cards.map((card, index) => (
          <Card key={index}>
            {card.is_best_man ? (
              <div className="best-man">Best Man</div>
            ) : ""}
            {card.is_best_woman ? (
              <div className="best-man">Chief Bride&apos;s Maid</div>
            ) : ""}
            <Image src={card.image} alt={card.title} />
            <Name>{card.name}</Name>
            <Title>{card.title}</Title>
            <small className="montserrat-regular">{card.social}</small>
          </Card>
        ))}
      </CardsWrapper>
      <RightArrow onClick={() => scroll("right")}>
        <FaChevronRight />
      </RightArrow>
    </ScrollContainer>
  );
};
// ScrollableCards.propTypes = {
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       social: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default ScrollableCards;
