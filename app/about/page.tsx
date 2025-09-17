import Image from 'next/image';
import { aboutData } from '@/lib/fakes/about-fakes';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#4FB29E] to-[#149ECC] relative overflow-hidden py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-white space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-header">
                                    {aboutData.hero.title}
                                </h1>
                                <h2 className="text-semi-header font-bold tracking-wider uppercase">
                                    {aboutData.hero.subtitle}
                                </h2>
                            </div>
                            
                            <p className="text-body leading-relaxed max-w-lg">
                                {aboutData.hero.description}
                            </p>
                            
                            {/* Patient Stories Card */}
                            <div className="relative max-w-sm">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <div className="flex items-center justify-center text-center">
                                        <div className="text-semi-header font-bold">
                                            <span className="text-white">{aboutData.hero.patientStoriesText?.split(' ')[0] || 'patient'}</span><br />
                                            <span className="text-[#DFFF80]">{aboutData.hero.patientStoriesText?.split(' ')[1] || 'stories'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Content - Images */}
                        <div className="relative">
                            <div className="relative z-10">
                                <Image
                                    src="/question-mark-3d.svg"
                                    alt="3D Question mark"
                                    width={200}
                                    height={200}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 z-0">
                                <Image
                                    src="/question-mark.svg"
                                    alt="Question marks"
                                    width={300}
                                    height={400}
                                    className="opacity-60"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Answer Section */}
            <section className="bg-gradient-to-r from-[#149ECC] to-[#4FB29E] py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Image */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative">
                                <Image
                                    src="/IMG4.jpg"
                                    alt="Patient and medical staff"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -top-6 -left-6 z-10">
                                    <Image
                                        src="/ticks-light.svg"
                                        alt="Tick marks"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Right - Content */}
                        <div className="text-white space-y-6 order-1 lg:order-2">
                            <div className="flex items-center gap-4">
                                <h2 className="text-header">
                                    {aboutData.answer.title}
                                </h2>
                                <Image
                                    src="/tick-blue.svg"
                                    alt="Blue tick"
                                    width={60}
                                    height={60}
                                    className="flex-shrink-0"
                                />
                            </div>
                            
                            <div className="text-body leading-relaxed">
                                {(() => {
                                    const desc = aboutData.answer.description;
                                    const highlight = 'equalise access to limb reconstruction surgery by providing world-class, compassionate specialist surgical care';
                                    if (!desc || !desc.includes(highlight)) return desc;
                                    
                                    const parts = desc.split(highlight);
                                    return (
                                        <>
                                            {parts[0]}
                                            <span className="font-bold text-[#003683] bg-white/20 px-2 py-1 rounded"> {highlight} </span>
                                            {parts[1]}
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="bg-[#003683] py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white space-y-6">
                            <h2 className="text-header">
                                {aboutData.vision.title}
                            </h2>
                            <div className="text-body leading-relaxed">
                                {(() => {
                                    const desc = aboutData.vision.description;
                                    const highlight = 'Kijabe Limb Reconstruction Unit';
                                    if (!desc || !desc.includes(highlight)) return desc;
                                    
                                    const parts = desc.split(highlight);
                                    return (
                                        <>
                                            {parts[0]}<span className="font-bold text-[#DFFF80]">{highlight}</span>{parts[1]}
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                        
                        <div className="flex justify-center">
                            <Image
                                src="/africa-map-light.svg"
                                alt="Map of Africa"
                                width={300}
                                height={400}
                                className="drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Surgeon Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Image */}
                        <div className="relative">
                            <div className="relative">
                                <Image
                                    src="/mbonisi.png"
                                    alt="Dr. Mbonisi Malaba"
                                    width={500}
                                    height={600}
                                    className="rounded-2xl shadow-2xl object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-[#003683] text-white p-4 rounded-xl shadow-lg">
                                    <div className="text-center">
                                        <div className="text-semi-header font-bold">Dr. Mbonisi</div>
                                        <div className="text-body">Malaba</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right - Content */}
                        <div className="text-[#003683] space-y-6">
                            <h2 className="text-header">
                                {aboutData.surgeon.title}
                            </h2>
                            
                            <div className="space-y-4">
                                <h3 className="text-semi-header font-bold tracking-wider uppercase">
                                    {aboutData.surgeon.name}
                                </h3>
                                
                                <div className="text-body leading-relaxed">
                                    {(() => {
                                        const role = aboutData.surgeon.role;
                                        const highlight = 'Kijabe Limb Reconstruction Unit';
                                        if (!role || !role.includes(highlight)) return role;
                                        
                                        const parts = role.split(highlight);
                                        const firstPart = parts[0];
                                        const secondPart = parts[1]?.split(' ')[0] || '';
                                        
                                        return (
                                            <>
                                                {firstPart}<br />{secondPart} { ' '}
                                                <span className="font-bold text-[#149ECC]">
                                                    Kijabe Limb <br /> Reconstruction Unit
                                                </span>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>
                            
                            <p className="text-body leading-relaxed">
                                {aboutData.surgeon.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Color Pattern Divider */}
            <section className="flex h-3">
                <div className="bg-[#149ECC] flex-1"></div>
                <div className="bg-[#4FB29E] flex-1"></div>
                <div className="bg-[#C7D886] flex-1"></div>
                <div className="bg-[#003683] flex-1"></div>
            </section>

            {/* The Hospital Section */}
            <section className="bg-gradient-to-br from-[#4FB29E] to-[#149ECC] py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div className="text-white space-y-6">
                            <h2 className="text-header">
                                {aboutData.hospital.title}
                            </h2>
                            
                            <div className="relative">
                                <p className="text-body leading-relaxed text-[#003683]">
                                    {aboutData.hospital.description}
                                </p>
                                
                                <div className="absolute -top-4 -right-4">
                                    <Image
                                        src="/hospital-icon.svg"
                                        alt="Hospital icon"
                                        width={120}
                                        height={120}
                                        className="drop-shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Right - Image */}
                        <div className="relative">
                            <Image
                                src="/hospital.png"
                                alt="Aerial view of Kijabe Hospital"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Need Section */}
            <section className="bg-gradient-to-r from-[#149ECC] to-[#4FB29E] py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div className="text-white space-y-6">
                            <h2 className="text-header">
                                {aboutData.need.title}
                            </h2>
                            
                            <p className="text-body leading-relaxed">
                                {aboutData.need.description}
                            </p>
                        </div>
                        
                        {/* Right - Images */}
                        <div className="relative">
                            <div className="relative z-10">
                                <Image
                                    src="/bone-about.svg"
                                    alt="Bone illustration"
                                    width={300}
                                    height={300}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 z-0">
                                <Image
                                    src="/bone-about-light.svg"
                                    alt="Bone illustration light"
                                    width={200}
                                    height={200}
                                    className="opacity-60"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}