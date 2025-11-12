export default function ContactUsPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#4FB29E] py-4">
        <div className="max-w-5xl mx-auto flex justify-center">
          <div className="w-full text-white md:pl-20 lg:pl-0">
            <h1 className="mb-2 font-bold text-4xl flex justify-center md:justify-start md:text-5xl lg:text-9xl lg:ml-5">contact <span className="font-light ml-5">us</span></h1>
            <div className="mb-2">
              <p className="font-bold text-[#003683] mb-2 tracking-wider text-lg md:text-2xl lg:text-5xl flex flex-col items-center text-center w-full">
                KIJABE LIMB RECONSTRUCTION UNIT
              </p>


              <div className="flex flex-col justify-center items-center">
                <p className="tracking-wider text-lg md:text-xl lg:text-4xl">info@kijaberecon.org <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md mr-0"> /</span></p>
                <p className="tracking-wider text-lg md:text-xl lg:text-4xl flex">whatsapp: <span className="flex space-x-3 text-2xl justify-center items-center text-middle ml-2">
                  <span>+254</span>
                  <span>794</span>
                  <span>806</span>
                  <span>940</span>
                </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}