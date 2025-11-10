import Image from "next/image";

export function HospitalSection() {
  return (
    <section className="bg-[#4FB29E] overflow-x-hidden">
      {/* Hospital Section desktop view*/}
      <div className="text-white hidden md:flex">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          <div className="w-full">
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
                <h1 className="text-5xl md:text-5xl font-bold lg:text-7xl lg:pl-0 xl:pl-10 w-full text-heading md:ml-5 mb-8">
                  the <span className="font-bold text-blue-900">hospital</span>
                </h1>
              </div>
            </div>

            <div className="leading-relaxed space-y-4 px-20 text-blue-900 flex md:justify-center md:items-center lg:justify-end lg:px-2 xl:px-20 mt-10 lg:mt-20">
              <p className="w-full lg:mt-20 pl-30 md:ml-0 text-3xl">
                <span className="font-bold">Kijabe Hospital</span> is a renowned
                center of excellence in healthcare and medical training<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> serving
                patients from across Kenya and beyond. Nestled on the scenic
                escarpment overlooking the{" "}
                <span className="font-bold">Great Rift Valley</span><span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> it
                combines{" "}
                <span className="font-bold">
                  world-class care with a vibrant teaching environment
                </span>{" "}
                that equips the next generation of African healthcare
                professionals. Located in the welcoming village of Kijabe<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> the
                hospital forms part of a unique medical community alongside
                another neighbouring mission hospital<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> fostering collaboration
                and innovation in a serene<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> picturesque setting.
              </p>
            </div>
          </div>
          <div className="relative w-full h-auto max-h-[55rem] flex items-stretch hp-cont">
            <Image
              src="/hospital-1.svg"
              width={600}
              height={400}
              alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
              className="z-10 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Hospital Section mobile view*/}
      <div className="text-white md:hidden my-5 md:mx-0">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          {/* Left side - Text content */}
          <div className="flex px-5">
            {/* <div className="w-full"> */}
            <h1 className="text-7xl text-heading font-light mb-8">
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
            <p className="w-full md:max-w-5xl">
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
