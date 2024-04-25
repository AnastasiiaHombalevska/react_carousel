import React, { useState } from 'react';
import '../src/reset/reset.scss';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images?: string[];
}

const App: React.FC<State> = () => {
  const [images] = useState([
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/5.png',
    './img/6.png',
    './img/7.png',
    './img/8.png',
    './img/9.png',
    './img/10.png',
  ]);
  const [itemWidth, setiItemWidth] = useState(130);
  // const [step, setStep] = useState(3);
  const [frameSize, setFrameSize] = useState(3);
  // const [animationDuration, setAnimationDuration] = useState(1000);
  // const [infinite] = useState(false);

  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <h1 data-cy="title" className="App__title">
        Carousel with {images.length} images
      </h1>
      <form action="" className="App__form">
        <label htmlFor="itemWidth">Enter image size:</label>
        <input
          type="number"
          id="itemWidth"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setiItemWidth(parseInt(e.target.value))
          }
        />

        <label htmlFor="frameSize">Enter frame size:</label>
        <input
          type="number"
          id="frameSize"
          maxLength={10}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFrameSize(parseInt(e.target.value))
          }
        />

        <label htmlFor="step">Enter number for step:</label>
        <input type="number" id="step" />

        <label htmlFor="animationDuration">
          Enter animation duration in ms:
        </label>
        <input type="number" id="animationDuration" />
      </form>

      <Carousel
        images={images}
        itemWidth={itemWidth}
        frameSize={frameSize}
      />
    </div>
  );
};

export default App;
