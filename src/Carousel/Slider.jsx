import { useEffect, useState } from "react";

export const Slider = ({ slides }) => {
  const [slider, setSlider] = useState(0);
  const slideLength = slides.length;

  /* useEffect(() => {
    setInterval(() => {
      setSlider(slider === 0 ? slideLength - 1 : slider - 1);
    }, 6000);
  }); */

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setSlider(slider === slideLength - 1 ? 0 : slider + 1);
  };

  const prevSlide = () => {
    setSlider(slider === 0 ? slideLength - 1 : slider - 1);
  };

  return (
    <>
      <section className="slider">
        <button className="right-arrow" onClick={nextSlide}>
          Next
        </button>
        <button className="left-arrow" onClick={prevSlide}>
          Prev
        </button>
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={index === slider ? "slide active" : "slide"}
            >
              {index === slider && (
                <img
                  key={index}
                  className="image"
                  src={slide.image}
                  alt={index}
                ></img>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};
