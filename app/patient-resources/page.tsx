import React from "react";
import { Download } from "lucide-react";
import { PatientResources } from "@/components/sections/patient-story-card";
import Image from "next/image";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="flex flex-col items-center justify-center text-center bg-[#4FB29E] text-white py-5">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-light leading-tight">
          <span className="font-bold">resources</span> for patients <br />
          <p className="text-4xl md:text-5xl font-light leading-tight mt-2 xl:mr-[15rem] md:mt-4 xl:-mt-4">Get more information</p>
        </h1>
        {/* left line on desktop screen */}
        <div className="relative flex w-full justify-end items-end mb-0">
          <Image
            src="/pr-line.svg"
            width={1200}
            height={10}
            alt={""}
            className="h-15 justify-end -mt-[1rem] lg:-mt-[2rem] xl:-mt-[15rem] -mr-10 sm:-ml-20 xl:-ml-0 xl:-mr-25 w-[70%] lg:w-[40%]"
          />
        </div>
        <p className="text-4xl md:text-5xl font-light leading-tight mt-2 md:mt-4 xl:mt-0 xl:ml-[10rem] w-[75%] sm:w-full">
          about your{" "}
          <span className="font-bold">condition or treatment.</span>
        </p>
        {/* Right line on desktop screens */}
        <div className="relative flex -top-5 w-full justify-start items-start">
          <Image src="/pl-line.svg" width={10} height={10} alt={""} className="h-15 justify-end right-1 -mt-1 md:mt-3 lg:-mt-5 lg:-ml-[5rem] -ml-[10rem] sm:-ml-[12rem] w-full sm:w-[70%] md:w-[60%] lg:w-[40%]" />
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* General Information Section */}
      <div className="bg-[#149ECC] px-8 py-12">
        <div className="max-w-5xl mx-auto text-center md:pl-10">
          <h1 className="text-white text-3xl md:text-4xl flex flex-wrap items-center font-light mb-8 tracking-wider justify-center md:justify-start">
            GENERAL{" "}
            <span className="font-bold pl-1 md:pl-5 w-auto">INFORMATION</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PatientResources
              p1="Limb Reconstruction with"
              p2="Frames: An Overview "
              btnColor="dark-blue-yt-btn.svg"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/bUtQcVV5D_U?si=radgQsZ-bNk9e-fp"
              youtubeUrl="https://youtu.be/bUtQcVV5D_U?si=radgQsZ-bNk9e-fp"
            />
            <PatientResources
              p1="Frame Information for"
              p2="Kids (and Adults!)"
              btnColor="dark-blue-yt-btn.svg"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/QwkcAiTGgQc?si=TDmCC2JBflmC2nRC"
              youtubeUrl="https://youtu.be/QwkcAiTGgQc?si=TDmCC2JBflmC2nRC"
            />
            <PatientResources
              p1="Tips for Wearing an"
              p2="External Fixator"
              btnColor="dark-blue-yt-btn.svg"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/c85w0jzeWyY?si=wfSMZXUhSLwLg0Q2"
              youtubeUrl="https://youtu.be/c85w0jzeWyY?si=Srr1uXoLF10kw3p1"
            />
            <PatientResources
              p1="History of Limb"
              p2="Reconstruction"
              btnColor="dark-blue-yt-btn.svg"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/PVn9IfxX74E?si=shXJoL2_-2plMVIs"
              youtubeUrl="https://youtu.be/PVn9IfxX74E?si=shXJoL2_-2plMVIs"
            />
          </div>
        </div>
      </div>

      {/* Looking After Your Pin Sites Section */}
      <div className="bg-blue-900 px-8 py-12">
        <div className="max-w-5xl mx-auto text-center md:pl-10">
          <h1 className="text-white text-3xl md:text-4xl flex flex-wrap items-center font-light mb-8 tracking-wider flex justify-center md:justify-start">
            LOOKING AFTER
            <span className="font-bold pl-2 md:pl-5 w-auto">
              YOUR PIN SITES
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PatientResources
              p1="Pin Site Care"
              p2="(Animated)"
              btnColor="sky-blue-yt-btn.svg"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/ZBBF81nwdtE?si=Z4sgt_zMmTaz4BhL"
              youtubeUrl="https://youtu.be/ZBBF81nwdtE?si=Z4sgt_zMmTaz4BhL"
            />
            <PatientResources
              p1="Pin Site Care"
              p2="(Patient Demonstration)"
              btnColor="sky-blue-yt-btn.svg"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/qU9UbzUEcqk?si=sMi2PNsWtFsjEQC7"
              youtubeUrl="https://youtu.be/qU9UbzUEcqk?si=sMi2PNsWtFsjEQC7"
            />
          </div>
        </div>
      </div>

      {/* Managing Your Struts Section */}
      <div className="bg-gray-200 px-8 py-12">
        <div className="max-w-5xl mx-auto text-center md:pl-10">
          <h1 className="text-teal-500 text-3xl md:text-4xl flex flex-wrap items-center font-light mb-8 tracking-wider flex justify-center md:justify-start">
            MANAGING <span className="font-bold pl-2 md:pl-5">YOUR STRUTS</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 text-[#083783] gap-6">
            <PatientResources
              p1="Adjusting a Strut"
              p2=""
              btnColor="dark-blue-yt-btn.svg"
              textColor="#083783"
              iframeSrc="https://www.youtube.com/embed/sytSPu19fUY?si=OTpK49OllmqpdELT"
              youtubeUrl=""
            />
            <PatientResources
              p1="Changing a Strut"
              p2=""
              btnColor="dark-blue-yt-btn.svg"
              textColor="#083783"
              iframeSrc="https://www.youtube.com/embed/1JMqagnm5gE?si=RJvdaL1o4IYd8MRl"
              youtubeUrl={""}
            />
          </div>
        </div>
      </div>

      {/* Monorail Frames Section */}
      <div className="bg-[#4FB29E] px-8 py-12">
        <div className="max-w-5xl mx-auto text-center md:pl-10">
          <h1 className="text-[#083783] text-3xl md:text-4xl flex-wrap items-center font-light mb-8 tracking-wider flex justify-center md:justify-start">
            MONORAIL <span className="font-bold pl-2 md:pl-5">FRAMES</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 text-[#083783] gap-6">
            <PatientResources
              p1="Monorail Adjustment"
              p2=""
              btnColor="dark-blue-yt-btn.svg"
              textColor="#083783"
              iframeSrc="https://www.youtube.com/embed/3x6fM2J3xE8?si=GEcbIplBEPSLGvzi"
              youtubeUrl="https://youtu.be/3x6fM2J3xE8?si=elol-sopgXjaqoIG"
            />
          </div>
        </div>
      </div>

      {/* Rehabilitation Section */}
      <div className="bg-[#149ECC] px-8 py-12">
        <div className="max-w-5xl mx-auto text-center md:pl-10">
          <h1 className="text-white text-3xl md:text-4xl flex flex-wrap items-center font-bold mb-8 tracking-wider flex justify-center md:justify-start">
            REHABILITATION
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PatientResources
              p1="Frames Physiotherapy"
              p2=""
              btnColor="dark-blue-yt-btn.svg"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/me66wP2M5lE?si=IgjQc9G0Sq_M9Gan"
              youtubeUrl="https://youtu.be/me66wP2M5lE?si=IgjQc9G0Sq_M9Gan"
            />
            <PatientResources
              p1="Tibia/Leg Bone Physiotherapy"
              p2="Exercises (Limb Lengthening)"
              btnColor="dark-blue-yt-btn.svg"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/5WMtS9hiOFY?si=K2dtREXEuk5LtRH4"
              youtubeUrl="https://youtu.be/5WMtS9hiOFY?si=K2dtREXEuk5LtRH4"
            />
            <PatientResources
              p1="Femur/Thigh Bone Physiotherapy"
              p2="Exercises (Limb Lengthening)"
              btnColor="dark-blue-yt-btn.svg"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/vp3j5ujYq5c?si=ZjCU_s7W54O0Utzu"
              youtubeUrl="https://youtu.be/vp3j5ujYq5c?si=ZjCU_s7W54O0Utzu"
            />
            <PatientResources
              p1="Physiotherapy Exercises for"
              p2="Lower Limb External Fixators"
              btnColor="dark-blue-yt-btn.svg"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/5MjZ4RoJK84?si=f8o4IFEe7XNtVSvA"
              youtubeUrl="https://youtu.be/5MjZ4RoJK84?si=f8o4IFEe7XNtVSvA"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#003683] text-white flex justify-center items-center text-center flex-col px-8 py-12 gap-2">
        <div className="flex items-center gap-4">
          <Download className="w-12 h-12 text-teal-500 -mr-2 sm:-mr-0" />
          <h1 className="text-4xl md:text-7xl">reading <span className="font-light">material</span></h1>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl">
          Taylor Spatial Frame Patient Information Booklet
        </p>
        <a
          href="https://smith-nephew.stylelabs.cloud/api/public/content/f43bb595ee4c4849970524cff681ec73?v=616e0229"
          className="sm:text-lg md:text-xl text-teal-500 hover:text-teal-400 underline break-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Booklet
        </a>
      </div>
    </div>
  );
}

export default App;
