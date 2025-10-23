import Image from "next/image";

export function PatientStoriesSection() {
  return (
    <section className="relative py-10 px-4 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          {/* Large background speech bubbles */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            {/* Left large speech bubble */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-8 opacity-70">
              <Image src="/msg-right.svg" alt="Message Bubble" width={200} height={200} className="w-12 h-12 md:w-40 md:h-40 lg:w-20 lg:h-20" />
            </div>

            {/* Right large speech bubble */}
            <div className="absolute right-15 top-2/3 -translate-y-1/2 translate-x-8 opacity-80">
              <Image src="/msg-left.svg" alt="Message Bubble" width={200} height={200} className="w-32 h-32 md:w-40 md:h-40 lg:w-20 lg:h-20" />
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <Image src="/msg-left.svg" alt="Message Bubble" width={200} height={200} className="absolute top-20 left-1/3 w-30 h-30" />
            <Image src="/message-bg.svg" alt="Message Bubble" width={200} height={200} className="absolute bottom-25 right-1/4 w-35 h-35" />
          </div>

          {/* Main content - positioned above background elements */}
          <div className="relative z-10 space-y-4">
            <h1 className="text-[#003683] font-bold mb-4  text-5xl md:text-7xl lg:text-9xl">
              patient <span className="font-medium">stories</span>
            </h1>
            <p className="text-[#003683] font-bold -mt-5">
              Click below{" "}
              <span className="font-sm text-2xl">
                to hear some of our patients share their incredible
              </span>
              <br />
              <span className="font-bold text-4xl">
                stories of transformation!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
