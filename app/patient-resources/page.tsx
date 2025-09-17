"use client";

import Image from "next/image";
import { Play, Download } from "lucide-react";
import { patientResourcesData } from "@/lib/fakes/patient-resources-fakes";

interface GetYouTubeVideoId {
    (url: string): string | null;
}

const getYouTubeVideoId: GetYouTubeVideoId = (url) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

interface VideoThumbnailProps {
  title: string;
  description: string;
  bgColor: string;
  videoUrl: string;
  showTeddy?: boolean;
}

interface DownloadSectionProps {
  title: string;
  description: string;
  bgColor: string;
  buttonText: string;
  pdfUrl: string;
  fileName: string;
}



const VideoThumbnail = ({ title, description, bgColor, videoUrl, showTeddy = false }: VideoThumbnailProps) => {
  const videoId = getYouTubeVideoId(videoUrl);

  const getThumbnailUrl = (id: string) => {
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, videoId: string | null) => {
    const target = e.currentTarget;
    if (videoId) {
      const fallbackUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      if (target.src !== fallbackUrl) {
        target.src = fallbackUrl;
      } else {
        target.src = '/thumbnail.png';
      }
    } else {
      target.src = '/thumbnail.png';
    }
  };

  return (
    <div className={`py-10 ${bgColor} relative overflow-hidden`}>
      <div className="max-w-4xl mx-auto px-8 flex justify-center">
        <div className="w-full max-w-md">
          <div className="relative mb-8 bg-gray-900 rounded-lg overflow-hidden" style={{ width: '200px', height: '112px' }}>
            {videoId ? (
              <Image
                src={getThumbnailUrl(videoId)}
                alt={title}
                width={200}
                height={112}
                className="w-full h-full object-cover"
                onError={(e) => handleImageError(e, videoId)}
                unoptimized
              />
            ) : (
              <Image
                src="/thumbnail.png"
                alt={title}
                width={200}
                height={112}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black bg-black/40 flex items-center justify-center">
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
              </a>
            </div>
          </div>
          <div className="text-white relative z-10">
            <h3 className="text-semi-header font-bold mb-6 tracking-widest" dangerouslySetInnerHTML={{ __html: title }}></h3>
            <p className="text-body leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Teddy Bear - keep original desktop positioning, make visible on mobile */}
      {showTeddy && (
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 md:right-1/5 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:block">
          <Image
            src="/Teddy.svg"
            alt="Teddy Bear"
            width={150}
            height={150}
            className="opacity-60 md:opacity-30 md:w-[250px] md:h-[250px]"
          />
        </div>
      )}
    </div>
  );
};

const DownloadSection = ({ title, description, bgColor, buttonText, pdfUrl, fileName }: DownloadSectionProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`py-8 ${bgColor}`}>
      <div className="max-w-4xl mx-auto px-8 flex justify-center">
        <div className="w-full max-w-md">
          <h3 className="text-semi-header font-bold text-white mb-4 tracking-widest">{title}</h3>
          <p className="text-white text-body leading-relaxed mb-6">
            {description}
          </p>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span className="text-body font-medium tracking-widest">{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function PatientResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#4FB29E] py-10 text-white">
        <div className="max-w-4xl mx-auto px-8 flex justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-header font-normal mb-2">
              <strong>{patientResourcesData.hero.title?.split(' ')[0] || 'resources'}</strong> {patientResourcesData.hero.title?.split(' ').slice(1).join(' ') || 'for patients'}
            </h2>
            <p className="text-header font-bold mb-6" style={{ fontFamily: 'Caveat, cursive' }}>{patientResourcesData.hero.subtitle}</p>
            <p className="text-body leading-relaxed font-bold">
              {patientResourcesData.hero.description}
            </p>
          </div>
        </div>
      </div>

      {patientResourcesData.videos.map((video) => (
        <VideoThumbnail
          key={video.id}
          title={video.title}
          description={video.description}
          bgColor={video.bgColor}
          videoUrl={video.videoUrl}
          showTeddy={video.showTeddy || false}
        />
      ))}

      <div className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-8 flex justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-semi-header font-bold text-blue-900 mb-6">{patientResourcesData.pdfSection.title}</h2>
            <p className="text-body text-gray-600 leading-relaxed">
              {(() => {
                const desc = patientResourcesData.pdfSection.description;
                const highlight1 = patientResourcesData.pdfSection.highlightedText;
                const highlight2 = patientResourcesData.pdfSection.highlightedText2;
                
                if (!desc || !highlight1 || !highlight2) return desc;
                
                const parts1 = desc.split(highlight1);
                if (parts1.length < 2) return desc;
                
                const parts2 = parts1[1].split(highlight2);
                if (parts2.length < 2) return desc;
                
                return (
                  <>
                    {parts1[0]}
                    <span className="text-blue-600 underline cursor-pointer italic">{highlight1}</span>
                    {parts2[0]}
                    <span className="text-blue-600 underline cursor-pointer italic">{highlight2}</span>
                    {parts2[1]}
                  </>
                );
              })()}
            </p>
          </div>
        </div>
      </div>

      {patientResourcesData.downloads.map((download) => (
        <DownloadSection
          key={download.id}
          title={download.title}
          description={download.description}
          bgColor={download.bgColor}
          buttonText={download.buttonText}
          pdfUrl={download.pdfUrl}
          fileName={download.fileName}
        />
      ))}
    </div>
  );
}