import { Link } from "lucide-react";
import Image from "next/image";

export const HomeDonate = () => {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-between ">
          <Link href="/donate" className="mb-4">
            <Image
              src="/donate-butterfly-navbar.svg"
              alt="Donate"
              width={80}
              height={80}
              objectFit="contain"
              className="hover:opacity-80 transition-opacity"
            />
          </Link>

          <div className="text-right">
            <Image
              src="/Group16.svg"
              alt="Restoring limbs | Rebuilding lives"
              width={200}
              height={70}
              className="h-auto w-auto max-w-[120px] min-[250px]:max-w-[150px] sm:max-w-[200px] md:max-w-[250px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
