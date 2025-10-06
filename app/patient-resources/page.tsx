import React from "react";
import { Download } from "lucide-react";
import { PatientResources } from "@/components/sections/patient-story-card";
import Image from "next/image";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-center text-center bg-[#4FB29E] text-white py-12 px-6 lg:py-16">
        <h1 className="text-7xl font-light">
          <span className="font-bold">resources</span> for patients <br /><p className="text-md font-light relative md:-left-30">Get more information</p>
        </h1>
        <Image src="/left-line.svg" width={1200} height={10} alt={""} className="h-10 relative left-80 w-3xl -top-8 w-full"/>
        <p className="relative -top-5">
          about your{" "}
          <span className="font-bold text-4xl">condition or treatment.</span>
        </p>
        <Image src="/right-line.svg" width={10} height={10} alt={""} className="h-10 relative right-80 -top-10 w-full" />
      </div>
      {/* General Information Section */}
      <div className="bg-[#149ECC] px-8 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-3xl md:text-4xl flex flex-wrap items-center font-light mb-8 tracking-wider">
            GENERAL{" "}
            <span className="font-bold pl-1 md:pl-5 w-auto">INFORMATION</span>
          </h1>
          <div className="grid grid-cols-2 items-start gap-4">
            <PatientResources
              p1="Limb Reconstruction"
              p2="with frames overview"
              bg="blue-900"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/bUtQcVV5D_U?si=radgQsZ-bNk9e-fp"
              youtubeUrl="https://youtu.be/bUtQcVV5D_U?si=radgQsZ-bNk9e-fp"
            />
            <PatientResources
              p1="Frame Information for Kids (and Adults!)"
              p2="for Kids (and Adults!)"
              bg="blue-900"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/QwkcAiTGgQc?si=TDmCC2JBflmC2nRC"
              youtubeUrl="https://youtu.be/QwkcAiTGgQc?si=TDmCC2JBflmC2nRC"
            />
            <PatientResources
              p1="Tips for Wearing an"
              p2="External Fixator"
              bg="blue-900"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/c85w0jzeWyY?si=wfSMZXUhSLwLg0Q2"
              youtubeUrl="https://youtu.be/c85w0jzeWyY?si=Srr1uXoLF10kw3p1"
            />
            <PatientResources
              p1="History of Limb"
              p2="Reconstruction"
              bg="blue-900"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/PVn9IfxX74E?si=shXJoL2_-2plMVIs"
              youtubeUrl="https://youtu.be/PVn9IfxX74E?si=shXJoL2_-2plMVIs"
            />
          </div>
        </div>
      </div>

      {/* Looking After Your Pin Sites Section */}
      <div className="bg-blue-900 px-8 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-3xl md:text-4xl flex flex-wrap items-center font-light mb-8 tracking-wider">
            LOOKING AFTER
            <span className="font-bold pl-2 md:pl-5 w-auto">
              YOUR PIN SITES
            </span>
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <PatientResources
              p1="Pin site Care"
              p2="(Animated)"
              bg="blue-900"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/ZBBF81nwdtE?si=Z4sgt_zMmTaz4BhL"
              youtubeUrl="https://youtu.be/ZBBF81nwdtE?si=Z4sgt_zMmTaz4BhL"
            />
            <PatientResources
              p1="Pin site Care"
              p2="(Patient Demonstration)"
              bg="blue-900"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/qU9UbzUEcqk?si=sMi2PNsWtFsjEQC7"
              youtubeUrl="https://youtu.be/qU9UbzUEcqk?si=sMi2PNsWtFsjEQC7"
            />
          </div>
        </div>
      </div>

      {/* Managing Your Struts Section */}
      <div className="bg-gray-200 px-8 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-teal-500 text-3xl md:text-4xl flex flex-wrap items-center font-light mb-8 tracking-wider border">
            MANAGING <span className="font-bold pl-2 md:pl-5">YOUR STRUTS</span>
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <PatientResources
              p1="Adjusting Your Struts"
              p2=""
              bg="blue-900"
              textColor="#149ECC"
              iframeSrc="https://www.youtube.com/embed/sytSPu19fUY?si=OTpK49OllmqpdELT"
              youtubeUrl=""
            />
            <PatientResources
              p1="Changing a Struts"
              p2=""
              bg="blue-900"
              textColor="#149ECC"
              iframeSrc="https://www.youtube.com/embed/1JMqagnm5gE?si=RJvdaL1o4IYd8MRl"
              youtubeUrl={""}
            />
          </div>
        </div>
      </div>

      {/* Monorail Frames Section */}
      <div className="bg-teal-500 px-8 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-blue-900 text-3xl md:text-4xl flex flex-wrap items-center font-light mb-8 tracking-wider">
            MONORAIL <span className="font-bold pl-2 md:pl-5">FRAMES</span>
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <PatientResources
              p1="Monorail adjustment"
              p2=""
              bg="blue-900"
              textColor="#149ECC"
              iframeSrc="https://www.youtube.com/embed/3x6fM2J3xE8?si=GEcbIplBEPSLGvzi"
              youtubeUrl="https://youtu.be/3x6fM2J3xE8?si=elol-sopgXjaqoIG"
            />
          </div>
        </div>
      </div>

      {/* Rehabilitation Section */}
      <div className="bg-[#149ECC] px-8 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-3xl md:text-4xl flex flex-wrap items-center font-light mb-8 tracking-wider">
            REHABILITATION
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <PatientResources
              p1="Frames Physiotherapy"
              p2=""
              bg="blue-900"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/me66wP2M5lE?si=IgjQc9G0Sq_M9Gan"
              youtubeUrl="https://youtu.be/me66wP2M5lE?si=IgjQc9G0Sq_M9Gan"
            />
            <PatientResources
              p1="Tibia/Leg Bone Physiotherapy"
              p2="Exercises Limb Lengthening"
              bg="blue-900"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/5WMtS9hiOFY?si=K2dtREXEuk5LtRH4"
              youtubeUrl="https://youtu.be/5WMtS9hiOFY?si=K2dtREXEuk5LtRH4"
            />
            <PatientResources
              p1="Femur/Thigh Bone Physiotherapy"
              p2="Exercises Limb Lengthening"
              bg="blue-900"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/vp3j5ujYq5c?si=ZjCU_s7W54O0Utzu"
              youtubeUrl="https://youtu.be/vp3j5ujYq5c?si=ZjCU_s7W54O0Utzu"
            />
            <PatientResources
              p1="Physiotherapy Exercises for"
              p2="Lower Limb External Fixators"
              bg="blue-900"
              textColor="white"
              iframeSrc="https://www.youtube.com/embed/5MjZ4RoJK84?si=f8o4IFEe7XNtVSvA"
              youtubeUrl="https://youtu.be/5MjZ4RoJK84?si=f8o4IFEe7XNtVSvA"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#003683] text-white flex justify-center items-center flex-col px-8 py-12 gap-4">
        <div className="flex items-center gap-4">
          <Download className="w-20 h-20 text-teal-500" />
          <h1>reading material</h1>
        </div>
        <p className="sm:text-xl md:text-2xl">
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
