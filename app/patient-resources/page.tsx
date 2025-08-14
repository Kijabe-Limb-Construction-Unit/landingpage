"use client";

import Image from "next/image";
import { Play, Download } from "lucide-react";

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
            <h3 className="text-xl font-bold mb-6 tracking-widest" style={{ fontFamily: 'Coves, sans-serif' }} dangerouslySetInnerHTML={{ __html: title }}></h3>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'Coves, sans-serif' }}>
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
          <h3 className="text-xl font-bold text-white mb-4 tracking-widest" style={{ fontFamily: 'Coves, sans-serif' }}>{title}</h3>
          <p className="text-white text-sm leading-relaxed mb-6" style={{ fontFamily: 'Coves, sans-serif' }}>
            {description}
          </p>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span className="text-sm font-medium tracking-widest" style={{ fontFamily: 'Coves, sans-serif' }}>{buttonText}</span>
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
            <h2 className="text-xl font-normal mb-2" style={{ fontFamily: 'Coves, sans-serif' }}>resources for patients</h2>
            <p className="text-4xl font-light mb-6" style={{ fontStyle: 'italic', fontFamily: 'Chalkduster, cursive' }}>Facts are our friends.</p>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'Coves, sans-serif' }}>
              Here is where you can get more information<br />
              about your condition or treatment.
            </p>
          </div>
        </div>
      </div>

      <VideoThumbnail
        title='HOW TO <span class="text-[#003683]" style="font-family: Coves, sans-serif;"> ADJUST</span> YOUR STRUTS'
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eius-
mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali-
quip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        bgColor="bg-[#149ECC]"
        videoUrl="https://www.youtube.com/watch?v=QwkcAiTGgQc"
      />

      <VideoThumbnail
        title='HOW TO <span class="text-[#00aeef]" style="font-family: Coves, sans-serif;"> CHANGE</span> YOUR STRUTS'
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eius-
mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali-
quip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        bgColor="bg-[#003683]"
        videoUrl="https://www.youtube.com/watch?v=6i7yvVt_EIM"
      />

      <VideoThumbnail
        title='INFORMATION FOR  <span class="text-blue-800" style="font-family: Chalkduster, cursive;">kids</span>'
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eius-
mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali-
quip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        bgColor="bg-[#4FB29E]"
        videoUrl="https://www.youtube.com/watch?v=zQsls0z6XCE"
        showTeddy={true}
      />

      <div className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-8 flex justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-6" style={{ fontFamily: 'Coves, sans-serif' }}>more <em className="text-teal-500 not-italic" style={{ fontFamily: 'Coves, sans-serif' }}>pdf</em> resources</h2>
            <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Coves, sans-serif' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eius-<br />
              mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br />
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut <span className="text-blue-600 underline cursor-pointer italic">ali-<br />
              quip ex ea</span> commodo consequat. Duis aute irure dolor in reprehenderit<br />
              in voluptate velit esse <span className="text-blue-600 underline cursor-pointer italic">cillum dolore</span> eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      <DownloadSection
        title="LOREM IPSUM DOLOR SIT AMET"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eius-
mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali-
quip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        bgColor="bg-[#149ECC]"
        buttonText="QUIS AUTEM VEL DOLOR"
        pdfUrl="/documents/DummyPDF.pdf"
        fileName="DummyPDF.pdf"
      />

      <DownloadSection
        title="LOREM IPSUM DOLOR SIT AMET"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eius-
mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali-
quip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        bgColor="bg-[#003683]"
        buttonText="QUIS AUTEM VEL DOLOR"
        pdfUrl="/documents/DummyPDF.pdf"
        fileName="DummyPDF.pdf"
      />

      <DownloadSection
        title="LOREM IPSUM DOLOR SIT AMET"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eius-
mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali-
quip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        bgColor="bg-[#4FB29E]"
        buttonText="QUIS AUTEM VEL DOLOR"
        pdfUrl="/documents/DummyPDF.pdf"
        fileName="DummyPDF.pdf"
      />
    </div>
  );
}