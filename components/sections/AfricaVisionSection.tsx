import Image from "next/image";

export function AfricaVisionSection() {
  return (
    <div className="w-full bg-[#003683] text-white p-8 md:p-16 lg:p-20 relative">
      <h3 className="text-3xl md:text-4xl mb-8 font-light uppercase lg:mb-12">The Vision</h3>
      
      {/* Mobile and tablet view - stacked layout */}
      <div className="lg:hidden space-y-6 text-lg md:text-xl font-light leading-relaxed">
        <p className="text-justify hyphens-auto">
          The vision of the <span className="font-bold">Kijabe Limb Reconstruction Unit</span> is a world where men, women and children <span className="font-bold text-[#4FB29E]">CAN ACCESS THE LIMB RECONSTRUCTION CARE THAT THEY NEED</span>, when they need it, regardless of where they were born or how much money they happen to have.
        </p>
        <p className="text-justify hyphens-auto">
          Towards this end, we are developing a centre of excellence in Kijabe, Kenya that trains <span className="font-extrabold text-[#4FB29E] md:text-xl lg:text-xl text-2xl">10 limb reconstruction surgeons</span> from <span className="font-extrabold text-[#4FB29E] md:text-xl lg:text-xl text-2xl">10 sub-Saharan countries</span> in the <span className="font-extrabold text-[#4FB29E] md:text-xl lg:text-xl text-2xl">next 10 years</span>, <span className="font-bold text-[#4FB29E]">MULTIPLYING OUR IMPACT ACROSS THE CONTINENT.</span>
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
        <div className="relative z-20 text-lg xl:text-xl font-light leading-relaxed" style={{ marginTop: '120px' }}>
          {/* Text content with custom CSS shape */}
          <div 
            className="africa-text-shape text-justify hyphens-auto"
            style={{
              shapeOutside: `polygon(
                0% 0%, 
                45% 0%, 
                50% 5%, 
                58% 12%, 
                65% 20%, 
                70% 30%, 
                75% 42%, 
                78% 55%, 
                75% 68%, 
                70% 80%, 
                65% 90%, 
                58% 96%, 
                45% 100%, 
                0% 100%
              )`,
              float: 'left',
              width: '70%',
              minHeight: '400px'
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