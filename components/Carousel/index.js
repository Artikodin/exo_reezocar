import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import { useEffect, useRef, useState, Children, cloneElement } from "react";
import { Wrapper, Container, Slider, SlideButton } from "./styles";
import { getPadding, debounce } from "./helpers";

const Carousel = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 803px)"
  });
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [padding, setPadding] = useState(0);

  const containerRef = useRef();
  const sliderRef = useRef();
  const itemRef = useRef();

  const debouncedHandleResize = debounce(() => {
    setPadding(getPadding(document.body.clientWidth, 1200));
  }, 0);

  useEffect(() => {
    setWrapperHeight(sliderRef.current.offsetHeight);
    setPadding(getPadding(document.body.clientWidth, 1200));

    addEventListener("resize", debouncedHandleResize);

    return () => {
      removeEventListener("resize", debouncedHandleResize);
    };
  }, [wrapperHeight]);

  const handleNext = () => {
    containerRef.current.scrollLeft =
      containerRef.current.scrollLeft + itemRef.current.offsetWidth;
  };

  return (
    <Wrapper wrapperHeight={wrapperHeight}>
      <Container ref={containerRef}>
        <Slider ref={sliderRef} padding={padding}>
          {Children.map(children, child =>
            cloneElement(child, { ref: itemRef })
          )}
        </Slider>
      </Container>
      {!isMobile && (
        <SlideButton
          padding={padding}
          wrapperHeight={wrapperHeight}
          onClick={handleNext}
        >
          <img src="/icons/arrow.svg" alt="arrow" />
        </SlideButton>
      )}
    </Wrapper>
  );
};

Carousel.propTypes = {
  children: PropTypes.node
};

Carousel.defaultProps = {
  children: null
};

export default Carousel;
