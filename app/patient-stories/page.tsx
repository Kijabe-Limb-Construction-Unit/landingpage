import Mboniso from "@/public/mbonisi.png";
import Bovin from "@/public/bovin.png";
import Moses from "@/public/moses.png";
import YoutubeIcon from "@/public/youtube.svg"
import YoutubeBlue from "@/public/youtube-blue.svg"
import Image from "next/image";

const patientTestimonies = [
  {
    id: 1,
    name: "Bovin",
    testimonial: "I feel so happy 'cause now I can walk.",
    fullStory:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.",
    image: Bovin,
    bgColor: "bg-[#4FB29E]",
    youtubeLink: "https://www.youtube.com/watch?v=bovin-example"
  },
  {
    id: 2,
    name: "Moses",
    testimonial: "I can go back to my work",
    fullStory:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.",
    image: Moses,
    bgColor: "bg-[#149ECC]",
    youtubeLink: "https://www.youtube.com/watch?v=moses-example"
  },
];

export default function PatientStories() {
  return (
    <section className="">
      <div className="bg-[#003882]">
        <div className="container grid grid-cols-5 mx-auto px-0 md:px-4 md:max-w-2xl lg:max-w-4xl">
          <div className="col-span-2">
            <Image 
              src={Mboniso} 
              alt="Dr. Mboni Simala" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="text-[#003882] col-span-3 bg-white p-5 md:p-10 relative overflow-hidden">
            {/* Message SVG Backgrounds */}
            <Image 
              src ="/message-bubble.svg"
              className="absolute top-5 right-5 md:top-9 md:right-28 lg:right-52 w-40 h-32 z-0" 
              alt="Donate" width={200} height={150}
            />
            
            
            <Image 
              src ="/message.svg"
              className="absolute top-40 left-14 w-32 lg:top-32 lg:left-20 h-32 z-0" 
              alt="Donate" width={200} height={150}
            />
            <Image 
              src ="/message.svg"
              className="absolute bottom-3 right-8 md:bottom-8 md:right-10 lg:right-24 w-24 h-24 z-0" 
              alt="Donate" width={200} height={150}
            />
            
            {/* Content */}
            <div className="relative z-10">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                Patient <span className="font-light">Stories</span>
              </h1>
              <div className="mb-4">
                <h3 className="text-sm font-light mb-2 tracking-wide">DR MBONI SIMALA</h3>
                <p className="font-bold text-lg italic leading-tight">
                &#34;A world where men, women and children can access the limb 
                  reconstruction care they need, when they need it, irrespective 
                  of where they were born or how much money they happen to have, 
                </p>
                <div className="flex flex-row items-center gap-2 mt-2">
                  <div className="flex">
                    <a 
                      href="https://www.youtube.com/watch?v=example" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center bg-[#003882] rounded-lg p-1 w-14 md:h-12 h-auto hover:bg-[#002a6b] transition-colors duration-200"
                    >
                      <Image 
                        src={YoutubeIcon} 
                        alt="YouTube Icon" 
                        className="w-full h-full md:h-14 object-contain"
                      />
                    </a>
                  </div>
                  <p className="text-lg italic font-bold">
                    they deserve the best that we can give.&#34;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
          <div className="grid grid-cols-1 gap-0">
            {patientTestimonies.map((patient, index) => {
              const isOdd = index % 2 === 0;
              
              return (
                <div 
                  key={patient.id} 
                  className={`${patient.bgColor}`}
                >
                  <div className="container mx-auto px-0 md:px-4 md:max-w-2xl lg:max-w-4xl">
                    <div className="grid grid-cols-5">
                      {isOdd ? (
                        <>
                          <div className="col-span-3 p-4 md:p-10 text-white">
                            <h3 className="text-sm font-light  mb-2">
                              {patient.name.toUpperCase()}
                            </h3>
                            <p className="text-xl font-bold italic mb-4">
                              &#34;{patient.testimonial}&#34;
                            </p>
                            <p className="text- font-light mb-4">
                              {patient.fullStory}
                            </p>
                            <div className="flex justify-end">
                              <a 
                                href={patient.youtubeLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center bg-white rounded-lg p-1 w-14 md:h-12 h-auto hover:bg-gray-300 transition-colors duration-200"
                              >
                                <Image 
                                  src={YoutubeBlue} 
                                  alt="YouTube Icon" 
                                  className="w-full h-full md:h-14 object-contain fill"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <Image 
                              src={patient.image} 
                              alt={patient.name} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-span-2">
                            <Image 
                              src={patient.image} 
                              alt={patient.name} 
                              className="w-full h-full object-cover object-top" 
                            />
                          </div>
                          <div className="col-span-3 p-4 text-white md:p-10">
                            <h3 className="text-sm font-light mb-2">
                             {patient.name.toUpperCase()}
                            </h3>
                            <p className="text-xl  font-bold italic mb-4">
                               &#34;{patient.testimonial} &#34;
                            </p>
                            <p className="text- font-light mb-4">
                              {patient.fullStory}
                            </p>
                            <div className="flex justify-start">
                              <a 
                                href={patient.youtubeLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center bg-white rounded-lg p-1 w-14 md:h-12 h-auto hover:bg-gray-300 transition-colors duration-200"
                              >
                                <Image 
                                  src={YoutubeBlue} 
                                  alt="YouTube Icon" 
                                  className="w-full h-full md:h-14 object-contain"
                                />
                              </a>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
}