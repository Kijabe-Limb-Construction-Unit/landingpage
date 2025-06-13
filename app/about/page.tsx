import Image from 'next/image';

export default function AboutPage() {

    const mobileColorPattern = [
        { bgColor: 'bg-[#149ECC]' },
        { bgColor: 'bg-[#4FB29E]' },
        { bgColor: 'bg-[#C7D886]' },
        { bgColor: 'bg-[#083783]' },

    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-[#4FB29E] flex items-center relative overflow-hidden">
                <div className="container mx-auto px-8 lg:px-0 py-16 relative">
                    <div className="flex flex-row gap-8 items-center h-full">
                        <div className="hidden lg:flex justify-center items-center">
                            <Image
                                src="/question-mark.svg"
                                alt="Question marks"
                                width={300}
                                height={400}
                                className=""
                            />
                        </div>
                        <div className="text-white space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="space-y-4">
                                <div className="flex flex-row gap-6">
                                    <div>
                                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">
                                            <span className="font-bold">about</span> us
                                        </h1>
                                        <h2 className="text-xl md:text-2xl font-light tracking-wider uppercase">
                                            THE NEED
                                        </h2>
                                    </div>
                                    <Image
                                        src="/question-mark-3d.svg"
                                        alt="3D Question mark"
                                        width={80}
                                        height={80}
                                        className=""
                                    />
                                </div>
                            </div>

                            <p className="text-lg md:text-xl text-left z-10 leading-relaxed font-light max-w-lg">
                                There is a little-known epidemic. Conditions such as childhood deformity,
                                neglected trauma and infected fractures cause massive suffering globally. This
                                results in a significant physical, psychological and social burden as well as often
                                catastrophic healthcare-related costs and loss of income.
                            </p>
                            <div className="lg:hidden absolute z-0 top-56">
                                <Image
                                    src="/question-mark.svg"
                                    alt="Question marks"
                                    width={200}
                                    height={150}
                                    className=""
                                />
                            </div>
                        </div>

                        <div className="flex justify-center items-start lg:items-center">
                            <div className="relative">
                                <Image
                                    src="/chatbox.svg"
                                    alt="Patient stories chatbox"
                                    width={150}
                                    height={150}
                                    className=""
                                />
                                <div className="absolute bottom-6 md:bottom-8 inset-0 flex items-center justify-center text-center text-white">
                                    <div className="text-lg md:text-xl lg:text-3xl font-light leading-tight">
                                        <span className="font-bold">patient</span><br />stories
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#149ECC] relative overflow-hidden h-[80vh] flex items-center">
                <div className="container mx-auto px-8 lg:px-0 py-16 relative h-full flex flex-row items-center justify-between">

                    <div className="hidden lg:flex justify-center items-center w-1/7 z-10">
                        <Image
                            src="/ticks-light.svg"
                            alt="Tick marks"
                            width={200}
                            height={300}
                        />
                    </div>

                    <div className="hidden lg:block absolute top-0 bottom-0 left-[400px] transform -translate-x-1/2 w-[400px] z-0">
                        <Image
                            src="/IMG4.jpg"
                            alt="Patient and medical staff"
                            fill
                            className="object-cover h-full w-full"
                        />
                    </div>

                    <div className="text-white space-y-4 flex flex-col justify-center w-full lg:w-2/6 z-10">
                        <div className="flex items-center space-x-4">
                            <h2 className="text-xl md:text-2xl tracking-wider font-bold uppercase">
                                THE ANSWER
                            </h2>
                            <Image
                                src="/tick-blue.svg"
                                alt="Blue tick"
                                width={40}
                                height={40}
                            />
                        </div>

                        <div className="space-y-2 text-lg leading-relaxed font-light">
                            <p>
                                Limb reconstruction is a field of orthopaedic surgery that is at the cutting
                                edge of the treatment of limb deformities, fracture-related infection and
                                poorly healing fractures. The Kijabe Limb Reconstruction Unit exists to
                            </p>
                            <p className="font-bold text-[#083783]">
                                equalise access to limb reconstruction surgery by providing world-class,
                                compassionate specialist surgical care
                            </p>

                            <p>
                                to patients whilst serving as a first-of-a-kind training centre for surgical
                                trainees and fellows nationally and regionally. The goal of this unit is to do
                                this at little or no cost to the under-privileged.
                            </p>
                        </div>
                    </div>

                    <div className="lg:hidden absolute bottom-56 left-28">
                        <Image
                            src="/ticks-light.svg"
                            alt="Tick marks"
                            width={150}
                            height={100}
                        />
                    </div>

                </div>
            </section>

            <section className="bg-[#083783]">
                <div className="container mx-auto px-8 lg:px-0 py-16">
                    <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                        <div className="text-white space-y-8">
                            <h2 className="text-xl md:text-2xl font-bold tracking-wider uppercase">
                                THE VISION
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed font-light">
                                The vision of the <span className="font-bold">Kijabe Limb Reconstruction Unit</span> is
                                a world where men, women and children can access the limb reconstruction care they
                                need, when they need it - regardless of where they were born or how much money they
                                happen to have.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/africa-map-light.svg"
                                alt="Map of Africa"
                                width={300}
                                height={400}
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:hidden h-[250px] relative">
                <Image
                    src="/mbonisi.png"
                    alt="Dr. Mbonisi Malaba"
                    fill
                    className="object-cover object-top"
                />
            </section>
            <section className="bg-white h-[500px] relative">
                <div className="container mx-auto px-8 lg:px-0 relative h-full">
                    <div className="hidden lg:flex w-full h-full relative">
                        <div className="absolute -left-24 top-0 bottom-0 h-full w-[400px]">
                            <Image
                                src="/mbonisi.png"
                                alt="Dr. Mbonisi Malaba"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="ml-[450px] flex items-center w-full">
                            <div className="text-[#083783] space-y-8 w-full">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                    meet the surgeon
                                </h2>

                                <div className="space-y-4">
                                    <h3 className="text-xl md:text-2xl font-bold tracking-wider uppercase">
                                        DR. MBONISI MALABA
                                    </h3>
                                    <p className="text-lg font-light ">
                                        Orthopaedic and Limb Reconstruction Surgeon, founder of{' '}
                                        <span className="font-bold text-[#083783]">
                                            Kijabe Limb Reconstruction Unit
                                        </span>
                                    </p>
                                </div>

                                <div className="space-y-4 text-base md:text-lg leading-relaxed font-light ">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden h-full">
                        <div className="flex w-full h-full">
                            <div className="flex items-center w-full">
                                <div className="text-[#083783] space-y-8 w-full">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                        meet the surgeon
                                    </h2>

                                    <div className="space-y-4">
                                        <h3 className="text-xl md:text-2xl font-bold tracking-wider uppercase">
                                            DR. MBONISI MALABA
                                        </h3>
                                        <p className="text-lg font-light ">
                                            Orthopaedic and Limb Reconstruction Surgeon, founder of{' '}
                                            <span className="font-bold text-[#083783]">
                                            Kijabe Limb Reconstruction Unit
                                        </span>
                                        </p>
                                    </div>

                                    <div className="space-y-4 text-base md:text-lg leading-relaxed font-light ">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative flex h-3">
                {mobileColorPattern.map((item, index) => (
                    <div
                        key={index}
                        className={`${item.bgColor} flex-1`}
                    />
                ))}
            </section>
            <section className="bg-[#4FB29E] h-[400px] flex items-center">

                <div className="container mx-auto px-8 lg:px-0 relative h-full">
                    <div className="hidden lg:flex w-full h-full relative">
                        <div className="mr-[450px] flex items-center w-full">
                            <div className="text-white space-y-8 w-full">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
                                    the <span className="font-bold">hospital</span>
                                </h2>

                                <div className="flex items-start justify-between gap-4">
                                    <p className="text-lg md:text-xl leading-relaxed font-light text-[#083783] text-left">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                                        Ut enim ad minim veniam, quis nostrud exercitation.<br />
                                        Ullamco laboris nisi ut aliquip.<br />
                                        Ex ea commodo consequat.<br />
                                        Duis aute irure dolor.<br />
                                        In voluptate.
                                    </p>
                                    <div className="flex-shrink-0 pt-12">
                                        <Image
                                            src="/hospital-icon.svg"
                                            alt="Hospital icon"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -right-18 top-12 bottom-0 h-[300px] w-[500px]">
                            <Image
                                src="/hospital.png"
                                alt="Aerial view of Kijabe Hospital"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:hidden h-full">
                        <div className="flex w-full h-full">
                            <div className="flex items-center w-full">
                                <div className="text-white space-y-6 w-full">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
                                        the <span className="font-bold">hospital</span>
                                    </h2>

                                    <div className="flex items-start justify-between gap-4">
                                        <p className="text-base md:text-lg leading-relaxed font-light text-[#083783]">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                        </p>

                                        <div className="flex-shrink-0">
                                            <Image
                                                src="/hospital-icon.svg"
                                                alt="Hospital icon"
                                                width={150}
                                                height={150}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:hidden h-[180px] relative">
                <Image
                    src="/hospital.png"
                    alt="Aerial view of Kijabe Hospital"
                    fill
                    className="object-cover"
                />
            </section>

            <section className="bg-[#149ECC] flex items-center">
                <div className="container mx-auto px-8 lg:px-0 py-16">
                    <div className="flex flex-row gap-8 items-start">
                        <div className="hidden lg:flex justify-center items-center">
                            <Image
                                src="/bone-about.svg"
                                alt=""
                                width={250}
                                height={250}
                                className=""
                            />
                        </div>

                        <div className="text-white space-y-8 relative">
                            <h2 className="text-4xl md:text-5xl font-light leading-tight">
                                the need for <span className="font-bold">reconstruction surgery</span>
                            </h2>
                            <div className="flex flex-row gap-4">
                                <div className="space-y-6 text-lg md:text-xl leading-relaxed font-light relative">
                                    <div className="flex flex-row gap-4">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                        <div className="flex lg:hidden justify-center items-center">
                                            <Image
                                                src="/bone-about.svg"
                                                alt=""
                                                width={700}
                                                height={700}
                                            />
                                        </div>
                                    </div>

                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ocia
                                        deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.
                                        Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra,
                                        est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                                        Integer in mauris eu nibh euismod gravida.
                                    </p>

                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur.
                                    </p>


                                </div>
                                <div className="hidden lg:flex justify-center items-center">
                                    <Image
                                        src="/bone-about-light.svg"
                                        alt=""
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}