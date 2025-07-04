"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
  video?: string;
  type: "image" | "video";
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const { src, button, title, type } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out">
          {type === "image" ? (
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt={title}
              src={src}
            />
          ) : (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              controls={isPlaying}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {type === "video" && !isPlaying && (
            <button
              onClick={handlePlayVideo}
              className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-all"
            >
              
            </button>
          )}
        </div>

        <article className="relative p-[4vmin]">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">{title}</h2>
          {type === "image" && (
            <button className="mt-6 px-4 py-2 bg-white text-black rounded-lg">
              {button}
            </button>
          )}
        </article>
      </li>
    </div>
  );
};


export function Carousel({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto">
      <ul className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${current * (100 / slides.length)}%)` }}>
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} current={current} handleSlideClick={setCurrent} />
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <button onClick={handlePreviousClick} className="mx-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-full">◀</button>
        <button onClick={handleNextClick} className="mx-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-full">▶</button>
      </div>
    </div>
  );
}
