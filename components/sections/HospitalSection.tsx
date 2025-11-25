import Image from "next/image";
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
});

export function HospitalSection() {
  return (
    <section className="bg-[#4FB29E] overflow-x-hidden">
      {/* Hospital Section desktop view*/}
      <div className="text-white hidden md:flex">
        <div className="mx-auto w-full max-w-8xl flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-1/2 flex flex-col justify-start min-h-[560px] lg:min-h-[720px]">
             {/* border-3 md:border-red-600 lg:border-blue-600 xl:border-green-600 */}
            <div className="lg:w-[100vw] z:0 relative md:-left-25 lg:-left-0 top-25 md:top-35 lg:bottom-5 my-5 h-10">
              {/* LG CREENS */}
              <Image
                src="/hosp-line.svg"  
                width={600}
                height={400}
                alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
                className="w-full relative lg:top-15 lg:-left-55 xl:-left-[20rem] xl:top-5 hidden lg:block"
              />
              {/* MD CREENS */}
              <Image
                src="/hosp-line.svg"  
                width={600}
                height={400}
                alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
                className="w-[110vw] relative md:left-25 md:bottom-5 hidden md:block lg:hidden "
              />
              {/* SMALL SCREENS */}
              <Image
                src="/hosp-line.svg"
                width={600}
                height={400}
                alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
                className="w-full block md:hidden"
              />
            </div>
            <div className="flex md:justify-center px-20">
              <div className="w-full ml-20 md:-mr-30 lg:-ml-5 xl:-ml-0">
                 {/* border md:border-red-600 lg:border-blue-600 xl:border-green-600 */}
                <h1 className="text-4xl md:text-5xl font-light lg:text-6xl xl:text-7xl lg:pl-0 xl:pl-10 w-full text-heading md:ml-5 mb-6 sm:mb-8">
                  the <span className={`font-semibold text-blue-900 ${josefin.className}`}>hospital</span>
                </h1>
              </div>
            </div>

            <div className="flex-1 flex items-center leading-relaxed space-y-4 px-20 text-blue-900 lg:px-2 xl:px-20 mt-10 lg:mt-20">
              <p className="w-full lg:my-20 pl-30 md:ml-0 leading-relaxed space-y-5 text-justify hyphens-none pr-6 lg:pr-8 xl:pr-10 text-sm sm:text-base md:text-lg">
                <span className="font-bold">Kijabe Hospital</span> is a renowned
                center of excellence in healthcare and medical training, serving
                patients from across Kenya and beyond. Nestled on the scenic
                escarpment overlooking the{" "}
                <span className="font-bold">Great Rift Valley</span>, it
                combines{" "}
                <span className="font-bold">
                  world-class care with a vibrant teaching environment
                </span>{" "}
                that equips the next generation of African healthcare
                professionals. Located in the welcoming village of Kijabe, the
                hospital forms part of a unique medical community alongside
                another neighbouring mission hospital, fostering collaboration
                and innovation in a serene, picturesque setting.
              </p>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 min-h-[560px] lg:min-h-[720px]">
            <Image
              src="/hospital-1.jpeg"
              width={1200}
              height={800}
              alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Hospital Section mobile view*/}
      <div className="text-white md:hidden my-5 md:mx-0">
        <div className="mx-auto w-full max-w-7xl  grid lg:grid-cols-2 gap-0 items-center">
          {/* Left side - Text content */}
          <div className="flex px-5">
            {/* <div className="w-full"> */}
            <h1 className="text-5xl sm:text-6xl text-heading font-light mb-6 sm:mb-8">
              the <span className="font-bold text-blue-900">hospital</span>
            </h1>
            {/* </div> */}
          </div>
          <Image
            src="/hosp-line.svg"
            width={600}
            height={400}
            alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
            className="sticky md:absolute z-30 -mt-5 mb-5 md:pt-5 w-[100%] object-cover"
          />
          <div className="leading-relaxed space-y-4 text-blue-900 flex justify-end px-5 items-end">
            <p className="w-full md:max-w-5xl text-justify hyphens-none text-sm sm:text-base md:text-lg">
              <span className="font-bold">Kijabe Hospital</span> is a renowned
              centre of excellence in healthcare and medical training, serving
              patients from across Kenya and beyond. Nestled on the scenic
              escarpment overlooking the{" "}
              <span className="font-bold">Great Rift Valley</span>, it combines{" "}
              <span className="font-bold">
                world-class care with a vibrant teaching environment
              </span>{" "}
              that equips the next generation of African healthcare
              professionals. Located in the welcoming village of Kijabe, the
              hospital forms part of a unique medical community alongside
              another neighbouring mission hospital, fostering collaboration and
              innovation in a serene, picturesque setting.
            </p>
          </div>
          {/* Right side - Hospital aerial image */}
          <Image
            src="/hospital-1.svg"
            width={600}
            height={400}
            alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
            className="h-full w-full object-cover -mb-10 xl:-mb-0"
          />
        </div>
      </div>
    </section>
  );
}
