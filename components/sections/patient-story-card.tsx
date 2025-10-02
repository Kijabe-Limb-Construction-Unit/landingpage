'use client';   

import { Play, } from "lucide-react";
import { useState } from "react";

export const PatientResources = ({
  p1,
  p2,
  bg,
  textColor,
  youtubeUrl,
  iframeSrc,
  showIframe = false,
}: {
  p1: string;
  p2: string;
  textColor: string;
  bg: string;
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
      <div className="flex flex-col md:flex-row items-start gap-4 ">
        <div className={`bg-${bg} p-4 rounded-lg flex items-center gap-4 text-left`}>
          <button
            onClick={handlePlayClick}
            className="bg-red-600 rounded p-2 flex-shrink-0 text-white hover:bg-red-700 transition-colors cursor-pointer"
          >
            <Play size={16} fill="white" />
          </button>
        </div>
        <div className={`text-sm flex flex-col justify-start items-start text-${textColor}`}>
          <p>{p1}</p>
          <p>{p2}</p>
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