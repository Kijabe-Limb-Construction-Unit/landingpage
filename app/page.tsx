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

interface ServiceIcon {
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

const serviceIcons: ServiceIcon[] = [
  {
    src: "/childhood.png",
    alt: "Childhood Deformity",
    title: "Childhood<br/>Deformity",
  },
  {
    src: "/poorly-healing.png",
    alt: "Poorly Healing Fractures",
    title: "Poorly Healing<br/>Fractures",
  },
  {
    src: "/infected-fractures.png",
    alt: "Infected Fractures",
    title: "Infected<br/>Fractures",
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

const NavigationDots = ({
  currentSlide,
  totalSlides,
  onSlideChange,
}: {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}) => (
  <div
    className="flex justify-center mt-5"
    role="tablist"
    aria-label="Slide navigation"
  >
    {Array.from({ length: totalSlides }).map((_, index) => (
      <button
        key={index}
        onClick={() => onSlideChange(index)}
        className={`h-1 w-1 min-[250px]:h-1.5 min-[250px]:w-1.5 min-[320px]:h-2 min-[320px]:w-2 rounded-full mx-0.5 min-[320px]:mx-1 md:mx-2 transition-all duration-200 border border-white min-[320px]:border-2 ${
          index === currentSlide
            ? "bg-white"
            : "bg-transparent hover:bg-white hover:bg-opacity-50"
        }`}
        aria-label={`Go to slide ${index + 1}`}
        role="tab"
        aria-selected={index === currentSlide}
      />
    ))}
  </div>
);

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

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

      <div className="absolute top-3 min-[250px]:top-4 min-[320px]:top-35 md:top-[30%] right-6 min-[250px]:right-8 min-[320px]:right-10 md:right-[25%] z-30">
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

      <div className="absolute bottom-1 min-[250px]:bottom-2 min-[320px]:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center z-40 px-1 min-[320px]:px-4">
        <p
          className="mb-0.5 text-5xl text-white"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          {slides[currentSlide].title}
        </p>
        <NavigationDots
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onSlideChange={goToSlide}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="w-full mb-2 min-[250px]:h-100 min-[320px]:h-8 sm:h-12 md:h-15 relative">
          <Image
            src="/line_.svg"
            width={1920}
            height={100}
            alt=""
            className="object-cover pt-5 lg:pt-3"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};


const ServiceIconItem = ({ icon }: { icon: ServiceIcon }) => (
  <div className="mb-10 flex flex-col items-center justify-center w-full flex-shrink-0">
    <div
      className={`relative transition-transform group-hover:scale-105 flex-shrink-0 flex items-center justify-center ${
        icon.alt === "Poorly Healing Fractures"
          ? "mt-1 min-[250px]:mt-1 min-[320px]:mt-2 sm:mt-3 md:mt-4 ml-1 min-[250px]:ml-1 min-[320px]:ml-2 sm:ml-3 md:ml-4 w-14 h-14 min-[250px]:w-18 min-[250px]:h-18 min-[320px]:w-22 min-[320px]:h-22 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64"
          : icon.alt === "Infected Fractures"
          ? "w-20 h-20 min-[250px]:w-24 min-[250px]:h-24 min-[320px]:w-28 min-[320px]:h-28 sm:w-42 sm:h-42 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
          : "w-17 h-17 min-[250px]:w-21 min-[250px]:h-24 min-[320px]:w-25 min-[320px]:h-25 sm:w-42 sm:h-42 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 pb-2"
      }`}
    >
      <div
        className={`relative ${
          icon.alt === "Poorly Healing Fractures"
            ? "w-full h-full"
            : icon.alt === "Infected Fractures"
            ? "w-full h-full"
            : "w-full h-full"
        }`}
      >
        <Image
          src={icon.src}
          alt={icon.alt}
          fill
          className="object-contain"
          sizes="(max-width: 250px) 64px, (max-width: 320px) 80px, (max-width: 640px) 96px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
        />
      </div>
    </div>
    {/* Fixed height container for text at the bottom */}
    <div
      className={`h-6 min-[250px]:h-7 min-[320px]:h-8 sm:h-12 flex  items-start justify-center ${
        icon.alt === "Poorly Healing Fractures"
          ? "mt-1 min-[250px]:mt-1 min-[320px]:mt-2 sm:mt-3 md:mt-0"
          : ""
      }`}
    >
      <p
        className="font-semibold light-letter-spacing text-[#003882] text-center leading-[1.1] px-0.5 overflow-hidden text-2xl"
        dangerouslySetInnerHTML={{ __html: icon.title }}
      />
    </div>
  </div>
);

const ServicesSection = () => (
  <section
    className="py-2 min-[250px]:py-3 min-[320px]:py-4 md:py-5 bg-white"
    aria-label="Our services"
  >
    <div className="container mx-auto px-1 min-[250px]:px-2 min-[320px]:px-4 md:px-8">
      {/* Mobile: Display service.jpeg image */}
      <div className="md:hidden w-full flex justify-center mt-4 min-[250px]:mt-5 min-[320px]:mt-6">
        <div className="relative w-full max-w-md">
          <Image
            src="/service.jpeg"
            alt="Our Services"
            width={400}
            height={300}
            className="w-full h-auto object-contain"
            sizes="w(100vw) max-w(800px)"
          />
        </div>
      </div>

      {/* Desktop: Three column layout */}
      <div className="hidden md:grid grid-cols-3 gap-5 max-w-3xl mx-auto justify-items-center items-start">
        {serviceIcons.map((icon, index) => (
          <ServiceIconItem key={index} icon={icon} />
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSlider />
      <PatientSect/>
      <ServicesSection />
      <BlueColoredBorder />
    </main>
  );
}
