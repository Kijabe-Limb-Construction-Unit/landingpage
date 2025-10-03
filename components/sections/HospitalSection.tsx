import Image from "next/image";

export function HospitalSection() {
  return (
    <section className="bg-[#4FB29E] overflow-x-hidden">
      {/* Hospital Section desktop view*/}
      <div className="text-white hidden md:flex">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          <div className="p-12 px-40 w-full">
            <div className="flex md:justify-end md:items-end">
              <div className="w-full">
                <h1 className="text-8xl text-heading font-light mb-8">
                  the <span className="font-bold text-blue-900">hospital</span>
                </h1>
              </div>
            </div>
            <Image
              src="/hospital-line.svg"
              width={600}
              height={400}
              alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
              className="relative z-10 bottom-10 right-50 w-[100vw] object-cover"
            />
            <div className="leading-relaxed space-y-4 text-blue-900 flex md:justify-end md:items-end">
              <p className="w-full md:max-w-5xl">
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
          <Image
            src="/hospital-1.png"
            width={600}
            height={400}
            alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* Hospital Section mobile view*/}
      <div className="text-white md:hidden mx-5 md:mx-0">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          {/* Left side - Text content */}
          <div className="flex">
            {/* <div className="w-full"> */}
            <h1 className="text-8xl text-heading font-light mb-8">
              the <span className="font-bold text-blue-900">hospital</span>
            </h1>
            {/* </div> */}
          </div>
          <Image
            src="/hospital-line.svg"
            width={600}
            height={400}
            alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
            className="relative z-10 bottom-5 right-20 w-[100vw] object-cover"
          />
          <div className="leading-relaxed space-y-4 text-blue-900 flex justify-end items-end">
            <p className="w-full md:max-w-5xl">
              <span className="font-bold">Kijabe Hospital</span> is a renowned
              center of excellence in healthcare and medical training, serving
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
            src="/hospital-1.png"
            width={600}
            height={400}
            alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
