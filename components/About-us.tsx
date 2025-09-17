import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* About Us Section */}
      <section className="bg-[#4FB29E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left - Question marks */}
            <div className="hidden lg:flex justify-center">
              <Image
                src="/question-mark.svg"
                alt="Question marks"
                width={200}
                height={250}
                className=""
              />
            </div>

            {/* Center - Content */}
            <div className="text-white space-y-6">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-4xl font-light">
                    <span className="font-bold">about</span> us
                  </h1>
                  <h2 className="text-xl font-bold tracking-wider uppercase mt-2">
                    THE NEED
                  </h2>
                </div>
                <Image
                  src="/question-mark-3d.svg"
                  alt="3D Question mark"
                  width={60}
                  height={60}
                  className=""
                />
              </div>

              <p className="text-base leading-relaxed font-light max-w-md">
                There is a little-known epidemic. Conditions such as childhood
                deformity, neglected trauma and infected fractures cause massive
                suffering globally. This results in a significant physical,
                psychological and social burden as well as often catastrophic
                healthcare-related costs and loss of income.
              </p>
            </div>

            {/* Right - Patient stories */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/chatbox.svg"
                  alt="Patient stories chatbox"
                  width={160}
                  height={160}
                  className=""
                />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-lg font-light leading-tight text-center">
                    <span className="font-bold">patient</span>
                    <br />
                    stories
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Answer Section */}
      <section className="bg-[#149ECC] py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left - Ticks */}
            <div className="hidden lg:flex justify-center">
              <Image
                src="/ticks-light.svg"
                alt="Tick marks"
                width={150}
                height={200}
              />
            </div>

            {/* Center - Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm h-64">
                <Image
                  src="/IMG4.jpg"
                  alt="Patient and medical staff"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="text-white space-y-6">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold tracking-wider uppercase">
                  THE ANSWER
                </h2>
                <Image
                  src="/tick-blue.svg"
                  alt="Blue tick"
                  width={30}
                  height={30}
                />
              </div>

              <p className="text-base leading-relaxed font-light">
                Limb reconstruction is a field of orthopaedic surgery that is at
                the cutting edge of the treatment of limb deformities,
                fracture-related infection and poorly healing fractures. The
                Kijabe Limb Reconstruction Unit exists to
                <span className="font-bold text-[#003683]">
                  {" "}
                  equalise access to limb reconstruction surgery by providing
                  world-class, compassionate specialist surgical care{" "}
                </span>
                to patients whilst serving as a first-of-a-kind training centre
                for surgical trainees and fellows nationally and regionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="bg-[#003683] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold tracking-wider uppercase">
                THE VISION
              </h2>
              <p className="text-base leading-relaxed font-light">
                The vision of the{" "}
                <span className="font-bold">
                  Kijabe Limb Reconstruction Unit
                </span>{" "}
                is a world where men, women and children can access the limb
                reconstruction care they need, when they need it - regardless of
                where they were born or how much money they happen to have.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/africa-map-light.svg"
                alt="Map of Africa"
                width={200}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Surgeon Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-96">
              <Image
                src="/mbonisi.png"
                alt="Dr. Mbonisi Malaba"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="text-[#003683] space-y-6">
              <h2 className="text-4xl font-bold">meet the surgeon</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-bold tracking-wider uppercase">
                  DR. MBONISI MALABA
                </h3>
                <p className="text-base font-light">
                  Orthopaedic and Limb Reconstruction Surgeon, Founder of{" "}
                  <span className="font-bold">
                    Kijabe Limb Reconstruction Unit
                  </span>
                </p>
              </div>

              <p className="text-base leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Strip */}
      <div className="flex h-2">
        <div className="bg-[#149ECC] flex-1"></div>
        <div className="bg-[#4FB29E] flex-1"></div>
        <div className="bg-[#C7D886] flex-1"></div>
        <div className="bg-[#003683] flex-1"></div>
      </div>

      {/* The Hospital Section */}
      <section className="bg-[#4FB29E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-light">
                the <span className="font-bold">hospital</span>
              </h2>

              <div className="flex items-start gap-4">
                <p className="text-base leading-relaxed font-light text-[#003683] flex-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <Image
                  src="/hospital-icon.svg"
                  alt="Hospital icon"
                  width={80}
                  height={80}
                  className="flex-shrink-0"
                />
              </div>
            </div>

            <div className="relative h-64">
              <Image
                src="/hospital.png"
                alt="Aerial view of Kijabe Hospital"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Need for Reconstruction Surgery Section */}
      <section className="bg-[#149ECC] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left - Bone icon */}
            <div className="hidden lg:flex justify-center">
              <Image
                src="/bone-about.svg"
                alt="Bone illustration"
                width={200}
                height={200}
              />
            </div>

            {/* Center - Content */}
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-light leading-tight">
                the need for{" "}
                <span className="font-bold">reconstruction surgery</span>
              </h2>

              <p className="text-base leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>

            {/* Right - Light bone icon */}
            <div className="hidden lg:flex justify-center">
              <Image
                src="/bone-about-light.svg"
                alt="Light bone illustration"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
