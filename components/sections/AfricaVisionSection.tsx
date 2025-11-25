import Image from "next/image";

export function AfricaVisionSection() {
  return (
    <div className="w-full bg-[#003683] text-white p-6 sm:p-8 md:p-16 lg:p-20 relative">
      <h3 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 font-light uppercase lg:mb-12">The Vision</h3>
      
      {/* Mobile and tablet view - stacked layout */}
      <div className="lg:hidden space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl font-light leading-relaxed">
        <p className="text-justify hyphens-auto">
          The vision of the <span className="font-bold">Kijabe Limb Reconstruction Unit</span> is a world where men, women and children <span className="font-bold text-[#4FB29E]">CAN ACCESS THE LIMB RECONSTRUCTION CARE THAT THEY NEED</span>, when they need it, regardless of where they were born or how much money they happen to have.
        </p>
        <p className="text-justify hyphens-auto">
          Towards this end, we are developing a centre of excellence in Kijabe, Kenya that trains <span className="font-extrabold text-[#4FB29E] text-lg sm:text-xl md:text-xl lg:text-xl">10 limb reconstruction surgeons</span> from <span className="font-extrabold text-[#4FB29E] text-lg sm:text-xl md:text-xl lg:text-xl">10 sub-Saharan countries</span> in the <span className="font-extrabold text-[#4FB29E] text-lg sm:text-xl md:text-xl lg:text-xl">next 10 years</span>, <span className="font-bold text-[#4FB29E]">MULTIPLYING OUR IMPACT ACROSS THE CONTINENT.</span>
        </p>
        <div className="flex justify-center mt-8">
          <Image
            src="/africa-map-light.svg"
            alt="Africa Map Vision"
            width={300}
            height={300}
            className="w-full max-w-[300px] h-auto opacity-90"
          />
        </div>
      </div>

      {/* Desktop view - custom shape text wrapping */}
      <div className="hidden lg:block relative min-h-[700px]">
        {/* Africa map positioned absolutely */}
        <div className="absolute right-0 top-0 z-10">
          <Image
            src="/africa-map-light.svg"
            alt="Africa Map Vision"
            width={500}
            height={500}
            className="w-[500px] h-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
        
        {/* Custom shaped text container - positioned much lower */}
        <div className="relative z-20 text-lg xl:text-xl font-light leading-relaxed" style={{ marginTop: '60px' }}>
          {/* Text content with custom CSS shape - fits into Africa's western contour */}
          <div 
            className="africa-text-shape text-justify hyphens-auto"
            style={{
              shapeOutside: `polygon(
                0% 0%, 
                50% 0%, 
                52% 5%, 
                54% 10%, 
                56% 15%, 
                58% 20%, 
                62% 25%, 
                66% 30%, 
                70% 35%, 
                75% 40%, 
                80% 45%, 
                85% 50%, 
                88% 55%, 
                85% 60%, 
                80% 65%, 
                75% 70%, 
                68% 75%, 
                62% 80%, 
                58% 85%, 
                54% 90%, 
                52% 95%, 
                50% 100%, 
                0% 100%
              )`,
              clipPath: `polygon(
                0% 0%, 
                50% 0%, 
                52% 5%, 
                54% 10%, 
                56% 15%, 
                58% 20%, 
                62% 25%, 
                66% 30%, 
                70% 35%, 
                75% 40%, 
                80% 45%, 
                85% 50%, 
                88% 55%, 
                85% 60%, 
                80% 65%, 
                75% 70%, 
                68% 75%, 
                62% 80%, 
                58% 85%, 
                54% 90%, 
                52% 95%, 
                50% 100%, 
                0% 100%
              )`,
              float: 'left',
              width: '85%',
              minHeight: '550px'
            }}
          >
            <p className="mb-6">
              The vision of the <span className="font-bold">Kijabe Limb Reconstruction Unit</span> is a world where men, women and children <span className="font-bold text-[#4FB29E]">CAN ACCESS THE LIMB RECONSTRUCTION CARE THAT THEY NEED</span>, when they need it, regardless of where they were born or how much money they happen to have.
            </p>
            <p className="mb-6">
              Towards this end, we are developing a centre of excellence in Kijabe, Kenya that trains <span className="font-extrabold text-[#4FB29E] xl:text-2xl text-xl">10 limb reconstruction surgeons</span> from <span className="font-extrabold text-[#4FB29E] xl:text-2xl text-xl">10 sub-Saharan countries</span> in the <span className="font-extrabold text-[#4FB29E] xl:text-2xl text-xl">next 10 years</span>, <span className="font-bold text-[#4FB29E]">MULTIPLYING OUR IMPACT ACROSS THE CONTINENT.</span>
            </p>
            <p className="mb-6">
              This comprehensive training program will establish a network of skilled surgeons who can provide life-changing care to patients across sub-Saharan Africa, creating a ripple effect of healing and hope that extends far beyond our borders in Kijabe. Each trained surgeon will return to their home country equipped with advanced techniques and knowledge.
            </p>
            <p className="mb-6">
              Through strategic partnerships and innovative training methodologies, we aim to build sustainable healthcare infrastructure that will serve generations of patients throughout the continent, ensuring that no one is left behind due to geographic or economic barriers.
            </p>
            <p>
              Our vision extends beyond individual treatment to systemic change, creating a future where limb reconstruction surgery is accessible and affordable across Africa, transforming lives and communities through the power of skilled, compassionate medical care.
            </p>
          </div>
        </div>
        
        {/* Clear float */}
        <div className="clear-both"></div>
      </div>
    </div>
  );
}