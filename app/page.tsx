"use client";

import { BlueColoredBorder } from "@/components/sections/ColoredBorder";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import PatientSect from "@/components/sections/PatientSect";

interface Slide {
  src: string;
  alt: string;
  title: string;
}

const SLIDE_INTERVAL = 4000;

const slides: Slide[] = [
  {
    src: "/bb.jpg",
    alt: "Hero Background 1",
    title: "Serving the most needy.",
  },
  {
    src: "/IMG1.jpg",
    alt: "Hero Background 2",
    title: "Restoring limbs.",
  },
  {
    src: "/IMG2.jpg",
    alt: "Hero Background 3",
    title: "Rebuilding lives and rebuilding hope.",
  },
  {
    src: "/IMG3.jpg",
    alt: "Hero Background 4",
    title: "Equalizing access to limb reconstruction surgery.",
  },
  {
    src: "/IMG4.jpg",
    alt: "Hero Background 5",
    title: "Training surgeons for regional impact.",
  },
];

const getPreviousSlideIndex = (
  currentSlide: number,
  totalSlides: number
): number => {
  return (currentSlide - 1 + totalSlides) % totalSlides;
};

const getNextSlideIndex = (
  currentSlide: number,
  totalSlides: number
): number => {
  return (currentSlide + 1) % totalSlides;
};

const SlideImage = ({
  slide,
  priority = false,
  opacity,
}: {
  slide: Slide;
  priority?: boolean;
  opacity?: string;
}) => (
  <div className="relative w-full h-full">
    <Image
      src={slide.src}
      alt={slide.alt}
      fill
      className={`object-cover ${opacity || ""}`}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
);

// const NavigationDots = ({
//   currentSlide,
//   totalSlides,
//   onSlideChange,
// }: {
//   currentSlide: number;
//   totalSlides: number;
//   onSlideChange: (index: number) => void;
// }) => (
//   <div
//     className="flex justify-center mt-5"
//     role="tablist"
//     aria-label="Slide navigation"
//   >
//     {Array.from({ length: totalSlides }).map((_, index) => (
//       <button
//         key={index}
//         onClick={() => onSlideChange(index)}
//         className={`h-1 w-1 min-[250px]:h-1.5 min-[250px]:w-1.5 min-[320px]:h-2 min-[320px]:w-2 rounded-full mx-0.5 min-[320px]:mx-1 md:mx-2 transition-all duration-200 border border-white min-[320px]:border-2 ${index === currentSlide
//             ? "bg-white"
//             : "bg-transparent hover:bg-white hover:bg-opacity-50"
//           }`}
//         aria-label={`Go to slide ${index + 1}`}
//         role="tab"
//         aria-selected={index === currentSlide}
//       />
//     ))}
//   </div>
// );

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const goToSlide = useCallback((index: number) => {
  //   setCurrentSlide(index);
  // }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const previousSlideIndex = getPreviousSlideIndex(currentSlide, slides.length);
  const nextSlideIndex = getNextSlideIndex(currentSlide, slides.length);

  return (
    <section
      className="relative h-[40vh] min-[250px]:h-[45vh] min-[320px]:h-[50vh] sm:h-[60vh] flex items-center justify-center text-white bg-black bg-cover bg-center overflow-hidden z-0"
      aria-label="Hero image slider"
    >
      <div className="absolute inset-0 hidden md:flex items-center justify-center">
        <div className="absolute left-0 w-1/4 h-full z-10">
          <SlideImage slide={slides[previousSlideIndex]} opacity="opacity-60" />
        </div>

        <div className="relative w-1/2 h-full z-10">
          <SlideImage slide={slides[currentSlide]} priority />

          <div
            className="absolute inset-0 bg-black opacity-40"
            aria-hidden="true"
          ></div>
        </div>

        <div className="absolute right-0 w-1/4 h-full z-10">
          <SlideImage slide={slides[nextSlideIndex]} opacity="opacity-60" />
        </div>
      </div>

      <div className="absolute inset-0 flex md:hidden items-center justify-center">
        <div className="relative w-full h-full z-20">
          <SlideImage slide={slides[currentSlide]} priority />
          <div
            className="absolute inset-0 bg-black opacity-40"
            aria-hidden="true"
          ></div>
        </div>
      </div>

      <div className="absolute top-3 min-[250px]:top-4 min-[320px]:top-5 md:top-[15%] right-6 min-[250px]:right-8 min-[320px]:right-10 md:right-[25%] z-30">
        <div className="w-48 h-32 min-[250px]:w-56 min-[250px]:h-40 min-[320px]:w-64 min-[320px]:h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 relative">
          <Image
            src="/slider.svg"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="absolute bottom-1 min-[250px]:bottom-2 min-[320px]:bottom-4 md:bottom-15 left-1/2 transform -translate-x-1/2 w-full text-center z-40 px-1 min-[320px]:px-4">
        <p
          className="mb-0.5 text-2xl md:text-5xl text-white"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          {slides[currentSlide].title}
        </p>
        {/* <NavigationDots
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onSlideChange={goToSlide}
        /> */}
      </div>

      <div className="absolute bottom-0 left-0 w-[100vw] z-20">
        <div className="w-full mb-2 min-[250px]:h-100 min-[320px]:h-8 sm:h-12 md:h-15 relative">
          <Image
            src="/line_.svg"
            width={1920}
            height={100}
            alt=""
            className="object-cover pt-5 sm:pt-7 lg:pt-3"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};


const ServicesSection = () => (
  <section
    className="py-2 min-[250px]:py-3 min-[320px]:py-4 md:py-5 bg-white"
    aria-label="Our services"
  >
    <div className="container mx-auto px-1 min-[250px]:px-2 min-[320px]:px-4 md:px-8">
      {/* Mobile: Display service.jpeg image */}
      <div className="md:hidden w-full flex justify-center items-center mt-4 min-[250px]:mt-5 min-[320px]:mt-6">
        <Image
          // src="/service-lg.svg"
          src="/service-ll.png"
          alt="Our Services"
          width={400}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Desktop: Three column layout */}
      <div className="hidden md:flex gap-5 max-w-4xl mx-auto justify-center items-center my-5">
        <Image
          // src="/service-lg.svg"
          src="/service-l.svg"
          alt="Our Services"
          width={400}
          height={300}
          className="w-full h-auto max-w-3xl object-contain"
        />
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSlider />
      <PatientSect />
      <ServicesSection />
      <BlueColoredBorder pst={""} />
    </main>
  );
}
