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
  primary: '#083783',
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
    bgColor: COLORS.primary,
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
        className={`h-2 w-2 rounded-full mx-1 md:mx-2 transition-all duration-200 border-2 border-white ${
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
      className="relative h-[60vh] flex items-center justify-center text-white bg-black bg-cover bg-center overflow-hidden"
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

      <div className="absolute top-4 md:top-8 right-4 md:right-1/4 z-30">
        <div className="w-48 h-32 md:w-72 md:h-48 relative">
          <Image 
            src="/slider.svg"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center z-40 px-4">
        <h1 className="text-base md:text-lg font-semibold mb-2 md:mb-4 text-white drop-shadow-lg italic">
          {slides[currentSlide].title}
        </h1>     
        <NavigationDots 
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onSlideChange={goToSlide}
        />
      </div>

      <div className="absolute bottom-1 md:bottom-2 left-0 w-full z-30">
        <div className="w-full h-6 md:h-8 relative">
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
    <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ width: '330px', height: '120px', left: '72%', top: '73%', transform: 'translate(-50%, -50%)' }}>
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

// Mobile Navigation Components
const MobileNavigationBox = ({ item }: { item: NavigationItem }) => (
  <div 
    className="flex-1 relative flex flex-col items-center justify-center h-16 cursor-default"
    style={{ backgroundColor: item.bgColor }}
  >
    <p className="text-white text-xs text-center leading-tight font-light whitespace-pre-line">
      {item.label}
    </p>
  </div>
);

const MobilePatientStoriesBox = () => (
  <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 z-20">
    <div className="relative w-30 h-40 flex items-center justify-center">
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

// Desktop Navigation Section (Original)
const NavigationSection = () => (
  <section className="h-26 hidden md:block" style={{ backgroundColor: COLORS.primary }} aria-label="Quick navigation">
    <div className="flex w-full relative items-end">
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

// Mobile Navigation Section (New)
const MobileNavigationSection = () => (
  <section className="block md:hidden relative" style={{ backgroundColor: COLORS.primary }} aria-label="Quick navigation">
    <div className="flex w-full relative">
      {navigationItems.map((item, index) => (
        <MobileNavigationBox key={index} item={item} />
      ))}
    </div>
    <MobilePatientStoriesBox />
  </section>
);

const ServiceIconItem = ({ icon }: { icon: ServiceIcon }) => (
  <div className="flex flex-col items-center justify-start group w-full max-w-[200px] mx-auto">
    <div className="relative w-48 h-48 md:w-44 md:h-44 mb-3 md:mb-4 transition-transform group-hover:scale-105 flex-shrink-0 flex items-center justify-center">
      <div className={`relative ${
        icon.alt === "Childhood Deformity" || icon.alt === "Infected Fractures" 
          ? "w-48 h-48 md:w-44 md:h-44" 
          : "w-44 h-44 md:w-38 md:h-38"
      }`}>
        <Image 
          src={icon.src} 
          alt={icon.alt} 
          fill
          className="object-contain"
          sizes="(max-width: 768px) 192px, 176px"
        />
      </div>
    </div>
    {/* Fixed height container for text at the bottom */}
    <div className="h-12 flex items-start justify-center">
      <h2 
        className="text-sm md:text-base font-semibold text-[#003882] text-center leading-tight" 
        dangerouslySetInnerHTML={{ __html: icon.title }}
      />
    </div>
  </div>
);

const ServicesSection = () => (
  <section className="py-8 md:py-16 bg-white" aria-label="Our services">
    <div className="container mx-auto px-4 md:px-8">
      {/* Mobile: Single column layout */}
      <div className="flex flex-col items-center gap-4 md:hidden">
        {serviceIcons.map((icon, index) => (
          <ServiceIconItem key={index} icon={icon} />
        ))}
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