// components/ImageSlider.js
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 540px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  padding: 12px 16px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  ${({ position }) => position === "left" && `left: 15px;`}
  ${({ position }) => position === "right" && `right: 15px;`}
`;


const ImageSlider = ({images}) =>{

  const [index, setIndex] = useState(0);

  const getRandomIndex = useCallback(() => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === index);
    return randomIndex;
  }, [index, images.length]);

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-random fade effect every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(getRandomIndex());
    }, 4000);

    return () => clearInterval(timer);
  }, [getRandomIndex]);

  return (
    <SliderContainer>
      <AnimatePresence mode="wait">
        <Image
          key={images[index]}
          src={images[index]}
          alt="slider-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <Button onClick={goToPrev} position="left">
        ❮
      </Button>
      <Button onClick={goToNext} position="right">
        ❯
      </Button>
    </SliderContainer>
  );
}


// import PropTypes from "prop-types";

// ImageSlider.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default ImageSlider