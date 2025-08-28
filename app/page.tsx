"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Slide {
  src: string;
  alt: string;
  title: string;
}

interface NavigationItem {
  label: string;
  href: string;
  bgColor: string;
  width: string;
  isHighlighted?: boolean;
}

interface ServiceIcon {
  src: string;
  alt: string;
  title: string;
}

const SLIDE_INTERVAL = 4000;

const COLORS = {
  primary: '#003683',
  secondary: '#149ecc',
  tertiary: '#4fb29d',
  quaternary: '#c7d886',
} as const;

const slides: Slide[] = [
  {
    src: "/bb.jpg",
    alt: "Hero Background 1",
    title: "A little-known epidemic.",
  },
  {
    src: "/IMG1.jpg", 
    alt: "Hero Background 2", 
    title: "Another compelling message.",
  },
  {
    src: "/IMG2.jpg",
    alt: "Hero Background 3",
    title: "Third powerful statement.",
  },
  {
    src: "/IMG3.jpg", 
    alt: "Hero Background 4",
    title: "Fourth amazing headline.",
  },
  {
    src: "/IMG4.jpg", 
    alt: "Hero Background 5",
    title: "Fifth incredible message.",
  }
];

const navigationItems: NavigationItem[] = [
  {
    label: "Patient\nresources",
    href: "/patient-resources",
    bgColor: COLORS.tertiary,
    width: "w-40"
  },
  {
    label: "Book an\nappointment",
    href: "#",
    bgColor: COLORS.secondary,
    width: "w-48"
  }
];

const serviceIcons: ServiceIcon[] = [
  {
    src: "/childhood.png",
    alt: "Childhood Deformity",
    title: "Childhood<br/>Deformity"
  },
  {
    src: "/poorly-healing.png",
    alt: "Poorly Healing Fractures",
    title: "Poorly Healing<br/>Fractures"
  },
  {
    src: "/infected-fractures.png",
    alt: "Infected Fractures",
    title: "Infected<br/>Fractures"
  }
];

const getPreviousSlideIndex = (currentSlide: number, totalSlides: number): number => {
  return (currentSlide - 1 + totalSlides) % totalSlides;
};

const getNextSlideIndex = (currentSlide: number, totalSlides: number): number => {
  return (currentSlide + 1) % totalSlides;
};

const SlideImage = ({ 
  slide, 
  priority = false, 
  opacity 
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
      className={`object-cover ${opacity || ''}`}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
);

const NavigationDots = ({ 
  currentSlide, 
  totalSlides, 
  onSlideChange 
}: { 
  currentSlide: number; 
  totalSlides: number; 
  onSlideChange: (index: number) => void; 
}) => (
  <div className="flex justify-center" role="tablist" aria-label="Slide navigation">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <button
        key={index}
        onClick={() => onSlideChange(index)}
        className={`h-1 w-1 min-[250px]:h-1.5 min-[250px]:w-1.5 min-[320px]:h-2 min-[320px]:w-2 rounded-full mx-0.5 min-[320px]:mx-1 md:mx-2 transition-all duration-200 border border-white min-[320px]:border-2 ${
          index === currentSlide
            ? 'bg-white'
            : 'bg-transparent hover:bg-white hover:bg-opacity-50'
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
      className="relative h-[40vh] min-[250px]:h-[45vh] min-[320px]:h-[50vh] sm:h-[60vh] flex items-center justify-center text-white bg-black bg-cover bg-center overflow-hidden"
      aria-label="Hero image slider"
    >
      <div className="absolute inset-0 hidden md:flex items-center justify-center">
        <div className="absolute left-0 w-1/4 h-full z-10">
          <SlideImage 
            slide={slides[previousSlideIndex]} 
            opacity="opacity-60" 
          />
        </div>

        <div className="relative w-1/2 h-full z-20">
          <SlideImage 
            slide={slides[currentSlide]} 
            priority 
          />

          <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
        </div>

        <div className="absolute right-0 w-1/4 h-full z-10">
          <SlideImage 
            slide={slides[nextSlideIndex]} 
            opacity="opacity-60" 
          />
        </div>
      </div>

      <div className="absolute inset-0 flex md:hidden items-center justify-center">
        <div className="relative w-full h-full z-20">
          <SlideImage 
            slide={slides[currentSlide]} 
            priority 
          />
          <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
        </div>
      </div>

      <div className="absolute top-3 min-[250px]:top-4 min-[320px]:top-6 md:top-8 right-6 min-[250px]:right-8 min-[320px]:right-10 md:right-[20%] z-30">
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
        <h1 className="text-[9px] min-[250px]:text-[10px] min-[320px]:text-xs sm:text-base md:text-lg font-semibold mb-0.5 min-[250px]:mb-1 min-[320px]:mb-2 md:mb-4 text-white drop-shadow-lg italic leading-tight">
          {slides[currentSlide].title}
        </h1>     
        <NavigationDots 
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onSlideChange={goToSlide}
        />
      </div>

      <div className="absolute bottom-0 min-[320px]:bottom-1 md:bottom-2 left-0 w-full z-30">
        <div className="w-full h-2 min-[250px]:h-3 min-[320px]:h-4 sm:h-6 md:h-8 relative">
          <Image 
            src="/line.svg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

const NavigationBox = ({ item }: { item: NavigationItem }) => (
  <div 
    className={`${item.width} relative flex flex-col items-center justify-center h-24 cursor-default`}
    style={{ backgroundColor: item.bgColor }}
  >
    <p className="text-white text-sm text-center leading-tight font-light whitespace-pre-line">
      {item.label}
    </p>
  </div>
);

const PatientStoriesBox = () => (
  <div className="w-20 relative flex flex-col items-center justify-center h-20">
    <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ width: '330px', height: '120px', left: '75%', top: '73%', transform: 'translate(-50%, -50%)' }}>
      <Image 
        src="/patientstories.svg"
        alt=""
        fill
        className="object-contain"
        aria-hidden="true"
      />
    </div>
  </div>
);

// Mobile Navigation Components - UPDATED with more right positioning for Book an appointment
const MobileNavigationBox = ({ item, index }: { item: NavigationItem; index: number }) => (
  <div 
    className={`flex-1 relative flex flex-col items-center justify-center h-16 min-[250px]:h-20 min-[320px]:h-24 sm:h-32 cursor-default min-w-0 ${
      index === 1 ? 'ml-7 min-[250px]:ml-8 min-[263px]:ml-11 min-[268px]:ml-11 min-[290px]:ml-11 min-[320px]:ml-12 min-[331px]:ml-13' : ''
    }`}
    style={{ backgroundColor: item.bgColor }}
  >
    <div className={`flex items-center justify-center h-full w-full ${
      index === 0 ? 'justify-start pl-2 min-[250px]:pl-3 min-[320px]:pl-4 min-[320px]:pr-6' : 
      index === 1 ? 'justify-end pr-5 min-[250px]:pr-4 min-[263px]:pr-6 min-[268px]:pr-6 min-[290px]:pr-6 min-[320px]:pr-7 min-[331px]:pr-6 translate-x-1 min-[250px]:translate-x-2 min-[263px]:translate-x-4 min-[268px]:translate-x-4 min-[290px]:translate-x-4 min-[320px]:translate-x-2 min-[331px]:translate-x-3' : 
      'justify-center'
    }`}>
      <p className="text-white text-[10px] min-[250px]:text-xs min-[320px]:text-sm sm:text-base text-center leading-[1.1] font-light whitespace-pre-line overflow-hidden">
        {item.label}
      </p>
    </div>
  </div>
);

// UPDATED: Patient Stories Box - SLIGHTLY INCREASED HEIGHT FOR 320px+ screens
const MobilePatientStoriesBox = () => (
  <div className="absolute top-0 z-20 h-21 min-[250px]:h-25 min-[320px]:h-30 sm:h-35 flex items-center justify-center left-0 right-0">
    <div className="relative w-[120px] min-[250px]:w-[140px] min-[320px]:w-[160px] sm:w-[190px] h-21 min-[250px]:h-25 min-[320px]:h-30 sm:h-35 mx-auto">
      <Image 
        src="/patientstories.svg"
        alt=""
        fill
        className="object-contain"
        aria-hidden="true"
        style={{ 
          objectFit: 'contain', 
          width: '100%', 
          height: '100%'
        }}
      />
    </div>
  </div>
);

// Desktop Navigation Section (Original)
const NavigationSection = () => (
  <section className="h-26 hidden md:block" style={{ backgroundColor: COLORS.primary }} aria-label="Quick navigation">
    <div className="flex w-full relative items-end" style={{ backgroundColor: COLORS.secondary }}>
      <div className="flex-1 h-24" style={{ backgroundColor: COLORS.secondary }} aria-hidden="true" />
      {navigationItems.map((item, index) => {
        if (index === 0) {
          return <NavigationBox key={index} item={item} />;
        } else {
          return (
            <div key={index} className="flex">
              <PatientStoriesBox />
              <NavigationBox item={item} />
            </div>
          );
        }
      })}
      <div className="flex-1 h-24" style={{ backgroundColor: COLORS.tertiary }} aria-hidden="true" />
    </div>
  </section>
);

// UPDATED: Mobile Navigation Section with increased spacing pushed further left
const MobileNavigationSection = () => (
  <section className="block md:hidden relative" style={{ backgroundColor: COLORS.primary }} aria-label="Quick navigation">
    <div className="flex w-full relative "  style={{ gap: '0px' }}>
      {navigationItems.map((item, index) => (
        <MobileNavigationBox key={index} item={item} index={index} />
      ))}
    </div>
    <MobilePatientStoriesBox />
  </section>
);

const ServiceIconItem = ({ icon }: { icon: ServiceIcon }) => (
  <div className="flex flex-col items-center justify-start group w-full flex-shrink-0">
    <div className={`relative mb-1 min-[250px]:mb-2 min-[320px]:mb-3 md:mb-4 transition-transform group-hover:scale-105 flex-shrink-0 flex items-center justify-center ${
      icon.alt === "Poorly Healing Fractures" 
        ? "mt-1 min-[250px]:mt-1 min-[320px]:mt-2 sm:mt-3 md:mt-4 ml-1 min-[250px]:ml-1 min-[320px]:ml-2 sm:ml-3 md:ml-4 w-14 h-14 min-[250px]:w-18 min-[250px]:h-18 min-[320px]:w-22 min-[320px]:h-22 sm:w-36 sm:h-36 md:w-39 md:h-39" 
        : icon.alt === "Infected Fractures"
        ? "w-20 h-20 min-[250px]:w-24 min-[250px]:h-24 min-[320px]:w-28 min-[320px]:h-28 sm:w-42 sm:h-42 md:w-46 md:h-46"
        : "w-17 h-17 min-[250px]:w-21 min-[250px]:h-24 min-[320px]:w-25 min-[320px]:h-25 sm:w-42 sm:h-42 md:w-46 md:h-44 pb-2"
    }`}>
      <div className={`relative ${
        icon.alt === "Poorly Healing Fractures" 
          ? "w-full h-full" 
          : icon.alt === "Infected Fractures"
          ? "w-full h-full"
          : "w-full h-full"
      }`}>
        <Image 
          src={icon.src} 
          alt={icon.alt} 
          fill
          className="object-contain"
          sizes="(max-width: 250px) 64px, (max-width: 320px) 80px, (max-width: 640px) 96px, (max-width: 768px) 160px, 176px"
        />
      </div>
    </div>
    {/* Fixed height container for text at the bottom */}
    <div className={`h-6 min-[250px]:h-7 min-[320px]:h-8 sm:h-12 flex  items-start justify-center ${
      icon.alt === "Poorly Healing Fractures" ? "mt-1 min-[250px]:mt-1 min-[320px]:mt-2 sm:mt-3 md:mt-" : ""
    }`}>
      <h2 
        className="text-[9px] min-[250px]:text-[10px] min-[320px]:text-xs md:text-base font-semibold text-[#003882] text-center leading-[1.1] px-0.5 overflow-hidden" 
        dangerouslySetInnerHTML={{ __html: icon.title }}
      />
    </div>
  </div>
);

const ServicesSection = () => (
  <section className="py-2 min-[250px]:py-3 min-[320px]:py-4 md:py-12 bg-white" aria-label="Our services">
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
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>
      
      {/* Desktop: Three column layout */}
      <div className="hidden md:grid grid-cols-3 gap-0 max-w-4xl md:max-w-xl mx-auto justify-items-center items-start">
        {serviceIcons.map((icon, index) => (
          <ServiceIconItem key={index} icon={icon} />
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <NavigationSection />
      <MobileNavigationSection />
      <ServicesSection />
    </main>
  );
}