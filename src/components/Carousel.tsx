import React from 'react';
import './Carousel.scss';
// import { transform } from 'cypress/types/lodash';

type CarouselProp = {
  images: string[];
  itemWidth: number;
  frameSize: number;
};

const Carousel: React.FC<CarouselProp> = ({ images, itemWidth, frameSize }) => (
  <div className="Carousel">
    <div
      className="Carousel__conteiner"
      style={{ width: frameSize * itemWidth }}
    >
      <ul className="Carousel__list">
        {images.map((image, index) => (
          <li className="Carousel__list__item" key={image}>
            <img
              src={image}
              alt={`image ${index + 1}`}
              style={{ width: itemWidth }}
              className="Carousel__list__image"
            />
          </li>
        ))}
      </ul>
    </div>

    <div className="Carousel__btn__conteiner">
      <button
        type="button"
        className="Carousel__btn Carousel__btn--prev"
        onClick={() => {
          const carouselPrev = document.querySelector(
            '.Carousel__list',
          ) as HTMLElement;

          if (carouselPrev) {
            carouselPrev.style.transform = 'translateX(260px)';
          }
        }}
      >
        Prev
      </button>

      <button
        type="button"
        className="Carousel__btn Carousel__btn--next"
        data-cy="next"
        onClick={() => {
          const carouselNext = document.querySelector(
            '.Carousel__list',
          ) as HTMLElement;

          if (carouselNext) {
            carouselNext.style.transform = 'translateX(-260px)';
          }
        }}
      >
        Next
      </button>
    </div>
  </div>
);

export default Carousel;
