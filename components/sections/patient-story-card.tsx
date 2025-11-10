'use client';   

import { useState } from "react";
import Image from "next/image";
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '700'],
  style: ['normal', 'italic'],
});

export const PatientResources = ({
  p1,
  p2,
  btnColor,
  textColor,
  youtubeUrl,
  iframeSrc,
  showIframe = false,
}: {
  p1: string;
  p2: string;
  textColor: string;
  btnColor: string;
  youtubeUrl?: string;
  iframeSrc?: string;
  showIframe?: boolean;
}) => {
  const [isIframeVisible, setIsIframeVisible] = useState(showIframe);

  const handlePlayClick = () => {
    if (iframeSrc) {
      setIsIframeVisible(!isIframeVisible);
    } else if (youtubeUrl) {
      window.open(youtubeUrl, '_blank');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Image src={btnColor} alt={""} width={100} height={100} className="w-[70%] sm:w-[30%] cursor-pointer" onClick={handlePlayClick}/>
        <div className={`flex flex-col justify-center items-center gap-2 md:items-start w-[70%] sm:w-[50%] md:w-auto text-${textColor}`}>
          <p className="text-[17px] sm:text-lg md:text-xl">{p1}</p>
          <p className={`text-[17px] sm:text-lg md:text-xl ${josefin.className} font-light`}>{p2}</p>
        </div>
      </div>
      
      {iframeSrc && isIframeVisible && (
        <div className="w-full">
          <iframe
            width="560"
            height="315"
            src={iframeSrc}
            title="Video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full max-w-full h-auto aspect-video rounded-lg"
          />
        </div>
      )}
    </div>
  );
};